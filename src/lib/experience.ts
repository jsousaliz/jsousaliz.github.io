export interface ExperienceStart {
  year: number;
  monthIndex: number;
}

export const PROFESSIONAL_EXPERIENCE_START: ExperienceStart = {
  year: 2010,
  monthIndex: 0,
};

export function calculateCompletedYears(
  start: ExperienceStart,
  currentDate: Date = new Date(),
): number {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const completedYears =
    currentYear - start.year - (currentMonth < start.monthIndex ? 1 : 0);

  return Math.max(0, completedYears);
}
