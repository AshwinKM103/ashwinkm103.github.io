---
title: "Predictive Representation Learning for World Modeling"
collection: talks
type: "Reading Critique"
order: 3
permalink: /talks/jepa-world-models
venue: "Reading critique · IISc"
date: 2025-10-01
monogram: "JEP"
summary: "A reading critique tracing **Joint-Embedding Predictive Architectures** (I-JEPA → variational JEPA → V-JEPA 2) as one arc toward **predictive world models** — and what each step leaves unresolved."
banner_media: /images/portfolio/jepa.webp
tech: ["JEPA", "World Models", "Self-Supervised Learning", "Representation Learning"]
meta: "Reading critique · I-JEPA → variational JEPA → V-JEPA 2"
links:
  paper: "/files/dgm-reading-critique/jepa-reading-critique.pdf"
  slides: "/files/dgm-reading-critique/jepa-reading-critique-presentation.pdf"
---

Pixel-space reconstruction spends model capacity on high-entropy detail that carries little
semantic weight, while contrastive learning leans on handcrafted augmentations. Joint-Embedding
Predictive Architectures (JEPAs) take a third path: predict the latent representation of missing
content rather than the content itself. This critique traces that idea across three works as a
single arc toward predictive world models — I-JEPA, which showed that predicting embeddings of
masked image regions yields semantic representations at an order of magnitude less compute than
masked autoencoders; a variational extension that recasts the deterministic predictor as a
probabilistic world model with explicit uncertainty; and V-JEPA 2, which scales the recipe to over
a million hours of video and closes the loop with latent-space planning on real robot arms. Beyond
synthesis, the critique examines what each step leaves unresolved: I-JEPA's semantic abstraction
comes from hand-designed masking heuristics rather than the objective itself; the variational
variant remains likelihood-free with respect to observations; and V-JEPA 2 plans over
representation-space distances that are not guaranteed to align with task objectives. The recurring
lesson is that each extension relocates difficulty — into latent geometry, alignment, and control
coupling — rather than eliminating it.
