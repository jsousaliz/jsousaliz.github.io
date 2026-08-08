import sharp from 'sharp';

const assets = [
  {
    source: 'public/favicon.svg',
    target: 'public/favicon.png',
    width: 512,
    height: 512,
  },
  {
    source: 'public/og-card.svg',
    target: 'public/og-card.png',
    width: 1200,
    height: 630,
  },
];

for (const asset of assets) {
  await sharp(asset.source)
    .resize(asset.width, asset.height)
    .png()
    .toFile(asset.target);

  console.log(`${asset.target} (${asset.width}x${asset.height})`);
}
