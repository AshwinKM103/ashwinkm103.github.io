---
permalink: /
title: "Ashwin K M"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an undergraduate in **Mathematics and Computing** at the **Indian Institute of Science
(IISc), Bangalore**. I work on **large language models and the agents built on them**: how a
model becomes an expert in a domain, how agents coordinate with one another, and how the state
behind a long interaction is carried forward rather than rebuilt each turn.

I came to these questions by building systems and watching where they break. Working on an LLM
tutoring pipeline, I found the hard part was never producing a fluent answer — it was deciding
when a lightweight model suffices and when deeper reasoning is worth its cost, and tracking what
a student actually misunderstands across a session. Most of my work since takes that lesson
seriously. *MentorX* and *FOCAL* treat domain adaptation as a staged process — consolidate a
foundation, align it to a task, then refine — rather than a single monolithic optimization.
*LaDRA* lets research agents hand off latent state instead of re-tokenized text. *IssueOps*
assigns GitHub issues by weighing a developer's expertise, availability, and current workload.

What ties these projects together is a preference for problems whose difficulty is structural
rather than generative: the answer usually exists, and the question is whether the system can
hold the right state, make the right routing decision, and survive conditions it was not designed
for. I judge my systems as much by how they behave outside their training distribution as by
their best-case numbers — some of the findings I value most are the places where they didn't.

Outside research, I started **Nexus**, the science-and-technology fest at IISc's Rhapsody, and
have organized events and sponsorships for **Pravega**, IISc's annual science festival.

## Work Experience

{% include work-experience.html %}

## Skills

{% include skills.html %}

## Research interests

My interests are in machine learning, centered on large language models and the systems built
from them. The question underneath most of my work is how machine expertise is acquired,
coordinated, and retained — how a general model becomes a specialist, how specialists work
together, and what a system carries forward from one step of an interaction to the next.

The first thread is **post-training and domain adaptation**. Standard fine-tuning entangles
knowledge consolidation, task alignment, and generalization in a single optimization, and the
objectives interfere. I study adaptation as a process with temporal structure instead: *MentorX*
formalizes a learn–master–teach progression borrowed from how human expertise develops, and
*FOCAL* unrolls bi-level meta-learning into stages so that conflicting gradients stop cancelling.
The questions I keep returning to are about ordering and interference — which objectives conflict
when optimized jointly, what is gained by separating them in time, and how a model can specialize
without forgetting how to reason.

The second thread is **coordination in multi-agent systems**. Agents today collaborate by
exchanging text, and every handoff decodes hidden state into tokens and re-encodes it, losing
information each cycle; *LaDRA* asks whether that mediation is necessary, and replaces it with
direct latent transfer between agents. The complementary problem is routing: deciding which
agent, model, or tool a task deserves, under uncertainty about cost and payoff. *IssueOps* makes
that decision concrete — weighing expertise, availability, and workload before assigning work —
and I want such decisions grounded in the exploration–exploitation formalisms of reinforcement
learning rather than in heuristics.

The third thread, running under the other two, is **persistent structured state**. Most LLM
systems reconstruct their context from scratch each turn; I keep building systems where state
accumulates instead — a learner's evolving misconceptions, a research draft's working memory, a
repository's history. This draws me to representation learning in latent space, from the
predictive world models of the *JEPA* line to the KV-cache as a medium of communication, and to
reinforcement learning as the machinery for decisions whose consequences unfold over long
horizons, from offline RL as sequence modelling to learning-by-teaching rewards.

In the long run, I want the reliability of agentic systems to be something we can design for and
reason about, not something we discover after deployment.
