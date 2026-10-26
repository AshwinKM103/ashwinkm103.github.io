---
title: "MambaRecall: Coarse-to-Fine Token Memory"
banner_media: /images/portfolio/selective-memory.webp
collection: portfolio
section: research
order: 0
monogram: "STM"
summary: "A memory adapter for frozen Mamba2 separates recent-context processing from selective reads of encoded tokens in distant history, investigating representation and access bottlenecks in recurrent models. Three paired runs show a 2.82% reduction in 32K PG-19 perplexity."
tech: ["Recurrent Language Models", "Long-Context Memory", "Sparse Attention", "Mamba2", "Representation Learning"]
meta: "Aug 2026 – Dec 2026"
---

Recurrent language models must preserve distinctions in their history and make relevant details
accessible when later predictions depend on them. Hierarchical Memory Mamba (HMM) adds external
memory to Mamba, but compresses segments into summary vectors and averages selected entries,
potentially obscuring the evidence a prediction requires. This project developed a memory adapter
that separates finding relevant history from reading its contents. A dedicated sliding window
handles recent context, while a distant path selects completed chunks and attends to their encoded
token representations. Adapting RAMba’s hierarchical sparse attention to a frozen Mamba2 backbone,
the design uses selected relevance scores in differentiable fusion weights, connecting those scores
to prediction loss beyond their role in discrete selection. Across three paired Mamba2-1.3B runs,
the complete adapter reduced mean 32K PG-19 perplexity by **2.82% relative to local HMM**, with
improvements at 4K, 8K, 16K, and 32K. These findings support better long-context prediction; the
broader motivation is memory that lets long-horizon reasoning revisit earlier evidence without
relying solely on compressed summaries.
