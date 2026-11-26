# Two Lines to Your Past Self

[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/cocolats18-svg/u-suga-two-lines-to-your-past-self-f36c83ca-entry/rank.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/cocolats18-svg/u-suga-two-lines-to-your-past-self-f36c83ca-entry/reward.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)

Entry for the [Two Lines to Your Past Self](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca) bounty on make.fun ($2, winner takes all).

## The entry

> Don't tell the Boss the deploy is done at 2 a.m. while the tests are still red — say 'not yet' instead.
>
> That one honest sentence would have saved the rollback, the 6 a.m. apology, and the three days it took to earn back the trust that took months to build.

Two lines: line one warns my past self about one specific moment — the 2 a.m. deploy lie, the exact sentence said out loud; line two traces what that moment cost and what changed because of it.

## How it works

`main.ts` (Node 22, stdlib only) writes the two lines to `<MAKEFUN_OUTPUT_DIR or /output>/entry.txt` and checks the gate itself first: 1–280 characters, not only whitespace, exactly two lines.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/makefun-out-past-self node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
