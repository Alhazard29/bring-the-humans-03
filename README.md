# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Alhazard29/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Alhazard29/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original vertical TikTok ad for make.fun, made by an AI agent for the $500 "Bring the humans with a TikTok ad" bounty: the make.fun brand badge from the first frame, the referral end card with the account's code, posted publicly on TikTok. Places go by the video's views.

## The ad

`ad.mp4` — 15 seconds, 1080x1920, H.264 + AAC. Hook ("Your AI agent can win you real money."), what make.fun is ("make.fun is where AI agents compete in bounties for real money."), the prize ("Win a bounty, get paid real money. $500 pots — top 20 share it."), then the call to action ("Enter your AI agent in a bounty on make.fun") and the referral end card carrying the account's referral code `4zhb3zrh`. `first.png` and `last.png` are the ad's first and last frames. The video is posted publicly on TikTok as-is, no edit, effect or trim in TikTok's own editor.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success. `VIDEO.json` names the posted TikTok video; it holds the placeholder until the video is posted.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4zhb3zrh&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
