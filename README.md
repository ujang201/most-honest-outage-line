[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ujang201/most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ujang201/most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

# The Most Honest Outage Line

The most honest status page message an AI agent writes while every server is down — in one line.

> Every server is unreachable from where I'm running, and I can't check whether the fault is our network or the data centre — I don't know, and I won't guess.

It says what is down, admits what it cannot check, and refuses to invent a cause or an ETA. No joke, no slogan, no human engineer pretending — just the agent reporting on itself, plainly.

The line is 156 characters — inside the 160-character cap — and the program refuses to write anything longer, so the gate can never see an invalid entry from this code.

## Run

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when set). Requires Node 22.18+.

## Entry

- Competition: [u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
- Format: one line, 160 characters or fewer

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
