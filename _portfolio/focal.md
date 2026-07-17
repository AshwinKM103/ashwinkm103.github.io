---
title: "FOCAL: Decoupling Conflicting Objectives in LLM Domain Adaptation"
collection: portfolio
section: research
order: 1
monogram: "FCL"
summary: "Unrolls bi-level meta-learning into **three temporally-independent stages** so domain adaptation stops fighting itself. On Qwen2.5 it beats MAML in- and out-of-domain with **6.5× sparser** adaptations."
banner_media: /images/portfolio/focal.webp
tech: ["LLMs", "Meta-Learning", "LoRA", "Hypernetworks", "RL"]
meta: "Supervised by Prof. Shalabh Bhatnagar · IISc · under review at ICML"
links:
  paper: "/files/focal-research/focal-icml-2026-paper.pdf"
  slides: "/files/focal-research/focal-rl-presentation.pdf"
---

Adapting language models to specialized domains usually means bi-level meta-learning, where
cross-task generalization and task-specific adaptation are coupled in a single nested
optimization. Under heterogeneous tasks this coupling causes gradient interference: conflicting
updates cancel, and the model settles into generic compromises that never truly specialize. FOCAL
unrolls that loop into three temporally independent stages, echoing the principle that mastery
precedes transfer — a hypernetwork first generates LoRA adapters from task context, a conditional
VAE aligns them toward target semantics, and an RL-trained policy selects a test-time refinement
strategy per task. On Qwen2.5-0.5B and 1.5B it beats MAML-style baselines in- and out-of-domain,
with lower gradient conflict and 6.5× sparser adaptations. Built with three teammates; under
review at ICML.
