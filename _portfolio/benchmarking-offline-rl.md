---
title: "Decision Transformer: Reinforcement Learning via Sequence Modeling"
collection: portfolio
section: research
order: 3
monogram: "ORL"
summary: "Reproduces and stress-tests **offline RL as sequence modelling**, rebuilt on Minari + MuJoCo after D4RL's deprecation. Matches or beats behaviour cloning on locomotion; exposes sharp **data-sensitivity** limits on Atari."
banner_media: /images/portfolio/decision-transformer.png
tech: ["PyTorch", "Offline RL", "MuJoCo", "Minari", "Decision Transformer"]
meta: "Course project · IISc · Jan–Apr 2025"
links:
  paper: "/files/ai-ml-project/ai-ml-paper.pdf"
  slides: "/files/ai-ml-project/ai-ml-project-presentation.pdf"
  project: "https://ashwinkm103.github.io/benchmarking-ndlinear-minari/"
---

Decision Transformer reframes offline reinforcement learning as sequence modeling: rather than
learning value functions or policy gradients, a GPT-style transformer predicts actions
conditioned on returns-to-go, sidestepping the bootstrapping instability and value
overestimation that plague offline RL. Our goal was to reproduce and stress-test this idea, and
we immediately hit a practical wall — the original D4RL and Atari replay datasets have been
deprecated. We rebuilt the entire pipeline around Minari, generating expert trajectories with
Soft Actor-Critic, rewriting data loading and preprocessing around returns-to-go computation and
normalization, and constructing a custom MuJoCo rendering pipeline for evaluation. Benchmarked
against percentile behavior cloning on HalfCheetah, Hopper, Walker2D, and Reacher across three
dataset qualities, Decision Transformer consistently matched or beat behavior cloning on
locomotion tasks, but underperformed on Reacher's fine motor control. The sharper finding was
data sensitivity: on Atari, with only ten trajectories available, training loss fell steadily
while actual returns stayed far below the original agent's — the architecture is only as strong
as the breadth of trajectories behind it. Completed with two teammates for an AI-ML course at IISc.
