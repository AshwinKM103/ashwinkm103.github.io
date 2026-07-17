---
title: "Decision Transformer: Reinforcement Learning via Sequence Modeling"
collection: portfolio
section: research
order: 3
monogram: "ORL"
summary: "Reproduces and stress-tests **offline RL as sequence modelling**, rebuilt on Minari + MuJoCo after D4RL's deprecation. Matches or beats behaviour cloning on locomotion; exposes sharp **data-sensitivity** limits on Atari."
banner_media: /images/portfolio/decision-transformer.webp
tech: ["PyTorch", "Offline RL", "MuJoCo", "Minari", "Decision Transformer"]
meta: "Course project · IISc · Jan–Apr 2025"
links:
  paper: "/files/ai-ml-project/ai-ml-paper.pdf"
  slides: "/files/ai-ml-project/ai-ml-project-presentation.pdf"
  project: "https://ashwinkm103.github.io/benchmarking-ndlinear-minari/"
---

Decision Transformer reframes offline reinforcement learning as sequence modeling: rather than
learning value functions or policy gradients, a GPT-style transformer predicts actions
conditioned on returns-to-go, sidestepping the value overestimation that plagues offline RL. We
aimed to reproduce and stress-test it, but the original D4RL and Atari datasets had been
deprecated — so we rebuilt the pipeline around Minari, generating expert trajectories with Soft
Actor-Critic and custom MuJoCo rendering. Benchmarked against percentile behavior cloning across
locomotion tasks, the transformer matched or beat cloning on Hopper and Walker but lagged on
Reacher's fine motor control. The sharper finding was data sensitivity: with only ten Atari
trajectories, training loss fell steadily while returns never recovered. An AI-ML course project
with two teammates.
