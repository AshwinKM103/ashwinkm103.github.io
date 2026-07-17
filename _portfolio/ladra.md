---
title: "LaDRA: Latent-Space Communication for Deep Research Agents"
collection: portfolio
section: research
order: 2
monogram: "LDR"
summary: "Deep-research agents that hand off **KV-cache state instead of text**, decoding only at tool boundaries. Matches the text baseline at **33% fewer tokens** and **28% faster**, with convergence guarantees."
banner_media: /images/portfolio/ladra.webp
tech: ["LLM Agents", "KV-Cache", "Latent Space", "Multi-Agent", "Diffusion"]
meta: "Supervised by Prof. Y. Narahari · IISc · 2026"
links:
  paper: "/files/ladra-paper/ladra-paper.pdf"
---

Deep-research agents plan, search, and revise reports through long pipelines of LLM calls, and
every handoff hits the same bottleneck: hidden states are decoded into tokens, then re-encoded.
Each cycle discards information, and the loss compounds across long trajectories. LaDRA asks
whether that mediation is necessary. It keeps the test-time-diffusion structure of deep research
but replaces text handoffs with direct KV-cache transfer between agents, decoding only at tool
boundaries; a transactional rollback protects the latent trajectory, and a ridge-regression
alignment map keeps the framework training-free. I developed the supporting theory, showing the
latent denoising step is a contraction whose fixed point text mediation displaces. With Qwen3-4B
agents, LaDRA matches the text baseline's accuracy at 33% fewer tokens and 28% faster.
