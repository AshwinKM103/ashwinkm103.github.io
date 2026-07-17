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

Pixel-space reconstruction spends capacity on high-entropy detail of little semantic value, while
contrastive learning leans on handcrafted augmentations. Joint-Embedding Predictive Architectures
take a third path: predict the latent representation of missing content, not the content itself.
This critique traces that idea across three works as one arc toward predictive world models —
I-JEPA, which predicts masked-region embeddings at an order of magnitude less compute; a variational
extension that recasts the predictor as a probabilistic world model; and V-JEPA 2, which scales to
over a million hours of video and closes the loop with latent-space planning on real robot arms. The
recurring lesson is that each step relocates difficulty — into latent geometry, alignment, and
control — rather than eliminating it.
