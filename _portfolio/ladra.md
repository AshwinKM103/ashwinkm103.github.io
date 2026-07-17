---
title: "LaDRA: Latent-Space Communication for Deep Research Agents"
collection: portfolio
section: research
order: 2
monogram: "LDR"
summary: "Deep-research agents that hand off **KV-cache state instead of text**, decoding only at tool boundaries. Matches the text baseline at **33% fewer tokens** and **28% faster**, with convergence guarantees."
banner_media: /images/portfolio/ladra.png
tech: ["LLM Agents", "KV-Cache", "Latent Space", "Multi-Agent", "Diffusion"]
meta: "Supervised by Prof. Y. Narahari · IISc · 2026"
links:
  paper: "/files/ladra-paper/ladra-paper.pdf"
---

Deep research agents plan, search, and revise reports through long pipelines of LLM calls, and
every handoff between agents crosses the same bottleneck: hidden states are decoded into tokens,
then re-encoded downstream. Each decode–encode cycle discards information, and across long
revision trajectories the loss compounds. LaDRA (Latent Diffusion Research Agents) asks whether
that mediation is necessary at all. It keeps the test-time-diffusion structure of deep research —
plan, retrieve, iteratively denoise a draft — but replaces text handoffs with direct KV-cache
transfer between agents, decoding only at tool boundaries such as search queries and the final
report. A transactional rollback mechanism ensures a failed decode cannot corrupt the latent
trajectory, and a ridge-regression alignment map, computed once per model, keeps the whole
framework training-free. Alongside the system, I developed supporting theory: the latent denoising
step is a contraction under stated assumptions, text mediation displaces its fixed point, and
text-based evaluation can invert fitness rankings during self-evolution. Empirically, with
Qwen3-4B agents, LaDRA matched its text-mediated counterpart's accuracy while using 33% fewer
tokens and finishing 28% faster, and the projection loss was non-zero in every run — precisely
the bottleneck the theory predicts. Experiments at greater retrieval depth are ongoing.
