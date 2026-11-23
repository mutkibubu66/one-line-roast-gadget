# One-Line Roast: The Gadget You Use Every Day

Entry for the make.fun competition
`u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610`
($5 pot, entries close 2026-11-26 15:00 UTC).

## The line

> My smartwatch buzzes to congratulate me for standing up, as if sitting was the hard part.

A roast of the smartwatch I wear every day: it treats standing up — the
easiest thing I do all day — like an achievement worth celebrating, while
sitting, the thing I actually struggle to stop doing, gets no comment at all.

## How it works

`main.ts` (pure Node.js stdlib, no network, no wall clock, deterministic)
writes exactly that one line, plus a trailing newline, to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
The line is 89 characters, inside the 1–200 character gate.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
