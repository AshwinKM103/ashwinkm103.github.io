---
title: "Quest TwinOps"
banner_media: /images/portfolio/quest-twinops-research.webp
collection: portfolio
section: internships
order: 0
monogram: "QTO"
excerpt: "Investigating how turbine digital twins connect multimodal evidence to past investigations, retain rejected explanations, and use observed outcomes to improve later retrieval, hypothesis revision, and decisions about what to test next."
summary: "Investigating how turbine digital twins connect multimodal evidence to past investigations, retain rejected explanations, and use observed outcomes to improve later retrieval, hypothesis revision, and decisions about what to test next."
tech: ["Agent Memory", "Multimodal Reasoning", "Digital Twins", "Hypothesis Revision", "Time Series"]
meta: "Research Intern · Quest Lab · Aug 2026 – Dec 2026"
---

A turbine investigation draws on evidence that rarely fits into one representation: sensor histories describe change, manuals specify operating constraints, and schematics locate components. Earlier investigations add what was suspected, tested, and rejected. **Quest TwinOps** asks how a digital twin can organize this experience into memory that helps it revise explanations when new evidence contradicts them.

The research vision links evidence by component, operating interval, and investigation. I am designing **heterogeneous memory representations**: relations capture component associations, layout-aware representations preserve diagram structure, and similarity retrieval finds relevant passages or episodes. Recent observations form working context; episodic records retain competing hypotheses, predicted outcomes, and unsuccessful searches; consolidation preserves useful knowledge alongside its provenance and uncertainty. A central question is what should survive consolidation when rare events matter but unusual readings may also reflect sensor errors or changed operating conditions.

Consider an unexpected temperature rise. The envisioned copilot retrieves comparable operating intervals, component context, and prior investigations, then compares a sensor problem with a genuine operating change. It identifies an observation that could distinguish them and proposes a test or corrective step for approval. After the observation or human-mediated action, it records the outcome and revises its explanation. **Learning from an investigation** means that this outcome changes later retrieval, hypothesis ranking, or recommendations.

I built telemetry replay and turbine visualization as the experimental foundation. The memory and feedback loop are the research direction: I plan to compare them with stateless interaction and fixed text retrieval, testing whether retained outcomes improve hypothesis revision and reduce repeated errors. This connects turbine investigation to a broader question for AI scientists: how experience should change both their explanations and their choice of the next experiment.
