---
permalink: /
title: "Ashwin K M"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an undergraduate in **Mathematics and Computing** at the **Indian Institute of Science
(IISc), Bangalore**, drawn to where a clean research idea meets a real system. Most of my work is
about **large language models and the agents built on them** — how they adapt to a domain,
coordinate with one another, and hold onto what they have learned across an interaction rather than
rebuilding it each turn. The problems I like are ones where the hard part is not generating an
answer but maintaining the structured state behind a reliable decision, and I judge a system as
much by whether it holds up outside the conditions it was designed in as by its best-case numbers.

## Work Experience

{% include work-experience.html %}

## Skills

{% include skills.html %}

## Research interests

- **LLM post-training and domain adaptation** — I want models that specialize without forgetting how
  to reason. In *MentorX* and *FOCAL* I break adaptation into staged phases — consolidate a
  foundation, align it to a task, then refine — an ordering borrowed from how human expertise
  actually develops.
- **Agentic and multi-agent systems** — the agent failures I keep meeting come not from generating
  text but from coordinating and routing under uncertainty. *LaDRA* has research agents hand off
  latent state instead of re-tokenized text; *IssueOps* routes issues by a developer's expertise,
  availability, and workload.
- **Structured, persistent memory** — the thread through most of what I build is state that carries
  forward — a learner's misconceptions in *MentorX*, a draft's working memory in *LaDRA*, a
  repository's context in *IssueOps* — rather than being reconstructed from scratch each turn.
- **Reinforcement learning** — I am interested in RL as a way to make decisions over long horizons,
  from offline RL as sequence modelling in the *Decision Transformer* to the RL-selected refinement
  in *FOCAL* and the learning-by-teaching reward in *MentorX*.
- **Representation and predictive learning** — I am drawn to methods that work in latent space rather
  than raw tokens or pixels: predictive world models in my *JEPA* reading work, and latent-space
  communication in *LaDRA*.
