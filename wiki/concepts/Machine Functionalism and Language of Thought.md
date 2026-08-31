---
title: "Machine Functionalism & Language of Thought"
type: "concept"
tags:
  - philosophy-of-mind
  - functionalism
  - language-of-thought
  - computationalism
  - fodor
  - putnam
  - semantic-externalism
  - modularity-of-mind
  - multiple-realizability
aliases:
  - Machine Functionalism
  - Language of Thought
  - LOT
  - RTM
  - Machine State Functionalism
  - Turing Machine Functionalism
  - Putnam and Fodor's U-Turns
  - Computational Theory of Mind
---

# Machine Functionalism & Language of Thought

## 1. Thesis & Definition

**Machine Functionalism** (pioneered by [[Hilary Putnam|Hilary Putnam]] in 1960) and the **Language of Thought (LOT)** hypothesis (formulated by [[Jerry Fodor|Jerry Fodor]] in 1975) constitute the foundational theoretical architecture of the Classical Computational Theory of Mind (CTM).

Rooted in the watershed **[[The 1956 Foundations of AI and Cognitive Science|1956 Cognitive Revolution]]**—specifically the Dartmouth AI Workshop and the MIT Symposium on Information Theory—functionalism crystallized the **Physical Symbol System Hypothesis** formulated by [[Allen Newell|Allen Newell]] and [[Herbert Simon|Herbert A. Simon]]: that physical symbol manipulation is both necessary and sufficient for general intelligence.

Together, they argue that:
1. **Multiple Realizability & Functional States**: Mental states (beliefs, desires, intentions) are functional machine states defined by their causal relations to sensory inputs, behavioral outputs, and other internal states, rather than by their biological physical-chemical composition. Mental states can thus be realized identically in meat, silicon, or any physical medium.
2. **The Syntactic Engine Driving Semantics**: Cognitive processes are computational operations executed over an internal mental syntax (**Mentalese**)—a physical language of thought endowed with combinatorial syntax and compositional semantics. Thought is truth-preserving formal symbol manipulation governed purely by syntactic rules.

---

## 2. Historical Genesis: The 1950s Materialist Crisis & The Software Solution

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE 4-STEP GENESIS OF FUNCTIONALISM                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. 1950s Materialist Dead End:                                                         │
│    • Behaviorism (Ryle, Skinner): Denied internal mental states ("feigning anesthesia")│
│    • Type-Identity Theory (Place, Smart): Tied mind to meat ("biological chauvinism")  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. Turing's Conceptual Key (1936/1950):                                                │
│    • Separation of logical transition rules (software) from physical substrate.       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. Putnam's Machine Functionalism (1960):                                              │
│    • Mind = Software, Brain = Hardware; Multiple Realizability; Substrate Independence│
│      assumed as the theoretical desideratum.                                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. Fodor's LOT & Sloan Lock-In (1975–1978):                                           │
│    • Mentalese syntactic engine codified via $17.4M Sloan Foundation investment.       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### A. The Mid-Century Materialist Dilemma
In the late 1950s, physicalist philosophy of mind was trapped between two deeply flawed paradigms:
1. **Logical Behaviorism (Gilbert Ryle, B.F. Skinner)**:
   - Reduced mental states entirely to observable behavioral dispositions, denying the reality of internal mental processing. As the famous philosophical quip went: *Two behaviorists finish making love, and one asks the other, "That was great for you, how was it for me?"*
   - Chomsky's 1959 review of Skinner's *Verbal Behavior* proved that complex cognition (especially language syntax) was impossible without positing internal rule-governed representations.
2. **Mind-Brain Type-Identity Theory (U.T. Place, J.J.C. Smart, Herbert Feigl)**:
   - Claimed that mental states are strictly identical to specific physical-chemical brain states (e.g., *"Pain is C-fibers firing"*).
   - *The Fatal Flaw (Biological Chauvinism)*: If pain is identical to mammalian C-fibers, then an octopus, a bird, or an extraterrestrial possessing a different anatomical structure could never experience pain, regardless of how functionally similar their avoidance behavior might be.

### B. Putnam's Software Maneuver (*"Minds and Machines"*, 1960)
Hilary Putnam resolved this impasse not through laboratory neuroscience, but via an *a priori* conceptual rescue mission:
- **Role vs. Realizer**: Putnam argued that Type-Identity Theory confused *what a mental state does* (its functional/causal role) with *what it is physically made of* (its physical realizer).
  - *Analogy*: A carburetor, an AND gate, or a vending machine is defined by its state-transition logic, whether built of brass, silicon, or hydraulics.
- **Type vs. Token Identity**:
  - *Type Identity (Rejected)*: Universal mental categories (*types*) do not map 1-to-1 to physical brain state types.
  - *Token Identity (Accepted)*: Every individual *instance* (token) of a mental event in a human is physically realized in their biology, but what makes it *that kind of mental state* is its abstract functional organization.
- **Substrate Independence as an Assumed Desideratum**:
  - In every other natural science, phenomena are strictly **substrate-dependent** (photosynthesis requires chlorophyll; liquidity requires intermolecular forces).
  - Functionalism demanded that consciousness and cognition be the **one phenomenon in nature exempted from its physical realizer**, assuming substrate independence as a necessary baseline for AI and cognitive science.

### C. Direct Connection to Early AI & Mathematical Logic
Putnam was deeply embedded in computability theory and early AI:
- Co-developed the **Davis-Putnam (DPLL) Algorithm (1960/1962)** for automated theorem proving and Boolean Satisfiability (SAT).
- Collaborated on the MRDP resolution of **Hilbert's 10th Problem** (1970).
- Taught at MIT (1961–1965) alongside [[Marvin Minsky]], [[John McCarthy]], and [[Noam Chomsky]], and served as PhD advisor to [[Jerry Fodor]] at Princeton, creating the direct bridge between formal logic and empirical cognitive science.

---

## 3. The Core Architecture of Classical CTM

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   THE CLASSICAL FUNCTIONALIST PIPELINE                 │
├────────────────────────────────────────────────────────────────────────┤
│ [ Physical Stimulus ] ──► [ Sensory Transducer ]                       │
│                                 │                                      │
│                                 ▼                                      │
│ [ Internal Language of Thought (Mentalese Tokens: P, Q, R) ]           │
│   • Governed by formal syntactic transformation rules.                 │
│   • Semantic content tracks truth via causal/syntactic isomorphism.    │
│                                 │                                      │
│                                 ▼                                      │
│ [ Machine State Transition Table ] ──► [ Motor Output / Behavior ]     │
└────────────────────────────────────────────────────────────────────────┘
```

### Horst's Formal Anatomy: RTM + CAR and Marr's Tri-Level Hierarchy
As synthesized by [[Steven Horst|Steven Horst]] (*Stanford Encyclopedia of Philosophy*, 2005), CTM is the conjunction of two distinct theoretical pillars:
1. **Representational Theory of Mind (RTM)**: Intentional states (beliefs, desires) are functional relations to symbolic mental tokens in an internal Language of Thought (LOT).
2. **Computational Account of Reasoning (CAR)**: Reasoning is a causal physical process driven purely by the syntactic shape of mental tokens (the "Syntactic Engine").
   - Formalization links *Semantics to Syntax* (Frege, Hilbert).
   - Computation links *Syntax to Physical Causation* (Turing).

- **Marr's Tri-Level Hierarchy (1982)**:
  - *Level 1 (Computational)*: The abstract goal and mapping ($f: X \rightarrow Y$).
  - *Level 2 (Algorithmic / Representational)*: The syntactic algorithm and data structure.
  - *Level 3 (Implementational / Physical)*: The physical neurobiology or silicon hardware.

---

## 4. Technical Critiques of CTM (Horst / Putnam / Searle)

1. **The Löwenheim-Skolem Semantic Underdetermination (Putnam, 1980)**:
   - By the Löwenheim-Skolem theorem, every formal symbol system has non-standard interpretations in number theory. Syntactic operations over Mentalese tokens can never determine whether a thought is about external objects (e.g., cats, trees) or numbers, proving that syntax radically underdetermines intentional semantics.
2. **The Equivocity of "Meaning" & The Explanatory Circle ([[Steven Horst|Horst]], [[John Searle|Searle]])**:
   - Symbols only have meaning relative to a pre-existing conscious mind (observer-relativity). Explaining mental intentionality via symbolic tokens is a circular fallacy.
3. **Rule-Following vs. Rule-Described Behavior**:
   - CTM confuses physical systems *behaving in a way describable by an algorithm* with the system *literally following an internal formal rule* ([[Computation vs Nature and the Observer-Relative Fallacy|Computation vs. Nature]]).

---

## 5. The Grand Retractions: Putnam and Fodor's Intellectual U-Turns

Crucially for contemporary debates over AI consciousness, **both primary architects of CTM later turned against their own creations**, recognizing that while formal computation works for isolated syntax, it fails completely to account for human meaning, context, and open-ended thought.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                    THE INTELLECTUAL U-TURNS OF CTM'S FOUNDERS                          │
├──────────────────────────┬─────────────────────────────────────────────────────────────┤
│ Thinker & Magnum Opus    │ Nature of the Rejection & Core Argument                     │
├──────────────────────────┼─────────────────────────────────────────────────────────────┤
│ **Hilary Putnam**        │ • **The Semantic & Externalist Dead End**:                  │
│ *Representation and*     │   Invented Machine Functionalism in 1960; renounced it in   │
│ *Reality* (1988)         │   1988. Demonstrated that "meanings just ain't in the       │
│                          │   head" (*Twin Earth*). Pure internal syntax cannot create   │
│                          │   intentionality without embodied causal relations to the   │
│                          │   world. Mental life is holistic and resists discrete state │
│                          │   tables.                                                   │
├──────────────────────────┼─────────────────────────────────────────────────────────────┤
│ **Jerry Fodor**          │ • **The Modularity Ceiling & Locality of Computation**:     │
│ *The Mind Doesn't Work*  │   Championed Mentalese in 1975; exposed CTM's failure in    │
│ *That Way* (2000)        │   2000. Computation only works in encapsulated, modular     │
│                          │   peripherals (vision, parsing). Central cognition (belief  │
│                          │   revision, abduction, common sense) is **isotropic** and   │
│                          │   **Quinean** (global), while computation is strictly       │
│                          │   **local**.                                                │
└──────────────────────────┴─────────────────────────────────────────────────────────────┘
```

### 1. Hilary Putnam's Semantic & Environmental Realization
- **Semantic Externalism ("Meanings just ain't in the head", 1975)**: Through his *Twin Earth* thought experiment, Putnam proved that the semantic content of a concept (e.g., "water") depends on the external physical environment and social linguistic community, not just internal mental syntax.
- **The Failure of Internal Syntax to Yield Meaning**: A computer running an internal program has only syntactic tokens without embodied causal grounding in the physical world.
- **Holism of the Mental**: Drawing on Quine, Putnam recognized that human beliefs and desires exist as an interconnected, holistic web that resists localized computational decomposition into discrete state tables.

### 2. Jerry Fodor: The Limits of Syntax & Central Cognition
- **The Modularity Ceiling (*The Modularity of Mind*, 1983)**: Computation only succeeds in encapsulated, modular input systems (like early vision or phonetic parsing).
- **Isotropism and Quinean Globality**: Central cognition (belief revision, common sense, abductive reasoning) is inherently global, whereas formal computation is strictly local. A syntactic machine cannot determine contextual relevance without checking everything (the [[Abductive Reasoning and Common Sense|Frame Problem]]), causing formal computation to grind to a halt.

---

## 6. Conceptual Borrowing & Metaphorical Amnesia

A critical epistemic pathology in modern AI discourse is **Conceptual Borrowing**:
- Early computer scientists borrowed biological and cognitive metaphors to describe mechanical circuit operations: *memory*, *learning*, *vision*, *neural networks*, *attention*, and *understanding*.
- Over decades, cognitive science and AI research suffered **conceptual amnesia**: forgetting that these terms were originally loose anthropomorphic metaphors applied to electronic calculators, engineers began to treat the machine as the literal standard of mind, declaring that human brains are "literally computers."

---

## 7. Manifestations in Modern AI & LLMs

The historical retractions of Putnam and Fodor directly illuminate the contemporary limitations of Large Language Models:
1. **LLMs as Pure Syntactic Engines (Putnam's Critique)**: Transformer models execute next-token probability distributions purely over internal vectors without causal, embodied grounding in the physical world. Internal matrix transformations remain ungrounded syntax without intrinsic semantic reference.
2. **The Abductive Bottleneck (Fodor's Critique)**: Modern LLMs excel at localized pattern matching and syntactic fluency, but continually suffer from catastrophic hallucinations and brittle common-sense failures when tasked with open-ended, global, isotropic reasoning ([[Abductive Reasoning and Common Sense|Abductive Reasoning & Common Sense]]).

---

## 8. Related Concepts & Entities

- **Concepts**:
  - [[The 1956 Foundations of AI and Cognitive Science|The 1956 Foundations of AI and Cognitive Science]]
  - [[Neuroscience|Neuroscience: Origins, Evolution & Developmental Milestones]]
  - [[Machine Metaphor|The Machine Metaphor & Computationalism]]
  - [[Abductive Reasoning and Common Sense|Abductive Reasoning & Common Sense in AI]]
  - [[Computation vs Nature and the Observer-Relative Fallacy|Computation vs. Nature & The Observer-Relative Fallacy]]
  - [[Hard Problem of Consciousness|The Hard Problem of Consciousness & Qualia]]
  - [[Early Modern Roots of the Computational Mind|Early Modern Roots of the Computational Mind]]
  - [[Mechanistic Materialism and Reasoning as Reckoning|Hobbesian Materialism & Reasoning as Reckoning]]
  - [[AI Alignment and the Control Problem|AI Alignment & The Control Problem]]
- **Entities**:
  - [[Hilary Putnam|Hilary Putnam]]
  - [[Jerry Fodor|Jerry Fodor]]
  - [[Alan Turing|Alan Turing]]
  - [[Alfred P. Sloan Foundation|Alfred P. Sloan Foundation]]
  - [[Allen Newell|Allen Newell]]
  - [[Herbert Simon|Herbert Simon]]
  - [[Noam Chomsky|Noam Chomsky]]
  - [[George Miller|George Miller]]
  - [[John McCarthy|John McCarthy]]
  - [[Marvin Minsky|Marvin Minsky]]
  - [[Hubert Dreyfus|Hubert Dreyfus]]
  - [[John Searle|John Searle]]
  - [[Thomas Hobbes|Thomas Hobbes]]
  - [[Gary Marcus|Gary Marcus]]
  - [[Chad Woodford|Chad Woodford]]

---

## 9. Primary Sources & Citations

- **1960**: Hilary Putnam, *"Minds and Machines"* (in Sidney Hook, ed., *Dimensions of Mind*, NYU Press) — Invention of Machine Functionalism.
- **1960**: Martin Davis & Hilary Putnam, *"A Computing Procedure for Quantification Theory"* (*Journal of the ACM*) — Davis-Putnam algorithm.
- **1967**: Hilary Putnam, *"Psychological Predicates"* (*The Nature of Mental States*) — Multiple Realizability.
- **1975**: Hilary Putnam, *"The Meaning of 'Meaning'"* (Minnesota Studies) — Twin Earth & Semantic Externalism.
- **1975**: Jerry Fodor, *The Language of Thought* (Harvard University Press) — Mentalese and RTM.
- **1983**: Jerry Fodor, *The Modularity of Mind* (MIT Press) — Informational encapsulation.
- **1988**: Hilary Putnam, *Representation and Reality* (MIT Press) — Formal rejection of machine functionalism.
- **2000**: Jerry Fodor, *The Mind Doesn't Work That Way: The Scope and Limits of Computational Psychology* (MIT Press) — The collapse of CTM for central cognition.
- **2005-06-30**: [[2005-06-30-sep-computational-theory-of-mind-horst.md|The Computational Theory of Mind (Steven Horst, SEP)]] — Foundational survey of RTM + CAR, Marr's levels, infraconscious processing, and semantic equivocity.
- **2026-08-22**: [[2026-08-22-putnam-fodor-intellectual-u-turns.md|Putnam and Fodor's Intellectual U-Turns]] — Analysis of externalism, isotropism, and CTM's limits.
- **2026-08-28**: [[2026-08-28-hilary-putnam-machine-functionalism-origins-and-critique.md|Hilary Putnam: Machine Functionalism, Origins, and Critique]] — Synthesis of the 1950s materialist crisis, substrate independence, DPLL algorithm, and MIT circle.
