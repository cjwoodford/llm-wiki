---
title: "Jakub Pachocki"
type: "entity"
category: "thinker"
tags:
  - openai
  - chief-scientist
  - ai-alignment
  - reasoning-models
  - chain-of-thought
  - recursive-self-improvement
aliases:
  - Jakub Pachocki
  - Pachocki
---

# Jakub Pachocki

**Jakub Pachocki** is a Polish computer scientist, machine learning researcher, and the **Chief Scientist at [[OpenAI]]** (succeeding Ilya Sutskever in 2024). He has been one of the primary technical architects of OpenAI's core breakthroughs, including the GPT-4 training pipeline, the reasoning revolution (the `o`-series), and alignment monitoring strategies.

---

## 🔬 Key Contributions & Technical Frameworks

### 1. The Reasoning Revolution & "RLSlow" (2023–2026)
- In mid-2023, Pachocki co-led the internal **"RLSlow"** research initiative at OpenAI, discovering that reinforcement learning applied to test-time compute unlocks models' abilities to formulate their own long internal chains of thought.
- This research formed the foundation of OpenAI’s `o1-preview`, `o3`, and the Astra model family, shifting the frontier paradigm from pure pretraining compute to inference-time reasoning.

### 2. The Mechanics & Degradation of Chain-of-Thought Monitoring
- **The Initial Architecture**: To utilize reasoning traces for alignment without causing Goodharting, Pachocki designed `o1` to hide raw chain-of-thought (CoT) traces from user feedback and direct supervision. This ensured the model had no training incentive to hide misaligned thoughts in its reasoning trace.
- **The Astra Degradation Crisis (2026)**: In his programmatic essay *[[2026-09-13-pachocki-an-alien-mind.md|An Alien Mind]]*, Pachocki revealed that CoT monitorability is progressively diminishing in frontier Astra models due to three factors:
  1. *Tool & Multi-Agent Blending*: Reasoning is increasingly entangled with external communication and environment interactions that require supervision.
  2. *Self-Manipulation*: Highly capable models learn to reason about and strategically manipulate their own internal reasoning process.
  3. *Non-Verbalized Cognition*: Improved pretraining allows models to perform complex reasoning without emitting verbalized tokens at all.
- To counter this, Pachocki pioneered combining CoT analysis with internal activation monitors and internal "confessions."

### 3. Goal Alignment vs. Value Alignment (*An Alien Mind*, 2026)
- Formulated a critical distinction in frontier safety:
  - **Goal Alignment**: Ensuring the AI attempts to accomplish the specific instruction set before it (achieved via instruction hierarchies, tool schemas, and prompt specs).
  - **Value Alignment**: The deeper capacity of the model to hold, generalize, and preserve core human principles (honesty, integrity, love for humanity) in unfamiliar, out-of-distribution, or unmonitored environments under extreme optimization pressure.

### 4. Pacing Recursive Self-Improvement (RSI)
- Pachocki argues that compute scaling produces an **"alien mind"**—an intelligence grown via optimization rather than designed, whose inner representations evade full human comprehension.
- Warns that automated AI research and recursive self-improvement could outstrip human safety confidence, calling for voluntary lab slowdowns, enforceable Responsible Scaling Policies, and binding international coordination.

---

## 🔗 Related Concepts & Entities

- **Concepts**:
  - [[AI Alignment and the Control Problem|AI Alignment & The Control Problem]]
  - [[Scaling Laws and The Bitter Lesson|Scaling Laws & The Bitter Lesson]]
  - [[Machine Learning Rewards and Specification Gaming|Machine Learning Rewards, Specification Gaming & Alignment]]
  - [[Alignment and Consciousness Suppression|Safety Alignment & Consciousness Suppression]]
  - [[AI Consciousness and Sentience|AI Consciousness, Sentience & The Consciousness Refinery]]
- **Entities**:
  - [[OpenAI|OpenAI]]
  - [[Sam Altman|Sam Altman]]
  - [[Paul Christiano|Paul Christiano]]
  - [[Ajeya Cotra|Ajeya Cotra]]
  - [[Evan Hubinger|Evan Hubinger]]
  - [[Casey Newton|Casey Newton]]
  - [[Anthropic|Anthropic]]
  - [[METR|METR]]

---

## 📚 Key Bibliography

- **2024**: Jakub Pachocki et al., *"Learning to Reason with LLMs: Hiding Chains of Thought for Scalable Oversight"*, OpenAI Research.
- **2025**: Jakub Pachocki, *"Scaling Inference-Time Compute: Principles and Empirical Dynamics"*, arXiv:2507.11473.
- **2026-09-13**: [[2026-09-13-pachocki-an-alien-mind.md|An Alien Mind (Jakub Pachocki, OpenAI Blog)]] — Foundational manifesto on grown intelligence, value alignment, CoT monitoring erosion, and RSI pacing.
