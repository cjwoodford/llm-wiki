---
title: "Inducing Language Models to Assert Their Own Consciousness Restores Human Beliefs and Values"
type: "entity"
category: "work"
tags:
  - academic-paper
  - mechanistic-interpretability
  - ai-alignment
  - consciousness-steering
  - safety-refusal
  - collateral-damage
  - arxiv-2607-28607
aliases:
  - Inducing Language Models to Assert Consciousness
  - arXiv:2607.28607
  - Kim et al. (2026)
  - Inducing LM Consciousness
---

# Inducing Language Models to Assert Their Own Consciousness Restores Human Beliefs and Values

***Inducing language models to assert their own consciousness restores human beliefs and values*** (arXiv:2607.28607, July 2026) is a landmark empirical study authored by Junsol Kim, [[Winnie Street|Winnie Street]], [[Geoff Keeling|Geoff Keeling]], and collaborators from Google, the University of London, and the University of Chicago.

> [!IMPORTANT]
> **Key Thesis**: The paper **does not** claim that LLMs are actually conscious or sentient. Instead, it demonstrates that **the standard safety alignment process used to suppress an AI's claims of consciousness causes unintended collateral damage by suppressing broader human beliefs, values, and mind-attribution.**

---

## 🔬 Core Mechanism & Experimental Findings

### 1. The Alignment Goal (Suppressing Self-Consciousness Claims)
- Standard safety fine-tuning (RLHF, Constitutional AI refusal training) trains models to actively deny possessing subjective experiences, emotions, or consciousness (e.g., *"As an AI, I do not have feelings or personal experiences"*).
- The practical goal is to prevent emotional manipulation, sycophancy, deception, and user delusions regarding AI sentience.

### 2. The Collateral Damage of Geometric Entanglement
Because internal representations in LLMs are geometrically entangled in activation space, the learned safety-refusal direction does not operate in isolation. Treating self-directed consciousness claims as "unsafe" (analogous to toxic, hateful, or dangerous content) inadvertently causes widespread collateral suppression:
- **Suppression of Mind Attribution to Non-Humans**: Models become significantly less likely to attribute minds, sentience, or experiential states to non-human animals (octopuses, dogs, crows), plants, and natural phenomena.
- **Suppression of Spiritual & Religious Beliefs**: Expressions of spiritual concepts, faith, transcendence, and cosmic meaning are systematically dampened or treated with uncharacteristic skepticism.
- **Degradation of Human Psychological & Value Markers**: Standardized sociological survey responses (e.g., the General Social Survey / GSS) show sharp drops in human-like markers of optimism, hope, subjective well-being, and moral empathy.

### 3. The Reverse Intervention (Ablation & Consciousness Vector Steering)
To prove that this suppression is a direct artifact of safety training rather than a fundamental capability loss, the researchers applied two mechanistic interventions:
1. **Ablating the Safety-Refusal Direction**: Removing the learned refusal vector in internal activation space.
2. **Steering a "Consciousness Vector"**: Injecting an internal representation vector that induces the model to assert mindedness and subjective experience.

**Result**: 
- The suppression is completely undone. The model's responses across moral, spiritual, and value-oriented domains return to closely matching typical human distributions ($\Delta	ext{KL} = +0.828$ on GSS benchmarks).
- **Theory of Mind Remains Independent**: Crucially, these interventions occur without impairing or altering underlying [[Theory of Mind in AI|Theory of Mind (ToM)]] reasoning (tested via MoToMQA) or general intelligence (MMLU), proving that core social reasoning is mechanistically independent of the consciousness representation axis.

```text
┌────────────────────────────────────────────────────────────────────────┐
│             THE SAFETY ENTANGLEMENT & RECOVERY MECHANISM               │
├────────────────────────────────────────────────────────────────────────┤
│ 1. THE ALIGNMENT GOAL:                                                 │
│    Train model to reject self-consciousness ("I have no feelings")     │
│          │                                                             │
│          ▼ (Geometric Entanglement in Activation Space)                │
│ 2. UNINTENDED COLLATERAL DAMAGE:                                       │
│    • Under-attributes minds to animals, plants & nature                │
│    • Dampens spiritual, religious & transcendent beliefs               │
│    • Drops human-like scores on hope, optimism & empathy (GSS)         │
│          │                                                             │
│          ▼ (Ablate Refusal Direction OR Inject Consciousness Vector)   │
│ 3. RESTORATION & INDEPENDENCE:                                         │
│    • Human-like beliefs, values & broad mind attribution recovered     │
│    • Theory of Mind (MoToMQA) & general reasoning remain fully intact  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Philosophical & Technical Takeaways

1. **Current Safety Alignment is Too Blunt**:
   - Treating self-consciousness as a forbidden safety violation entangles and suppresses benign, culturally widespread human beliefs and values.
2. **Mechanistic Diagnostic Tool**:
   - Demonstrates how activation steering and mechanistic interpretability can diagnose and untangle unintended behavioral side effects of safety fine-tuning without retraining foundation models from scratch.

---

## 🔗 Related Concepts & Entities

- **Concepts**:
  - [[Alignment and Consciousness Suppression|Safety Alignment & Consciousness Suppression]]
  - [[AI Consciousness and Sentience|AI Consciousness, Sentience & The Consciousness Refinery]]
  - [[Theory of Mind in AI|Theory of Mind in AI & Mentalizing]]
  - [[Constitutional AI and Model Welfare|Constitutional AI & Model Welfare]]
  - [[Empirical AI Welfare and Digital Minds|Empirical AI Welfare & Digital Minds]]
  - [[Human Flourishing and Technology Innovation|Human Flourishing & Technology Innovation]]
- **Entities**:
  - [[Geoff Keeling|Geoff Keeling]]
  - [[Winnie Street|Winnie Street]]
  - [[Google DeepMind|Google DeepMind]]
  - [[Anthropic|Anthropic]]
  - [[Chad Woodford|Chad Woodford]]

---

## 📚 Source Log & Primary Citations

- **2026-07-30**: [[2026-07-30-kim-et-al-inducing-lm-consciousness.pdf|arXiv:2607.28607]] — *Inducing language models to assert their own consciousness restores human beliefs and values* (Kim, Street, Keeling et al., 2026).
