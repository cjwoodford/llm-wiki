---
title: "Scaling Laws & The Bitter Lesson"
type: "concept"
tags:
  - machine-learning
  - scaling-laws
  - the-bitter-lesson
  - compute
  - agi
aliases:
  - Scaling Laws
  - The Bitter Lesson
  - Pre-training Wall
  - Compute Scaling
---

# Scaling Laws & The Bitter Lesson

## 1. Thesis & Definition

**The Bitter Lesson** (formulated by Rich Sutton in 2019) is the foundational observation in artificial intelligence history that general computational methods leveraging massive compute and search (learning) consistently outperform human-engineered domain knowledge and architectural priors over long time horizons.

**Scaling Laws** (Kaplan et al., 2020; Hoffmann et al., 2022) formalized this into empirical power-law equations predicting predictable performance improvements as a function of model parameter count, training dataset size, and compute budget.

---

## 2. Competing Perspectives

```text
┌────────────────────────────────────────┐      ┌────────────────────────────────────────┐
│     The Pure Scaling Hypothesis        │  VS  │         The Scaling Wall Thesis        │
├────────────────────────────────────────┤      ├────────────────────────────────────────┤
│ Continue scaling compute and data;     │      │ Pre-training hits diminishing returns; │
│ AGI will emerge naturally without      │      │ LLMs require world models, symbolic    │
│ fundamental architectural changes.     │      │ hybridization, and embodied grounding. │
└────────────────────────────────────────┘      └────────────────────────────────────────┘
```

- **Scaling Evangelism**: Championed by [[Sam Altman|Sam Altman]], [[Dario Amodei|Dario Amodei]], and frontier labs between 2020 and 2024.
- **Diminishing Returns & Pivot to Inference (2025–2026)**: As web text data exhausted and pre-training scaling slowed, labs pivoted to **post-training reinforcement learning** (DeepSeek-R1, OpenAI o-series) and **test-time compute** (Snell et al.).
- **Architectural Skepticism**: [[Gary Marcus|Gary Marcus]] and [[Yann LeCun|Yann LeCun]] maintain that scaling token prediction will never bridge the gap to causal world understanding.

---

## 3. Case Studies & Manifestations

- **ImageNet (2012)**: AlexNet's victory marking the deep learning revolution, validating Sutton's bitter lesson over hand-crafted computer vision filters.
- **Chinchilla Optimal Compute (2022)**: Hoffmann et al.'s demonstration that previous models were severely undertrained relative to their parameter size.
- **The $800B Valuation Bubble**: The economic inflation of frontier AI valuations predicated on uninterrupted exponential scaling toward omniscient AGI.

---

## 4. Related Concepts & Entities

- **Concepts**:
  - [[Machine Metaphor|The Machine Metaphor & Computationalism]]
  - [[Quasi-Local Sovereign AI|Quasi-Local, Domain-Specific & Sovereign AI]]
  - [[Abductive Reasoning and Common Sense|Abductive Reasoning & Common Sense]]
- **Entities**:
  - [[Sam Altman|Sam Altman]]
  - [[Dario Amodei|Dario Amodei]]
  - [[Gary Marcus|Gary Marcus]]
  - [[Yann LeCun|Yann LeCun]]
  - [[OpenAI|OpenAI]]
  - [[Anthropic|Anthropic]]

---

## 5. Source Log & Citations

- **2023-06-10**: [[2023-06-10-why-ai-needs-more-philosophers.md|Why AI Needs More Philosophers]] — Early critique of the brute-force scaling dogma.
- **2026-01-13**: [[2026-01-13-the-better-ai-gets-the-further-we.md|The Better AI Gets, the Further We Seem from AGI]] — Comprehensive survey of the pre-training scaling wall.
- **2026-07-14**: [[2026-07-14-howells-whitaker-lazar-artificial-persons.pdf|Artificial Persons (Howells-Whitaker & Lazar, 2026)]] — Reviews the technical trajectory of compute scaling and LMA scaffolding.
