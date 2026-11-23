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

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
