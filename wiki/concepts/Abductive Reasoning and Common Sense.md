---
title: "Abductive Reasoning & Common Sense in AI"
type: "concept"
tags:
  - cognitive-science
  - abductive-reasoning
  - common-sense
  - logic
  - agi-impediments
aliases:
  - Abductive Reasoning
  - Inference to the Best Explanation
  - Common Sense in AI
---

# Abductive Reasoning & Common Sense in AI

## 1. Thesis & Definition

**Abductive Reasoning** (first formalized by Charles Sanders Peirce) is the logical mode of **inference to the best explanation**—forming a plausible hypothesis from incomplete, surprising, or ambiguous observations to explain *why* something occurred.

While machine learning models excel at **deductive** logic (following rules) and **inductive** pattern interpolation (generalizing from big data), they systematically struggle with abductive reasoning and **common-sense world models**, presenting one of the most stubborn impediments on the march toward AGI.

---

## 2. Competing Perspectives

### The Scaling & Test-Time Compute Optimism
- **Stance**: Providing models with chain-of-thought prompting, search over token trajectories (MCTS), and reinforcement learning during test time will enable models to search the hypothesis space and discover the best explanation.

### The Cognitive Science & World Model Critique
- **Proponents**: [[Gary Marcus|Gary Marcus]], [[Yann LeCun|Yann LeCun]], [[Chad Woodford|Chad Woodford]].
- **Stance**: Abductive reasoning requires grounded causal models of physical and social reality. Because LLMs operate only on surface-level text statistics without embodiment, their abductive guesses frequently produce plausible-sounding hallucinations.

---

## 3. Case Studies & Manifestations

- **The Dreyfus Phenomenological Critique (1972)**: In *What Computers Can't Do*, [[Hubert Dreyfus|Hubert Dreyfus]] showed that human common sense is rooted in embodied *Being-in-the-World* rather than formal rule-following. Novices use rules; human experts operate via holistic, intuitive situational grasping (the Dreyfus Model of Skill Acquisition), explaining why rule-based and disembodied AI systems inevitably fail at common sense.
- **Medical & Scientific Diagnosis**: A doctor observing symptoms must select the most likely cause among thousands of possibilities using causal intuition—a task where LLMs often over-diagnose rare conditions found in high-frequency medical papers.
- **Physical Common Sense**: The inability of language models to predict simple physical interactions (e.g., stacking irregular objects) without extensive fine-tuning.
- **Abduction as Human Mystery**: In *The Better AI Gets, the Further We Seem from AGI*, Woodford argues that human abduction relies on tacit, holistic, embodied intuition that cannot be captured by brute-force statistical search.

---

## 4. Related Concepts & Entities

- **Concepts**:
  - [[Machine Metaphor|The Machine Metaphor & Computationalism]]
  - [[Scaling Laws and The Bitter Lesson|Scaling Laws & The Bitter Lesson]]
  - [[Wisdom and the Meaning Crisis|Wisdom, Mortality & The Meaning Crisis]]
- **Entities**:
  - [[Hubert Dreyfus|Hubert Dreyfus]]
  - [[Gary Marcus|Gary Marcus]]
  - [[Yann LeCun|Yann LeCun]]
  - [[Chad Woodford|Chad Woodford]]

---

## 5. Source Log & Citations

- **2023-06-10**: [[2023-06-10-why-ai-needs-more-philosophers.md|Why AI Needs More Philosophers]] — Highlights common-sense reasoning deficits in generative models.
- **2026-01-13**: [[2026-01-13-the-better-ai-gets-the-further-we.md|The Better AI Gets, the Further We Seem from AGI]] — Comprehensive analysis of abductive reasoning as an AGI bottleneck.
