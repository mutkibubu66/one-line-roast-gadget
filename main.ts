// One-Line Roast: The Gadget You Use Every Day
// make.fun competition: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Writes exactly one line — a roast of a gadget used every day — to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Pure Node.js stdlib, no network, no wall clock, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch buzzes to congratulate me for standing up, as if sitting was the hard part.";

// The gate allows 1–200 characters: refuse to write an over-long line
// rather than submit an entry the gate would reject.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line is ${LINE.length} characters, gate allows 1–200`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
