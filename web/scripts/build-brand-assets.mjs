/**
 * Generates the favicon set and the Open Graph card from the real logo file.
 *
 * Everything is derived from public/topline-logo.png with no network access and
 * no dependency beyond sharp, which ships with Next. Committed so the binaries
 * in app/ are reproducible rather than mystery assets.
 *
 * Run with: node scripts/build-brand-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOGO = join(root, "public", "topline-logo.png");
const APP = join(root, "app");

const INK = { r: 0x15, g: 0x13, b: 0x0f, alpha: 1 };
const PAPER = { r: 0xff, g: 0xff, b: 0xff, alpha: 1 };
const AMBER = { r: 0xe3, g: 0x96, b: 0x0c, alpha: 1 };

/**
 * The roof mark occupies the top of the logo, above the TOPLINE wordmark.
 * Slice that band and trim the transparent margin sharp finds around it.
 *
 * The full mark is roughly 3.4:1. Dropped whole into a square frame it becomes
 * a sliver that renders as a gold smear at 16px, which was checked at size and
 * rejected. `gable` keeps the mark's right-hand house instead: a symmetric roof
 * peak with its window centred beneath it, close to square, unmistakably this
 * logo, and still readable as a roof in a 16px browser tab. The window of the
 * crop was chosen by rendering eight candidates at 16px and comparing them.
 */
async function roofMark({ gable = false } = {}) {
  const { width, height } = await sharp(LOGO).metadata();
  const bandHeight = Math.round(height * 0.43);

  const trimmed = await sharp(LOGO)
    .extract({ left: 0, top: 0, width, height: bandHeight })
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });

  if (!gable) {
    return {
      buffer: trimmed.data,
      width: trimmed.info.width,
      height: trimmed.info.height,
    };
  }

  const GABLE_LEFT = 0.6;
  const GABLE_WIDTH = 0.32;
  const cropped = await sharp(trimmed.data)
    .extract({
      left: Math.round(trimmed.info.width * GABLE_LEFT),
      top: 0,
      width: Math.round(trimmed.info.width * GABLE_WIDTH),
      height: trimmed.info.height,
    })
    .toBuffer({ resolveWithObject: true });

  return {
    buffer: cropped.data,
    width: cropped.info.width,
    height: cropped.info.height,
  };
}

/** Centers the mark on a square ground with even padding on all sides. */
async function squareIcon({ size, background, padding, out }) {
  const mark = await roofMark({ gable: true });
  const box = Math.round(size * (1 - padding * 2));
  const scale = Math.min(box / mark.width, box / mark.height);
  const w = Math.max(1, Math.round(mark.width * scale));
  const h = Math.max(1, Math.round(mark.height * scale));

  const resized = await sharp(mark.buffer).resize(w, h).png().toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([
      {
        input: resized,
        left: Math.round((size - w) / 2),
        top: Math.round((size - h) / 2),
      },
    ])
    .png()
    .toFile(out);

  console.log(`wrote ${out} (${size}x${size}, mark ${w}x${h})`);
}

/**
 * The social card: the logo on its own white plate, set on the industrial ink
 * ground, under the amber rule the site uses at the top of the form card.
 * The logo art already carries the wordmark and tagline, so no font rendering
 * is needed and the script stays fully offline.
 */
async function openGraphCard() {
  const W = 1200;
  const H = 630;
  const RULE = 16;

  const PLATE_W = 780;
  const PLATE_H = 440;
  const plateLeft = Math.round((W - PLATE_W) / 2);
  const plateTop = Math.round((H - PLATE_H) / 2) + 10;

  const logoW = 600;
  const logo = await sharp(LOGO)
    .resize({ width: logoW })
    .flatten({ background: PAPER })
    .png()
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const plate = await sharp({
    create: { width: PLATE_W, height: PLATE_H, channels: 4, background: PAPER },
  })
    .composite([
      {
        input: logo,
        left: Math.round((PLATE_W - logoW) / 2),
        top: Math.round((PLATE_H - logoMeta.height) / 2),
      },
    ])
    .png()
    .toBuffer();

  const rule = await sharp({
    create: { width: W, height: RULE, channels: 4, background: AMBER },
  })
    .png()
    .toBuffer();

  await sharp({
    create: { width: W, height: H, channels: 4, background: INK },
  })
    .composite([
      { input: rule, left: 0, top: 0 },
      { input: plate, left: plateLeft, top: plateTop },
    ])
    .png()
    .toFile(join(APP, "opengraph-image.png"));

  console.log(`wrote ${join(APP, "opengraph-image.png")} (${W}x${H})`);
}

await squareIcon({
  size: 512,
  background: PAPER,
  padding: 0.10,
  out: join(APP, "icon.png"),
});

await squareIcon({
  size: 180,
  background: INK,
  padding: 0.12,
  out: join(APP, "apple-icon.png"),
});

await openGraphCard();
