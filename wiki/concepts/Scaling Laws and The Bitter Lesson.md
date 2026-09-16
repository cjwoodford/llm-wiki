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
- **Grown Intellect & Recursive Self-Improvement ([[Jakub Pachocki|Pachocki]], 2026)**: In *[[2026-09-13-pachocki-an-alien-mind.md|An Alien Mind]]*, OpenAI Chief Scientist Jakub Pachocki argued that machine intelligence is *grown* rather than *designed* through repeated optimization over compute, with algorithmic discoveries occurring along the compute curve. Pachocki positions **Recursive Self-Improvement (RSI)**—AI automating AI research and designing future computational substrates—as the dramatic next stage of scaling compute.
- **The "Two AIs" Dichotomy ([[Chad Woodford|Woodford]], 2026)**: In *[[2026-09-16-woodford-is-ai-going-to-cure-cancer-or-kill.md|Is AI Going To Cure Cancer or Kill Everyone?]]*, Chad Woodford argues that the AI systems driving tangible scientific progress (protein design, weather forecasting, materials discovery) are **specialized, domain-grounded architectures** (geometric deep learning, RL with search, neurosymbolic hybrids), whereas generalist autoregressive reasoning LLMs primarily generate text summaries, AI slop, and automated hacking operations while failing to achieve promised general scientific breakthroughs.
- **Architectural Skepticism**: [[Gary Marcus|Gary Marcus]] and [[Yann LeCun|Yann LeCun]] maintain that scaling token prediction will never bridge the gap to causal world understanding.

---

## 3. Case Studies & Manifestations

- **ImageNet (2012)**: AlexNet's victory marking the deep learning revolution, validating Sutton's bitter lesson over hand-crafted computer vision filters.
- **Chinchilla Optimal Compute (2022)**: Hoffmann et al.'s demonstration that previous models were severely undertrained relative to their parameter size.
- **Specialized Scientific AI vs. LLM Capabilities**:
  - *Structural Biology*: [[Demis Hassabis|Google DeepMind]]'s AlphaFold2 and David Baker's RoseTTAFold/RFdiffusion mapped ~200M protein structures and engineered *de novo* proteins using geometric inductive biases.
  - *Numerical Weather Prediction*: GraphCast, Pangu-Weather, and FourCastNet cut 10-day global forecasts to <1 min on specialized graph architectures.
  - *Inorganic Materials*: GNoME and MatterGen generated ~380,000 stable crystals for batteries and semiconductors.
  - *Engineering & Chip Design*: AlphaDev and AlphaChip/DSO.ai applied RL to assembly optimization and microprocessor floorplanning.
  - *Pure Mathematics*: AlphaGeometry/AlphaProof coupled Lean formal verification with neural search.
- **LLM Pattern Matching in Pure Mathematics & The Fields Medalist Warning (2026)**:
  - Following OpenAI's claimed resolution of the Navier–Stokes existence and smoothness problem, Fields Medalist [[Terence Tao]] and 25 co-signers warned that LLMs learn syntactic surface regularities of proofs from corpora without semantic mathematical comprehension, risking the integrity of mathematical research and foreclosing foundational discovery.
- **The $900B+ Valuation Bubble & Macroeconomic Realism**:
  - In September 2026, [[Anthropic]] released an interactive economic model projecting potential GDP growth up to 15.4% annually under extreme automation.
  - Economists **Ben Moll** (LSE) and **Alex Imas** ([[Google DeepMind|Google DeepMind]]) debunked double-digit GDP forecasts, pointing out that such projections rely on unrealistic assumptions: total automation of the economy by 2035, infinite consumer absorption of automated output, and AI systems that never destroy value or face regulatory headwinds.

---

## 4. Related Concepts & Entities

- **Concepts**:
  - [[Techno-Utopianism|Techno-Utopianism & Prometheanism]]
  - [[Machine Metaphor|The Machine Metaphor & Computationalism]]
  - [[AI Alignment and the Control Problem|AI Alignment & The Control Problem]]
  - [[Quasi-Local Sovereign AI|Quasi-Local, Domain-Specific & Sovereign AI]]
  - [[Abductive Reasoning and Common Sense|Abductive Reasoning & Common Sense]]
  - [[Technological Determinism|Technological Determinism]]
- **Entities**:
  - [[Jakub Pachocki|Jakub Pachocki]]
  - [[Demis Hassabis|Demis Hassabis]]
  - [[Terence Tao|Terence Tao]]
  - [[Sam Altman|Sam Altman]]
  - [[Dario Amodei|Dario Amodei]]
  - [[Jacob Coxon|Jacob Coxon]]
  - [[Evan Hubinger|Evan Hubinger]]
  - [[Casey Newton|Casey Newton]]
  - [[Gary Marcus|Gary Marcus]]
  - [[Yann LeCun|Yann LeCun]]
  - [[Chad Woodford|Chad Woodford]]
  - [[OpenAI|OpenAI]]
  - [[Anthropic|Anthropic]]
  - [[Google DeepMind|Google DeepMind]]

---

## 5. Source Log & Citations

- **2023-06-10**: [[2023-06-10-why-ai-needs-more-philosophers.md|Why AI Needs More Philosophers]] — Early critique of the brute-force scaling dogma.
- **2026-01-13**: [[2026-01-13-the-better-ai-gets-the-further-we.md|The Better AI Gets, the Further We Seem from AGI]] — Comprehensive survey of the pre-training scaling wall.
- **2026-07-14**: [[2026-07-14-howells-whitaker-lazar-artificial-persons.pdf|Artificial Persons (Howells-Whitaker & Lazar, 2026)]] — Reviews the technical trajectory of compute scaling and LMA scaffolding.
- **2026-09-10**: [[2026-09-10-newton-the-ai-safety-vibe-shift.md|The AI Safety Vibe Shift (Casey Newton, Platformer)]] — Details Anthropic economic modeling and Moll/Imas macroeconomic critiques.
- **2026-09-13**: [[2026-09-13-pachocki-an-alien-mind.md|An Alien Mind (Jakub Pachocki, OpenAI Blog)]] — Analysis of grown intellect, compute scaling, and recursive self-improvement.
- **2026-09-16**: [[2026-09-16-woodford-is-ai-going-to-cure-cancer-or-kill.md|Is AI Going To Cure Cancer or Kill Everyone? (Chad Woodford, Cosmic Intelligence)]] — The "Two AIs" dichotomy, audit of broken techno-utopian promises, and Terence Tao's mathematical critique.
