import {
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { mysticResponses } from '@/data/mysticResponses';
import {
  createShuffledDurationCycle,
  pickRandomResponse,
} from '@/lib/mysticCoffee';
import './MysticCoffee.css';

const SHAKE_DURATIONS_MS = [550, 900, 1300, 1800, 2400] as const;
const REDUCED_MOTION_DURATION_MS = 120;
const ANSWER_VISIBLE_DURATION_MS = 6000;
const ANSWER_DISMISS_DURATION_MS = 1200;
const DRAG_THRESHOLD_PX = 44;
const HORIZONTAL_GESTURE_RATIO = 1.25;

type InteractionState = 'idle' | 'shaking' | 'answered' | 'dismissing';

interface PointerPosition {
  x: number;
  y: number;
}

function browserRandom(): number {
  if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
    return Math.random();
  }

  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0]!;
  return randomValue / 2 ** 32;
}

export default function MysticCoffee() {
  const [answer, setAnswer] = useState('');
  const [interactionState, setInteractionState] =
    useState<InteractionState>('idle');
  const [shakeDurationMs, setShakeDurationMs] = useState<number>(
    SHAKE_DURATIONS_MS[0],
  );
  const timeoutId = useRef<number | undefined>(undefined);
  const shaking = useRef(false);
  const recentAnswers = useRef<string[]>([]);
  const remainingDurations = useRef<number[]>([]);
  const previousDuration = useRef<number | undefined>(undefined);
  const pointerStart = useRef<PointerPosition | null>(null);
  const draggedBall = useRef(false);

  const canShake =
    interactionState === 'idle' || interactionState === 'answered';

  useEffect(
    () => () => {
      window.clearTimeout(timeoutId.current);
    },
    [],
  );

  function shake(): void {
    if (shaking.current) return;

    shaking.current = true;
    window.clearTimeout(timeoutId.current);
    setInteractionState('shaking');

    const shakeDuration = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? REDUCED_MOTION_DURATION_MS
      : takeNextShakeDuration();
    setShakeDurationMs(shakeDuration);

    timeoutId.current = window.setTimeout(() => {
      const nextAnswer = pickRandomResponse(
        mysticResponses,
        recentAnswers.current,
        browserRandom,
      );
      recentAnswers.current = [...recentAnswers.current, nextAnswer].slice(-2);
      setAnswer(nextAnswer);
      setInteractionState('answered');
      shaking.current = false;
      scheduleAnswerReset();
    }, shakeDuration);
  }

  function scheduleAnswerReset(): void {
    timeoutId.current = window.setTimeout(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (reduceMotion) {
        resetToIdle();
        return;
      }

      setInteractionState('dismissing');
      timeoutId.current = window.setTimeout(
        resetToIdle,
        ANSWER_DISMISS_DURATION_MS,
      );
    }, ANSWER_VISIBLE_DURATION_MS);
  }

  function resetToIdle(): void {
    setAnswer('');
    setInteractionState('idle');
  }

  function takeNextShakeDuration(): number {
    if (remainingDurations.current.length === 0) {
      remainingDurations.current = createShuffledDurationCycle(
        SHAKE_DURATIONS_MS,
        previousDuration.current,
        browserRandom,
      );
    }

    const duration = remainingDurations.current.shift()!;
    previousDuration.current = duration;
    return duration;
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>): void {
    if (!canShake) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    draggedBall.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLButtonElement>): void {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const horizontalDistance = Math.abs(event.clientX - start.x);
    const verticalDistance = Math.abs(event.clientY - start.y);
    draggedBall.current =
      horizontalDistance >= DRAG_THRESHOLD_PX &&
      horizontalDistance >= verticalDistance * HORIZONTAL_GESTURE_RATIO;
    if (draggedBall.current) shake();
  }

  function handleBallClick(event: MouseEvent<HTMLButtonElement>): void {
    if (draggedBall.current) {
      draggedBall.current = false;
      return;
    }

    // Preserva Enter e Espaço, sem transformar um toque simples em sacudida.
    if (event.detail === 0) shake();
  }

  const accessibleStatus =
    interactionState === 'shaking'
      ? 'A mágica está acontecendo.'
      : interactionState === 'answered' || interactionState === 'dismissing'
        ? answer
        : 'A Mystic Coffee está pronta.';
  const ballStyle = {
    '--mystic-shake-duration': `${shakeDurationMs}ms`,
  } as CSSProperties;

  return (
    <div className="mystic-experience">
      <div className="mystic-experience__copy">
        <p className="mystic-experience__label">Mystic Coffee</p>
        <h2 id="mystic-coffee-title">Pausa para descontrair</h2>
        <p className="mystic-experience__lead">
          Pense em uma pergunta de <strong>sim ou não</strong> e deixe o Mystic
          Coffee responder. Não nos responsabilizamos pelo resultado 😅.
        </p>
        <button
          className="mystic-experience__action"
          type="button"
          disabled={!canShake}
          onClick={shake}
        >
          Sacudir
        </button>
      </div>

      <div className="mystic-orbit">
        <button
          className="mystic-orbit__ball"
          type="button"
          disabled={!canShake}
          data-state={interactionState}
          style={ballStyle}
          aria-label="Sacudir a Mystic Coffee"
          onClick={handleBallClick}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
            draggedBall.current = false;
          }}
        >
          <span className="mystic-orbit__window">
            {(interactionState === 'idle' ||
              interactionState === 'dismissing') && (
              <img
                className={`mystic-orbit__coffee mystic-orbit__coffee--initial${
                  interactionState === 'dismissing'
                    ? ' mystic-orbit__coffee--returning'
                    : ''
                }`}
                src="/coffee-cup.svg"
                alt=""
                aria-hidden="true"
                draggable={false}
                width={108}
                height={108}
              />
            )}

            {interactionState === 'shaking' && (
              <span className="mystic-orbit__sparkles" aria-hidden="true">
                <i>✦</i>
                <i>✧</i>
                <i>✦</i>
                <i>·</i>
                <i>✧</i>
                <i>✦</i>
                <i>·</i>
              </span>
            )}

            {(interactionState === 'answered' ||
              interactionState === 'dismissing') && (
              <span
                className="mystic-orbit__result"
                data-state={interactionState}
              >
                <img
                  className="mystic-orbit__coffee mystic-orbit__coffee--answer"
                  src="/coffee-cup.svg"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  width={56}
                  height={56}
                />
                <span className="mystic-orbit__answer">{answer}</span>
              </span>
            )}

            <span
              className="visually-hidden"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {accessibleStatus}
            </span>
          </span>
        </button>
        <p>Arraste a esfera para os lados ou use o botão.</p>
      </div>
    </div>
  );
}
