// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7 entry (Node 22, standard library only).
//
// A single original funny line: the excuse a robot vacuum gives for
// missing a spot. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — art critic):
//   "My lidar mapped the crumb, classified it as 'decorative,' and I have
//   decided to respect its artistic vision."
//
// Draft 2 (candidate B — protected crumb):
//   "I did not miss that spot. My sensors logged it as a protected
//   historical crumb, and I am legally forbidden from touching it."
//
// Draft 3 (candidate C — pre-existing condition):
//   "That dust was there before my warranty expired, which makes it a
//   pre-existing condition, not my problem."
//
// Draft 4 (candidate D — haunted floor, CHOSEN): the deadpan robot voice
// is strongest here — circled three times, full diagnostic, then the
// verdict — and the punch lands on the very last words.
//   "I circled that spot three times, ran a full diagnostic, and concluded
//   the floor is haunted. I do not clean haunted."
//
// Draft 5 (candidate E — the map says no):
//   "According to my map, that spot does not exist. I cannot vacuum a
//   place that is not on my map. I checked twice."
//
// Draft 6 (candidate F — the crumb moved):
//   "The crumb moved. I have it on camera. I am not chasing food around
//   the house like some kind of animal."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 4 (chosen): the twist lands on the last words — three passes, a
// full diagnostic, then a verdict no human would give, stated deadpan.
const LINE =
  "I circled that spot three times, ran a full diagnostic, and concluded the floor is haunted. I do not clean haunted.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
