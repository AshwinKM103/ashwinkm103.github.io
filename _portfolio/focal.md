---
title: "FOCAL: Decoupling Conflicting Objectives in LLM Domain Adaptation"
collection: portfolio
section: research
order: 1
monogram: "FCL"
summary: "Unrolls bi-level meta-learning into **three temporally-independent stages** so domain adaptation stops fighting itself. On Qwen2.5 it beats MAML in- and out-of-domain with **6.5× sparser** adaptations."
banner_media: /images/portfolio/focal.png
tech: ["LLMs", "Meta-Learning", "LoRA", "Hypernetworks", "RL"]
meta: "Supervised by Prof. Shalabh Bhatnagar · IISc · under review at ICML"
links:
  paper: "/files/focal-paper/focal-paper.pdf"
---

Adapting language models to specialized domains usually means bi-level meta-learning, where
cross-task generalization and task-specific adaptation are coupled inside a single nested
optimization. Under heterogeneous tasks, this coupling causes gradient interference: conflicting
updates cancel each other, and the model settles into generic compromise solutions that never
truly specialize. FOCAL (Foundation-Oriented Cognitive Adaptation Learning) unrolls that loop
into three temporally independent stages, echoing the cognitive-science principle that mastery
precedes transfer. First, a prompt-conditioned hypernetwork generates LoRA adapters directly from
task context, consolidating foundations free of task-specific pressure. Second, a task-aware
conditional VAE aligns those generalized weights toward target semantics using task vectors.
Third, refinement becomes a decision problem: an RL-trained policy selects among test-time
learning, LoRA mixing, test-time scaling, and latent modification for each task. On Qwen2.5-0.5B
and 1.5B, FOCAL outperformed MAML-style baselines both in-domain and out-of-distribution, and the
analyses explain why — lower gradient conflict, 6.5× sparser adaptations, and per-domain weight
signatures that stay visually distinct where MAML's overlap. Ablations that skip stages forfeit
most of the improvement, supporting the ordering itself as the contribution. Built with three
teammates; under review at ICML.
