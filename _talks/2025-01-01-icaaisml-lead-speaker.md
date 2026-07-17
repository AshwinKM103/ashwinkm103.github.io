---
title: "MentorX: From Student to Teacher — a Cognitively-Grounded Framework for LLM Adaptation"
collection: talks
type: "Lead Speaker"
order: 1
permalink: /talks/mentorx
venue: "International Conference on Applied Artificial Intelligence and Scientific Machine Learning"
date: 2025-01-01
location: "India"
monogram: "MX"
internship: true
summary: "A **learn → master → teach** framework (LMT²) grounded in cognitive science, shipped as **MentorX** on Llama-3.1-8B. Staged tuning lifts accuracy **23.9% → 32.2%**; piloted with ~50 government-school students."
banner_media: /images/portfolio/mentorx.webp
tech: ["LLM Post-Training", "RL", "Llama-3.1", "Pedagogical AI"]
meta: "Lead Speaker · Intl. Conf. on Applied AI & Scientific ML · under review at ICLR 2026"
links:
  paper: "/files/mentorx-research/mentorx-paper.pdf"
  slides: "/files/mentorx-research/mentorx-project-presentation.pdf"
  code: "https://github.com/AshwinKM103/Mentor-X"
---

Most LLM adaptation treats expertise as one monolithic optimization, entangling knowledge
consolidation, task alignment, and generalization at once. MentorX starts from a premise borrowed
from cognitive science: expertise develops through temporally separated phases of learning,
mastery, and teaching. We formalized this as Learn–Master–Teach Tuning (LMT²) and instantiated it
in MentorX, a teaching assistant on Llama-3.1-8B trained over 35 chapters of CBSE mathematics. My
modules were the ones where the model acts as learner and teacher: a feedback-driven practice loop,
and a learning-by-teaching stage cast as multi-turn RL, with a reward balancing solution
correctness against pedagogical discipline so the model guides rather than leaks answers. Staged
tuning lifted accuracy from 23.9% to 32.2%. The paper is under review at ICLR 2026.
