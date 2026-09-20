---
title: "The Problem of Relevance and the Horizon of Mind: Hubert Dreyfus and John Vervaeke on the Frame Problem"
type: "source"
author: "[[Chad Woodford]] (via Google Docs)"
publication: "Google Docs"
date: 2026-09-20
url: "https://docs.google.com/document/d/e/2PACX-1vR2HbbOo1_402YloXIW8jz4eL1gTv8VMSr-SH8WiB3-6b8nyRoI837ZUkvRJ_wqekHKHm1-mmK6l-vu/pub"
tags:
  - frame-problem
  - relevance-realization
  - hubert-dreyfus
  - john-vervaeke
  - phenomenology
  - heidegger
  - merleau-ponty
  - opponent-processing
  - 4e-cognition
  - autopoiesis
  - neurodynamics
  - predictive-processing
  - transjectivity
aliases:
  - The Problem of Relevance and the Horizon of Mind
  - Dreyfus and Vervaeke Frame Problem
  - Dreyfus and Vervaeke on the Frame Problem
---

# The Problem of Relevance and the Horizon of Mind: Hubert Dreyfus and John Vervaeke on the Frame Problem

## The Origins and Philosophical Scope of the Frame Problem

The frame problem originated as a technical obstacle in formal artificial intelligence, first articulated by John McCarthy and Patrick J. Hayes in 1969 within the context of the situation calculus1. Designing logic-based autonomous agents required an explicit mathematical formalism to deduce the consequences of actions over time1. McCarthy and Hayes discovered that in classical first-order predicate logic, defining what changes when an action occurs is trivial, but defining what remains invariant requires an intractable computational overhead2. Because classical logic is monotonic, the mere absence of an assertion that an entity has moved or transformed does not allow an inference engine to conclude that it has remained stationary or intact2. An agent pushing a block must not only compute that the block’s coordinates have changed, but must also rely on an astronomical number of "frame axioms" confirming that the color of the walls, the temperature of the room, the mass of the table, and the political governance of the state have not altered2. The formal problem became known as the challenge of formalizing the "commonsense law of inertia" without having to write, store, and compute millions of non-effects for every discrete transition in the environment2.

Throughout the 1970s and 1980s, philosophers of mind—most notably Daniel Dennett and Jerry Fodor—recognized that McCarthy and Hayes had isolated the computational tip of a profound epistemological iceberg2. Dennett reinterpreted the issue as the "robot’s dilemma": how an autonomous epistemic agent, constrained by finite temporal and material resources, can identify and utilize contextually relevant information without computationally paralyzing itself by examining millions of trivially true but irrelevant facts2. Fodor characterized the dilemma as the foundational crisis of the computational theory of mind, arguing that modular computational systems function precisely because they are non-holistic and encapsulated, whereas central cognitive processing is radically global, isotropic, and sensitive to context2.

The classical paradigm of Good Old-Fashioned Artificial Intelligence (GOFAI), anchored in the physical symbol system hypothesis of Allen Newell and Herbert Simon, maintained that rational thought is the formal manipulation of discrete, syntactically structured mental tokens4. However, this foundational architecture rendered the generalized frame problem insurmountable3. If an artificial system must inspect an internal symbolic representation of reality to determine whether a changing feature matters to its immediate purpose, it faces a lethal combinatorial explosion of potential inferences9. The frame problem thus ceased to be a mere programming nuisance in situation calculus; it became the central battleground concerning the nature of context, intentionality, and biological intelligence2.

## Hubert Dreyfus: The Phenomenological Critique Across Five Decades

Hubert Dreyfus mounted the most enduring and comprehensive critique of the computational paradigm, arguing from 1965 until his death that the frame problem was not a technical bug awaiting an algorithmic patch, but the structural reductio ad absurdum of the entire Cartesian and rationalist tradition in Western philosophy4. Over five decades, Dreyfus developed a critique grounded in continental phenomenology—drawing initially on Martin Heidegger’s existential ontology and later on Maurice Merleau-Ponty’s bodily phenomenology—to show that human intelligence operates through prereflective, embodied, and culturally situated coping rather than detached rule-following6. Dreyfus followed the development of artificial intelligence across several paradigm shifts, arguing that each successive iteration of cognitive science inadvertently recreated the frame problem by attempting to formalize human existence from an external, disembodied standpoint11.

### The Four Dogmas of Rationalism and the Critique of Classical AI

Dreyfus laid the groundwork for his critique in the RAND Corporation memorandum Alchemy and AI (1965), which he expanded into the foundational book What Computers Can't Do (1972)6. In these works, Dreyfus identified four interconnected, unexamined assumptions that sustained the computational vision of mind, demonstrating that their failure made the emergence of the frame problem inevitable7.

The biological assumption asserted that at some fundamental level, the physical neurochemistry of the human brain operates as an on-off digital switchboard, executing discrete informational operations analogous to binary logic gates1. The psychological assumption held that human cognition consists of an algorithmic program operating on discrete symbolic data points, meaning that internal mental life can be fully described as an information-processing sequence1.

Dreyfus showed that the psychological assumption drew its plausibility from two deeper philosophical doctrines: the epistemological and ontological assumptions7. The epistemological assumption posited that all human understanding, practical competence, and tacit knowledge could be fully formalized into mathematical functions, deterministic algorithms, or precise heuristic rules7. The ontological assumption posited that reality itself consists of a totality of mutually independent, context-free, atomic facts that can be neutrally encoded into symbolic structures7.

Dreyfus argued that the computational paradigm inverted the natural order of human epistemology by assuming that practical know-how (knowing-how) could be derived from, and reduced to, explicit theoretical assertions (knowing-that)3. Drawing on Gilbert Ryle, Heidegger, and Ludwig Wittgenstein, Dreyfus demonstrated that everyday human competence is primary and non-formalizable3. When human beings act within familiar situations, they do not consult an internal library of propositions; rather, their propositional knowledge is an abstraction derived from absorbed coping [cite: 4, 8, Susser-AI-and-the-Body]. Because classical AI treated context-free propositions as primary, it was immediately burdened with the impossible task of deducing which context applied to which fact, directly creating the frame problem3.

### Heideggerian Foundations: Thrownness, Coping, and Background Practices

To provide an alternative to the Cartesian model of cognition, Dreyfus turned to Martin Heidegger’s Being and Time6. Heidegger had demonstrated that modern philosophy had operated under an ontological distortion by beginning with the subject-object divide: an isolated, detached mind contemplating external, contextless objects9. Heidegger distinguished between two primary modes of encountering reality, which Dreyfus utilized to diagnose the failures of GOFAI9.

Readiness-to-hand (Zuhandenheit) is the primordial mode of being in which entities are encountered as practical equipment within an ongoing web of human activity9. In everyday life, an agent hammering a nail does not perceive the hammer as an isolated physical object possessing abstract physical parameters such as mass, length, and chemical composition9. Rather, the hammer is transparently absorbed into an interrelated system of practical equipment, teleologically directed toward driving a nail, in order to assemble a wall, for the sake of providing shelter9. Within readiness-to-hand, the tool is not an object of conscious thought; it withdraws, functioning as an extension of the agent's active engagement9.

Presence-at-hand (Vorhandenheit) is a derivative, secondary mode in which an entity is viewed in detached, analytical observation9. Presence-at-hand arises primarily during moments of practical breakdown21. If the hammer’s head snaps or the tool is missing, the transparent flow of absorbed coping is interrupted21. The agent steps back from the practical circuit, objectifies the tool, and analyzes it as a detached object with explicit physical properties21.

Dreyfus argued that GOFAI was an attempt to construct human-level intelligence entirely out of the ontology of presence-at-hand9. Symbolic programmers wrote programs that manipulated context-free data tokens, expecting that by adding more rules and semantic tags, the machine would eventually attain commonsense understanding6. Dreyfus maintained that this objective was impossible: one cannot construct readiness-to-hand by stitching together collections of present-at-hand objects, because meaning is not a property added to an otherwise meaningless world9.

Human agents exist as Dasein—entities whose fundamental structure is being-in-the-world (In-der-Welt-sein) characterized by thrownness (Geworfenheit)8. To be thrown means that an agent is always already embedded in a pre-existing, non-formalizable background of socio-cultural practices, linguistic habits, and biological constraints6. Because human agents never stand outside of a context looking in, they do not face the cognitive burden of computing a context from scratch3. The world is its own best model; agents use the rich structure of the environment directly rather than maintaining internal representations of it20. For Dreyfus, the frame problem was a symptom of an erroneous philosophical commitment: biological creatures do not solve the frame problem; the problem dissolves once one recognizes that intelligence is grounded in thrown, embodied coping within an already meaningful world3.

### The Structural Frame Dilemma: Regress and the Critique of Minsky

As classical AI struggled with the fragility of first-order logic during the late 1970s and 1980s, Marvin Minsky introduced the concept of "frames," while Roger Schank and Robert Abelson developed "scripts"25. Minsky proposed that human commonsense reasoning relies on prefabricated, highly organized data structures representing stereotyped situations—such as walking into a living room or attending a birthday party24. A frame contained default assumptions and open slots to be filled by incoming perceptual data, which AI researchers hoped would bypass the frame problem by providing computers with ready-made contextual expectations26.

In Husserl, Intentionality, and Cognitive Science (1982/1984) and the revised edition What Computers Still Can't Do (1992), Dreyfus exposed the structural vulnerability of Minsky’s frame proposal, demonstrating that it triggered an inescapable infinite regress9. While an internal frame can organize information once it is selected, a computer must first determine which specific frame corresponds to the actual state of affairs in the world9. To match environmental cues to a frame, the computer requires a set of recognition rules23. However, which environmental cues are relevant depends upon the very situation the agent occupies9. Consequently, the system requires a higher-order meta-frame to select its situational frame, and a third-order meta-meta-frame to determine which features are relevant for selecting the meta-frame9.

Dreyfus observed that this computational regress mirrors the structural difficulty surrounding ceteris paribus clauses in cognitive science3. When theorists attempt to formulate strict cognitive laws, they must append a ceteris paribus condition ("all other things being equal")3. Dreyfus argued that the ceteris paribus condition is simply formal notation for the unarticulated human background3. Because the background consists of open-ended human practices, what constitutes "everything else being equal" cannot be exhaustively articulated in explicit rules without falling into a vicious loop3. The system is left caught in a regress of frames for recognizing relevant frames for recognizing relevant facts9.

### The Merleau-Pontian Turn: The Intentional Arc and Maximal Grip

During the late 1990s and early 2000s, Dreyfus recognized that Heidegger’s ontology, while effective for diagnosing the representational fallacy of GOFAI, did not provide a detailed account of how perception and action are integrated in real time23. Dreyfus turned to Maurice Merleau-Ponty’s Phenomenology of Perception, grounding his account of intelligence in bodily motor intentionality rather than abstract hermeneutics12.

In works such as "Intelligence Without Representation" (2002), Dreyfus adopted two core concepts from Merleau-Ponty12. The first was the intentional arc, which describes the tight, non-representational feedback loop connecting the active body to the perceptual world12. As an agent acquires a skill, the learned expertise is not stored as a mental model, cognitive map, or propositional library in the brain12. Rather, it is sedimented into bodily dispositions that respond directly to environmental solicitations12. As skill develops, the agent's perceptual field becomes increasingly differentiated, revealing new affordances that draw forth immediate practical action without deliberative calculation12.

The second concept was the tendency toward maximal grip, defined as the body’s innate, unreflective inclination to find an optimal dynamic equilibrium with its environment12. When an observer views an oil painting, they do not compute Euclidean distances; they intuitively lean closer or step back until the painting appears in an optimal visual gestalt12. Similarly, an athlete moving on a field or a driver navigating traffic constantly adjusts posture, muscular tension, and trajectory to alleviate felt motor tension and maintain an optimal practical grip12. Dreyfus maintained that relevance is not inferred by the mind; it is felt by the body as a pull toward equilibrium, bypassing the combinatorial search space that disables symbolic systems12.

This commitment to bodily, non-representational coping led Dreyfus into a famous philosophical debate with John McDowell22. McDowell argued that all human perceptual experience is conceptually structured from the ground up, maintaining that human rationality permeates every perceptual engagement22. Dreyfus countered that McDowell succumbed to the "myth of the mental," asserting that expert absorbed coping—such as a grandmaster playing lightning chess or an athlete executing a flawless pass—operates without concepts, judgments, or detached ego-awareness22. For Dreyfus, concepts and propositional rationality are not the foundation of intelligence, but late-emerging tools deployed only when absorbed coping breaks down21.

### Neurodynamics and the Critique of Heideggerian AI

During the late 1980s, roboticist Rodney Brooks developed situated robotics and the subsumption architecture, famously proclaiming that robotics should proceed without centralized world representations13. Dreyfus initially welcomed Brooks’s assertion that the world is its own representation, but he soon recognized its structural limitations: Brooks’s robots reacted exclusively to fixed, hardwired sensory inputs20. They remained incapable of adapting to changing significance, cultural background practices, or shifting contextual horizons20.

In 2005, philosopher Michael Wheeler published Reconstructing the Cognitive World, attempting to establish a systematic research program for "Heideggerian AI"8. Wheeler argued that the frame problem was a "two-headed beast"8. The intra-context frame problem addressed how a system achieves fluid, flexible action within an established context, which Wheeler argued could be handled through special-purpose adaptive sensorimotor couplings8. The inter-context frame problem addressed how an agent transitions between an open-ended number of indeterminate contexts, which Wheeler proposed could be managed by continuous reciprocal causation (CRC) operating over dynamic, "action-oriented representations"8.

In his 2007 paper, "Why Heideggerian AI Failed and How Fixing It Would Require Making It More Heideggerian," Dreyfus rejected Wheeler’s architecture4. Dreyfus asserted that by relying on action-oriented representations, Wheeler had preserved the central flaw of cognitivism8. Any system that depends on internal representations must face the problem of selecting which representation matches the current situation, dragging the system back into the frame regress8.

To replace representationalism, Dreyfus championed the non-linear neurodynamics of Walter J. Freeman12. Freeman’s electroencephalographic studies on the olfactory bulbs of rabbits demonstrated that sensory perception does not involve retrieving stored representations9. Instead, a sensory stimulus acts as a trigger that destabilizes the cortex, causing it to undergo a non-equilibrium, dissipative phase transition across an entire landscape of chaotic attractors12. The brain’s state-space landscape is continually sculpted by the organism's history, conditioning, and immediate motor needs12. When stimulated, the global neural assembly converges onto a specific attractor basin, reconfiguring the animal’s motor readiness without computing symbolic values12. Dreyfus argued that Freeman’s chaotic neurodynamics offered the true physical mechanism of Merleau-Ponty’s intentional arc, demonstrating how a non-representational, embodied organism remains attuned to environmental relevance without falling victim to the frame problem12.

## John Vervaeke: The Cognitive Science of Relevance Realization

While Hubert Dreyfus used continental phenomenology to critique the philosophical foundations of computationalism, cognitive psychologist and philosopher John Vervaeke addressed the frame problem directly within empirical cognitive science and cognitive psychology10. Collaborating with Timothy P. Lillicrap, Blake A. Richards, and Leonardo Ferraro, Vervaeke argued that the frame problem is not a secondary technical puzzle, but the central organizing question of all cognitive science10. Vervaeke defined the capacity to navigate this problem as Relevance Realization (RR), asserting that the continuous, dynamic realization of relevance is the foundational criterion of cognition itself36.

### The Cognitive Trilemma: Combinatorial Explosion, Ill-Definedness, and Insight

Vervaeke formulated the frame problem through the classical psychology of problem solving, which originated with Newell and Simon’s General Problem Solver (GPS)10. In the GPS framework, any cognitive problem is defined by four core elements: an initial state, a goal state, a set of permissible operators to transition between states, and path constraints that disallow certain transitions10. Together, these components define a formal problem space or search space10.

Within this framework, Newell and Simon revealed the reality of combinatorial explosion10. If an agent attempts to locate a sequence of operators to reach a goal state via an exhaustive, brute-force search, the search space expands exponentially10. A human playing a game of chess faces a branching space containing more paths than there are atoms in the physical universe; an agent acting in the real world faces an indefinitely larger space10. Brute-force calculation is mathematically and physically impossible for any finite physical system10.

Classical cognitive science attempted to escape combinatorial explosion by introducing heuristics—computational rules of thumb that bias the search space toward promising pathways10. However, Vervaeke identified the circularity of this proposal: the heuristic selection problem10. An agent possesses an extensive catalog of potential heuristics10. To select an effective heuristic for a given situation, the agent must evaluate the situation10. If that evaluation is governed by meta-heuristics, the agent requires higher-order meta-meta-heuristics to select among those, generating an exponential explosion of rules10. Heuristics do not resolve combinatorial explosion; they presuppose that the agent has already restricted its search space to relevant information10.

This dilemma is compounded by the fact that real-world problems are inherently ill-defined10. In well-defined problems (like formal chess), the initial state, goal state, operators, and constraints are clearly demarcated10. In contrast, human tasks—such as sustaining a romantic partnership, being a good citizen, or taking notes during an academic lecture—possess vague, missing, or open-ended boundaries10. A student taking lecture notes does not stop to assess the ambient temperature, the color of their shoes, or historical events in antiquity; these facts are pruned prior to conscious deliberation36. Human general intelligence functions precisely because it converts ill-defined problems into well-defined formulations by zeroing in on relevant variables and ignoring the vast majority of environmental data9.

When an initial problem formulation fails, the agent encounters an impasse, necessitating insight10. Insight is not the incremental algorithmic traversal of an existing problem space; it is the non-algorithmic restructuring of the problem space itself35. Solving insight problems requires frame-breaking and reframing: an agent must disrupt its existing salience landscape, discard its initial assumptions, and spontaneously restructure what it considers relevant35. Thus, Vervaeke demonstrated that combinatorial explosion, ill-definedness, and insight are three facets of a single underlying challenge: the realization of relevance10.

### Mechanizing the Frame: Opponent Processing and Dynamic Constraints

Vervaeke insisted that cognitive science cannot produce a "theory of relevance" because relevance is not an intrinsic, invariant property of objects, nor is it a stable semantic category36. Relevance is context-dependent, dynamic, and non-homogeneous36. In this sense, relevance is structurally identical to the biological concept of "fitness" in evolutionary biology36. Charles Darwin did not propose a theory of fitness as an essential property, because fitness varies across environmental niches; rather, he proposed a theory of the process that generates fitness: natural selection36. Similarly, cognitive science requires a theory of the mechanisms that realize relevance36.

To explain relevance realization naturalistically without appealing to a homunculus or triggering a computational regress, Vervaeke, Lillicrap, and Richards proposed that relevance realization is governed by opponent processing36. Opponent processing is an established principle of biological self-organization—demonstrated in the autonomic nervous system’s antagonism between the sympathetic and parasympathetic systems, and in retinal color vision—wherein two opposing processes continually check and balance each other, yielding flexible, context-sensitive stability41.

Vervaeke and his colleagues organized the mechanisms of relevance realization into a formal architecture of dynamic constraints, showing that an agent navigates cognitive trade-offs through an integrated hierarchy of opponent processes36.

| Constraint Level | Polar Opponent Processes | Functional Dynamics & Cognitive Cost Trade-offs |
| :--- | :--- | :--- |
| Lower-Order Constraint | Exploration vs. Exploitation | Exploitation leverages existing environmental models to harvest known rewards; exploration expends energy to sample unfamiliar territory. Dynamic balancing prevents rigid behavioral perseveration and chaotic distraction36. |
| Lower-Order Constraint | Specialization vs. Generalization | Specialization fine-tunes cognitive models to the unique demands of a specific environmental niche; generalization extracts broad patterns across contexts. Their interaction optimizes task execution while preventing cognitive overfitting40. |
| Lower-Order Constraint | Compression vs. Particularization | Compression abstracts sensory input into low-dimensional semantic representations; particularization preserves high-dimensional contextual detail. Balancing these processes sets the proper cognitive scope for action48. |
| Higher-Order Meta-Constraint | Efficiency vs. Resiliency | Efficiency optimizes operations to minimize computational, thermodynamic, and temporal overhead within stable environments; resiliency maintains redundant capacity and variability to survive systemic disruptions. Efficiency drives evolutionary selection, while resiliency preserves evolutionary variation36. |

By deploying opponent processing across these constraints, a cognitive architecture achieves real-time contextual adaptation without requiring an overarching executive system to decide what is relevant41. Relevance realization emerges as a dynamic, self-organizing equilibrium that continuously adjusts in response to environmental feedback40.

### Bio-Economics, Neurodynamics, and Predictive Processing

Vervaeke grounded this opponent architecture in the bio-economics of living organisms10. Biological agents exist under strict thermodynamic and metabolic limitations: they possess finite quantities of metabolic energy, glucose, neural firing bandwidth, and reaction time9. Cognition is therefore an ongoing exercise in bio-economic resource management10. An agent cannot afford to process everything; to survive, it must manage its cognitive attention as scarce capital, investing it where the probability of return is highest10.

At the neuroanatomical level, Vervaeke linked this bio-economic balancing to complex network topology10. The brain self-organizes around a small-world network architecture, combining dense local clustering (which supports functional specialization and efficiency) with sparse, long-range global connectivity (which supports information integration and resiliency)10. Furthermore, the brain dynamically shifts between two large-scale networks operating in an opponent dynamic: the Task-Positive Network, which mediates focused, goal-directed, exploitative attention, and the Default Mode Network (DMN), which supports mind-wandering, imaginative simulation, and broad exploratory associative search42. The antagonistic balance between these networks maintains self-organizing criticality, positioning the nervous system in a metastable regime between rigid order and chaotic noise34.

Vervaeke’s framework integrates directly with predictive processing and active inference models of mind41. Predictive processing models the brain as a hierarchical Bayesian inference engine that minimizes prediction error, or free energy41. In this framework, the mechanism that controls which prediction errors are passed up the cortical hierarchy is precision-weighting41. Precision represents the system’s statistical estimate of the reliability or uncertainty of an informational signal41.

As Anderson, Miller, and Vervaeke demonstrated, precision-weighting is the algorithmic implementation of relevance realization within predictive processing41. By assigning high precision to select sensory signals and low precision to others, the brain amplifies relevant data and dampens irrelevant noise41. The allocation of precision is itself governed by opponent trade-offs between efficiency (relying on existing high-precision top-down priors) and resiliency (increasing the precision of unexpected prediction errors to induce structural learning)41.

### Transjectivity, Autopoiesis, and the Four Ways of Knowing

Vervaeke addressed the ontology of relevance by asking whether relevance resides in the external world or in the internal mind35. He rejected both subjectivism (which views relevance as an arbitrary mental projection) and objectivism (which views relevance as an intrinsic, physical property of objects)40. Instead, Vervaeke established that relevance is transjective35. Transjectivity describes an ontological relationship that emerges from the reciprocal interaction between an agent and its arena35. A physical opening is not "walkable" in itself, nor is walkability an illusion projected by the mind; it is an affordance that exists objectively within the transjective relationship between an organism’s bodily morphology and environmental space28.

This transjective coupling grounds relevance realization in 4E cognitive science (embodied, embedded, enactive, and extended) and biological autopoiesis21. Drawing on Francisco Varela and Humberto Maturana, Vervaeke emphasized that living systems possess constitutive autonomy: they are non-equilibrium, self-manufacturing physical unities that must continuously consume energy and interact with their surroundings to maintain their identity against entropy20. Because an organism faces the permanent threat of death, it has an intrinsic stake in its own survival20. This biological precarity is the origin of meaning, care, and normativity; relevance realization is the cognitive manifestation of an autopoietic system’s drive to maintain its viability in the world20.

To explain how relevance realization operates across cognitive architectures, Vervaeke formulated the Four Ways of Knowing, organizing human epistemology into an integrated developmental hierarchy43.

At the base of the hierarchy lies participatory knowing, which consists of the fundamental, transjective co-identification and structural attunement between the agent and its arena35. Participatory knowing establishes the deep ecological affordances and sensorimotor couplings that allow an agent to exist within a world35. Resting upon participatory attunement is perspectival knowing, which constitutes the agent’s situated, first-person awareness of what it is like to be present in a specific space and time43. Perspectival knowing sculpts the agent's real-time salience landscape, causing certain features of the environment to stand out as foreground while others recede into the background, providing the primary psychological mechanism of framing43.

Above perspectival framing is procedural knowing, which embodies practical competence, habits, and sensorimotor skills—the knowing-how of an agent navigating its environment43. Finally, at the top of the hierarchy sits propositional knowing, which is the knowing-that of linguistic assertions, abstract representations, and formal logical inferences43.

In Vervaeke's framework, classical AI failed to resolve the frame problem because it operated exclusively at the level of propositional knowing6. Symbolic systems attempted to compute relevance purely through syntactic transformations of propositions, completely disconnected from the underlying strata of perspectival salience, procedural skill, and participatory, autopoietic embodiment that make relevance possible3.

## Comparative Synthesis: Phenomenology Meets Naturalistic Mechanism

Examining Hubert Dreyfus and John Vervaeke alongside one another highlights significant philosophical continuity alongside important methodological differences6. While both thinkers identify the frame problem as the decisive failure of the computational model of mind, they approach its resolution from distinct intellectual paradigms6.

| Comparative Dimension | Hubert Dreyfus | John Vervaeke |
| :--- | :--- | :--- |
| Foundational Lineage | Continental Existential Phenomenology (Martin Heidegger, Maurice Merleau-Ponty)6. | 4E Cognitive Science, Dynamical Systems Theory, Evolutionary Biology, Predictive Processing10. |
| Diagnosis of GOFAI | Classical AI collapses because it assumes the Cartesian dogmas of context-free atomic facts and the priority of knowing-that over knowing-how3. | Classical AI collapses because the physical symbol system hypothesis cannot resolve combinatorial explosion or solve the heuristic selection problem10. |
| Status of the Frame Problem | Dissolution: The frame problem is a pseudoproblem born of Cartesian representationalism; thrown, embodied agents do not compute context because they are already within it3. | Naturalization/Mechanization: The frame problem is an inescapable cognitive reality (combinatorial explosion); cognitive science must detail the non-circular mechanisms that realize relevance36. |
| Core Explanatory Engine | Absorbed Coping & Maximal Grip: Bodily motor intentionality moving prereflectively toward optimal gestalts along the intentional arc12. | Relevance Realization (RR): Self-organizing dynamic balancing of multi-scale opponent constraints (e.g., efficiency vs. resiliency)36. |
| Status of Mental Representation | Radical Anti-Representationalism: internal representations are completely absent in everyday coping and appear only during functional breakdown8. | Dynamic Functionalism: replaces static symbolic models with non-classical, aspectualized salience landscapes, precision-weighting, and predictive priors41. |
| Biological Substrate | The physical human body, visceral motor habits, and cortical non-linear neurodynamics (Walter J. Freeman's chaotic attractors)3. | Thermodynamic autopoiesis, constitutive autonomy, metabolic resource management, and small-world neurodynamics10. |
| Ontological Locus of Meaning | Being-in-the-world (In-der-Welt-sein); the holistic disclosure of readiness-to-hand (Zuhandenheit) within cultural practices9. | Transjectivity: An emergent, co-identifying dynamic relation between an agent's morphology and an arena's affordances35. |
| Epistemic Structure | Binary distinction: practical embodied knowing-how versus derivative propositional knowing-that3. | Four-Tier Stack: Propositional, Procedural, Perspectival (salience framing), and Participatory (autopoietic co-identification)43. |

The primary theoretical tension between Dreyfus and Vervaeke concerns whether the frame problem should be dissolved or mechanized8. Dreyfus pursued a phenomenological dissolution: by demonstrating that human agents are defined by thrownness (Geworfenheit), he asserted that the frame problem arises only when one assumes that an agent must reconstruct context from detached, neutral facts3. Because human beings are always already embedded in a shared cultural world, there is no need for a computational algorithm to infer a frame—the world already structures the agent's involvement8.

Vervaeke countered that Dreyfus’s dissolution, while philosophically insightful, is scientifically incomplete8. For Vervaeke, appealing to thrownness merely describes the first-person phenomenology of situated action; it does not explain how the biological system computationally and physically avoids combinatorial explosion8. A comprehensive cognitive science cannot simply state that context is given; it must provide a third-person, causal-mechanical explanation of how wetware tracks relevance in real time without descending into the very computational regresses Dreyfus identified9.

Vervaeke’s relevance realization theory provides the mechanistic framework that Dreyfus sought in his late-career turn to Walter J. Freeman12. While Dreyfus utilized Freeman’s neurodynamics primarily as an empirical refutation of symbolic storage, Vervaeke integrated non-linear neurodynamics, complex network theory, and bio-economics into a functional architecture: opponent processing10. Where Dreyfus identified that bodily coping strives toward "maximal grip," Vervaeke operationalized maximal grip as the dynamic balancing of higher-order trade-offs between efficiency and resiliency12.

Furthermore, Vervaeke’s epistemology resolves the theoretical gridlock of the McDowell-Dreyfus debate22. In that exchange, Dreyfus defended an extreme anti-representationalist position, claiming that absorbed coping in flow states is entirely mindless and non-conceptual, and that mindedness emerges only during reflective breakdown22. Vervaeke showed that this binary division is unnecessary43. By articulating perspectival and participatory knowing, Vervaeke demonstrated that absorbed coping possesses intentionality and normative structure without requiring explicit propositional concepts43. Mindedness does not require detached, linguistic deliberation; it operates dynamically through the real-time modulation of a salience landscape, providing an embodied rationality that precedes formal language43.

## Contemporary Implications: Deep Learning and the Horizon of Artificial General Intelligence

The convergence of Dreyfus's phenomenological critique and Vervaeke's relevance realization framework provides a critical perspective on modern artificial intelligence, particularly deep neural networks and Large Language Models (LLMs)13.

Mainstream AI research has largely shifted from symbolic GOFAI to transformer architectures trained on vast text and image corpora6. Some researchers suggest that because self-attention mechanisms dynamically weigh contextual tokens across long sequences, transformer-based architectures have resolved the frame problem45. However, from the combined viewpoints of Dreyfus and Vervaeke, modern deep learning has merely produced a statistical simulation of human framing, leaving the underlying problem unresolved13.

Transformers lack biological autopoiesis, thermodynamic vulnerability, and metabolic stakes20. Because an artificial neural network does not face death, it possesses no intrinsic concern for its own ongoing existence20. As Dreyfus maintained, without a mortal, physical body operating under physical constraints, there is no ground for an intentional arc, and thus no primordial basis for caring about one outcome over another4.

Furthermore, attention mechanisms in deep learning compute mathematical correlations across high-dimensional vector spaces45. This process is purely internal to the digital medium; it is not a transjective relationship between an embodied agent and an ecological environment35. Contemporary systems process the statistical artifacts of human relevance realization recorded in text, but they do not engage in relevance realization themselves40.

The systemic limitations of modern foundation models—including hallucinations, out-of-distribution failure, adversarial fragility, and catastrophic forgetting—represent the modern manifestation of the generalized frame problem40. When an AI system encounters a novel context whose deep latent structure diverges from its training distribution, it lacks the bodily maximal grip and biological opponent processing necessary to reorganize its problem space12. Because it possesses neither perspectival framing nor participatory grounding, it cannot discern what is contextually irrelevant, frequently treating superficial linguistic patterns as essential truths40.

To move toward genuine general intelligence, cognitive architecture must transition from disembodied, sample-hungry statistical optimization toward embodied, 4E cognitive architectures9. The synthesis of Dreyfus and Vervaeke suggests four foundational requirements for any artificial system capable of resolving the frame problem:

First, the system must possess physical or high-fidelity simulated embodiment, interacting dynamically with environments where the world serves as its own model, binding perception and action through closed-loop sensorimotor contingencies13. Second, the system must exhibit constitutive autonomy, meaning its cognitive decision-making is coupled to its own self-maintenance under conditions of thermodynamic precarity20. Relevance emerges only when a system's own organization is at stake20.

Third, artificial architectures must replace monolithic objective functions with multi-tiered opponent processing networks, dynamically negotiating trade-offs between exploration and exploitation, compression and particularization, and efficiency and resiliency36. Finally, systems must incorporate non-linear, metastable neurodynamics that exhibit chaotic attractors, phase transitions, and self-organizing criticality, realizing the cortical dynamics identified by Walter Freeman and John Vervaeke10.

## Conclusion

The frame problem remains the central theoretical and engineering challenge for artificial intelligence and the philosophy of mind2. Hubert Dreyfus demonstrated that classical computationalism was compromised by its Cartesian foundations, establishing that meaning does not arise from formal calculations over atomic symbols, but is disclosed through embodied coping, practical equipment, and the pursuit of maximal grip6. John Vervaeke expanded this insight into a rigorous cognitive-scientific theory, demonstrating that relevance realization is the core criterion of general intelligence, implemented through an ecology of opponent processes that continually navigate combinatorial explosion under bio-economic constraints10.

Together, Dreyfus and Vervaeke trace a unified progression: Dreyfus deconstructed the assumption that human cognition is rule-based symbol manipulation, while Vervaeke articulated the multi-level architecture that explains how living systems dynamically make sense of an open-ended world6. Their combined work reveals that general intelligence is fundamentally transjective, participatory, and embodied—an attunement that cannot be programmed through abstract syntax, but must emerge from the self-organizing, precarious imperatives of life itself20.

#### Works cited

- The Frame Problem in Artificial Intelligence and Philosophy, [https://www.fn.uw.edu.pl/index.php/fn/article/download/713/720/186](https://www.fn.uw.edu.pl/index.php/fn/article/download/713/720/186)
- The Frame Problem - Stanford Encyclopedia of Philosophy, [https://plato.stanford.edu/archives/fall2025/entries/frame-problem/](https://plato.stanford.edu/archives/fall2025/entries/frame-problem/)
- Artificial Intelligence and the Body: Dreyfus, Bickhard, and the Future, [https://www.danielsusser.info/docs/Susser-AI-and-the-Body.pdf](https://www.danielsusser.info/docs/Susser-AI-and-the-Body.pdf)
- [PDF] Why Heideggerian AI Failed and How Fixing it Would Require, [https://www.semanticscholar.org/paper/Why-Heideggerian-AI-Failed-and-How-Fixing-it-Would-Dreyfus/58ddaf8f62f8e71f82e1f8763b27c43ada947f7b](https://www.semanticscholar.org/paper/Why-Heideggerian-AI-Failed-and-How-Fixing-it-Would-Dreyfus/58ddaf8f62f8e71f82e1f8763b27c43ada947f7b)
- ON THE DESIGN OF DEVICES WITH EMERGENT SEMANTIC, [https://petercariani.com/CarianiNewWebsite/Publications_files/CarianiPhDIntegrated1989.pdf](https://petercariani.com/CarianiNewWebsite/Publications_files/CarianiPhDIntegrated1989.pdf)
- Hubert Dreyfus's views on artificial intelligence - Wikipedia, [https://en.wikipedia.org/wiki/Hubert_Dreyfus%27s_views_on_artificial_intelligence](https://en.wikipedia.org/wiki/Hubert_Dreyfus%2527s_views_on_artificial_intelligence)
- ヒューバート・ドレイファス:Hubert Dreyfus, 1929-2017, [https://navymule9.sakura.ne.jp/Hubert_Dreyfus.html](https://navymule9.sakura.ne.jp/Hubert_Dreyfus.html)
- Phenomenology, Situated Robotics and the Frame Problem | Scilit, [https://www.scilit.com/publications/fd30f32cefdefc9e4fede10c253bba1f](https://www.scilit.com/publications/fd30f32cefdefc9e4fede10c253bba1f)
- Why Heideggerian AI Failed and How Fixing It Would Require, [https://www.researchgate.net/publication/220546648_Why_Heideggerian_AI_Failed_and_How_Fixing_It_Would_Require_Making_It_More_Heideggerian](https://www.researchgate.net/publication/220546648_Why_Heideggerian_AI_Failed_and_How_Fixing_It_Would_Require_Making_It_More_Heideggerian)
- (PDF) Relevance Realization and the Neurodynamics and, [https://www.researchgate.net/publication/299812171_Relevance_Realization_and_the_Neurodynamics_and_Neuroconnectivity_of_General_Intelligence](https://www.researchgate.net/publication/299812171_Relevance_Realization_and_the_Neurodynamics_and_Neuroconnectivity_of_General_Intelligence)
- Beyond the frame problem: what (else) can Heidegger do for AI?, [https://www.researchgate.net/publication/355031458_Beyond_the_frame_problem_what_else_can_Heidegger_do_for_AI](https://www.researchgate.net/publication/355031458_Beyond_the_frame_problem_what_else_can_Heidegger_do_for_AI)
- Hubert Dreyfus (Last affiliation: University of California, Berkeley), [https://philpeople.org/profiles/hubert-dreyfus/publications?order=viewings](https://philpeople.org/profiles/hubert-dreyfus/publications?order%3Dviewings)
- One Question About Heideggerian AI - Base and Superstructure, [https://baseandsuperstructure.com/heideggerian-ai/](https://baseandsuperstructure.com/heideggerian-ai/)
- Modeling a Heideggerian Valentine's - Cheryl Marie Cordeiro, [https://cmariec.com/modeling-a-heideggerian-valentines/](https://cmariec.com/modeling-a-heideggerian-valentines/)
- what computers can't do | be you., [https://redefineschool.com/what-computers-cant-do/](https://redefineschool.com/what-computers-cant-do/)
- What Computers Still Can't Do: A Critique of Artificial Reason, [https://www.goodreads.com/en/book/show/796506.What_Computers_Still_Can_t_Do](https://www.goodreads.com/en/book/show/796506.What_Computers_Still_Can_t_Do)
- Book reviews, [https://www.tandfonline.com/doi/pdf/10.1080/02604027.1976.9971877](https://www.tandfonline.com/doi/pdf/10.1080/02604027.1976.9971877)
- Hubert Dreyfus What Computers Can't Do - A Critique of Artificial, [https://www.scribd.com/document/165657741/Hubert-Dreyfus-What-Computers-Can-t-Do-A-Critique-of-Artificial-Reason-0](https://www.scribd.com/document/165657741/Hubert-Dreyfus-What-Computers-Can-t-Do-A-Critique-of-Artificial-Reason-0)
- the problem of human mind and artificial intelligence: an evaluation, [https://www.acjol.com/paper/1183.pdf](https://www.acjol.com/paper/1183.pdf)
- Artificial Intelligence and Contemporary Philosophy, [https://www.philosophyoflife.org/jpl202302.pdf](https://www.philosophyoflife.org/jpl202302.pdf)
- Why Heideggerian AI Failed and How Fixing It Would Require, [https://www.researchgate.net/publication/307822680_Why_Heideggerian_AI_Failed_and_How_Fixing_It_Would_Require_Making_It_More_Heideggerian](https://www.researchgate.net/publication/307822680_Why_Heideggerian_AI_Failed_and_How_Fixing_It_Would_Require_Making_It_More_Heideggerian)
- Mind, Reason, and Being-in-the-World: The McDowell-Dreyfus Debate, [https://ndpr.nd.edu/reviews/mind-reason-and-being-in-the-world-the-mcdowell-dreyfus-debate/](https://ndpr.nd.edu/reviews/mind-reason-and-being-in-the-world-the-mcdowell-dreyfus-debate/)
- Skillful Coping: Essays on the Phenomenology of Everyday, [https://ndpr.nd.edu/reviews/skillful-coping-essays-on-the-phenomenology-of-everyday-perception-and-action/](https://ndpr.nd.edu/reviews/skillful-coping-essays-on-the-phenomenology-of-everyday-perception-and-action/)
- The new orthodoxy: humans, animals, Heidegger and Dreyfus, [https://scispace.com/pdf/the-new-orthodoxy-humans-animals-heidegger-and-dreyfus-196nb3xqwn.pdf](https://scispace.com/pdf/the-new-orthodoxy-humans-animals-heidegger-and-dreyfus-196nb3xqwn.pdf)
- PSYCH256 | Anthony Zhang, [https://anthony-zhang.me/University-Notes/PSYCH256/PSYCH256.html](https://anthony-zhang.me/University-Notes/PSYCH256/PSYCH256.html)
- FOUNDATIONAL ISSUES IN ARTIFICIAL INTELLIGENCE AND, [https://www.lehigh.edu/~mhb0/AIFull.pdf](https://www.lehigh.edu/~mhb0/AIFull.pdf)
- A Tale of Two “AI” Companies - TechTalks, [https://bdtechtalks.com/2022/07/28/tale-of-two-ai-companies/](https://bdtechtalks.com/2022/07/28/tale-of-two-ai-companies/)
- (PDF) The skillful body as a concernful system of possible actions, [https://www.researchgate.net/publication/254919630_The_skillful_body_as_a_concernful_system_of_possible_actions_Phenomena_and_neurodynamics](https://www.researchgate.net/publication/254919630_The_skillful_body_as_a_concernful_system_of_possible_actions_Phenomena_and_neurodynamics)
- Reflections on The McDowell Dreyfus Debate - ScholarWorks, [https://scholarworks.calstate.edu/downloads/f4752r07z](https://scholarworks.calstate.edu/downloads/f4752r07z)
- The Dreyfus-McDowell Debate and the Limits of Reason - CORE, [https://core.ac.uk/download/157854612.pdf](https://core.ac.uk/download/157854612.pdf)
- Border Patrol: Arguments against the idea that the ... - NEW SAVANNA, [https://new-savanna.blogspot.com/2019/10/border-patrol-arguments-against-idea.html](https://new-savanna.blogspot.com/2019/10/border-patrol-arguments-against-idea.html)
- Dreyfus, H. (2007) Why Heideggerian AI Failed and How Fixing It, [https://www.scirp.org/reference/referencespapers?referenceid=1546511](https://www.scirp.org/reference/referencespapers?referenceid%3D1546511)
- (PDF) A Nonlinear Dynamical Approach to Belief Revision in, [https://www.researchgate.net/publication/262609198_A_Nonlinear_Dynamical_Approach_to_Belief_Revision_in_Cognitive_Behavioral_Therapy](https://www.researchgate.net/publication/262609198_A_Nonlinear_Dynamical_Approach_to_Belief_Revision_in_Cognitive_Behavioral_Therapy)
- A non-linear dynamical approach to belief revision in cognitive, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4030160/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4030160/)
- Getting to the Depths of Relevance Realization - Meaning Crisis, [https://meaningcrisis.co/ep-29-awakening-from-the-meaning-crisis-getting-to-the-depths-of-relevance-realization/](https://meaningcrisis.co/ep-29-awakening-from-the-meaning-crisis-getting-to-the-depths-of-relevance-realization/)
- Relevance Realization and the Emerging Framework in Cognitive, [http://contrastiveconvergence.net/~timothylillicrap/files/articles/relevance%20realization%20as%20an%20emerging%20framework%20in%20cogsci.pdf](http://contrastiveconvergence.net/~timothylillicrap/files/articles/relevance%2520realization%2520as%2520an%2520emerging%2520framework%2520in%2520cogsci.pdf)
- The emergence of complexification from opponent processing.[ THIS, [https://www.researchgate.net/figure/The-emergence-of-complexification-from-opponent-processing-THIS-FIGURE-WAS-ADDED_fig3_299812171](https://www.researchgate.net/figure/The-emergence-of-complexification-from-opponent-processing-THIS-FIGURE-WAS-ADDED_fig3_299812171)
- implications for AI alignment, sentience and existential risk - arXiv, [https://arxiv.org/pdf/2608.03361](https://arxiv.org/pdf/2608.03361)
- Frame Problems, Emotions and Axiological Projectionism, [https://www.utsc.utoronto.ca/~seager/seager_for_rds.pdf](https://www.utsc.utoronto.ca/~seager/seager_for_rds.pdf)
- Naturalizing relevance realization: why agency and cognition are, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11231436/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11231436/)
- Converging on Relevance Realization | PDF | Perception - Scribd, [https://www.scribd.com/document/695990759/Anderson-Miller-Vervaeke-2022](https://www.scribd.com/document/695990759/Anderson-Miller-Vervaeke-2022)
- Integration of the global versus local processing systems account, [https://medium.com/@keepingupwiththehaefners/integration-of-the-global-versus-local-processing-systems-account-720365103cab](https://medium.com/@keepingupwiththehaefners/integration-of-the-global-versus-local-processing-systems-account-720365103cab)
- Wiser not cleverer | Blog | University of Essex, [https://www.essex.ac.uk/blog/posts/2024/01/09/wiser-not-cleverer](https://www.essex.ac.uk/blog/posts/2024/01/09/wiser-not-cleverer)
- POD's Awakening from the Meaning Crisis Notes - Google Docs, [https://docs.google.com/document/u/0/d/1VEhfb09YIZLW1a__Ck4uq_618SYP4fwW5b3YimZaux4/mobilebasic](https://docs.google.com/document/u/0/d/1VEhfb09YIZLW1a__Ck4uq_618SYP4fwW5b3YimZaux4/mobilebasic)
- Salience Sticks Out in Intelligence | by Jacob Grow - Medium, [https://medium.com/@Gbgrow/salience-sticks-out-in-intelligence-8c5b4fa05cfb](https://medium.com/@Gbgrow/salience-sticks-out-in-intelligence-8c5b4fa05cfb)
- Relevance Realization as a Solution to the Frame Problem in, [https://studenttheses.uu.nl/bitstreams/46303afb-e81e-42db-a514-45f16be7c521/download](https://studenttheses.uu.nl/bitstreams/46303afb-e81e-42db-a514-45f16be7c521/download)
- Democracy has Hamlet's Problem: The Search for Relevance in a, [https://www.tandfonline.com/doi/full/10.1080/08913811.2025.2576339](https://www.tandfonline.com/doi/full/10.1080/08913811.2025.2576339)
- By John Vervaeke and Leonardo Ferraro Abstract - ResearchGate, [https://www.researchgate.net/profile/John_Vervaeke/publication/299812171_Relevance_Realization_and_the_Neurodynamics_and_Neuroconnectivity_of_General_Intelligence/links/58f52970a6fdcc11e569fdc4/Relevance-Realization-and-the-Neurodynamics-and-Neuroconnectivity-of-General-Intelligence.pdf](https://www.researchgate.net/profile/John_Vervaeke/publication/299812171_Relevance_Realization_and_the_Neurodynamics_and_Neuroconnectivity_of_General_Intelligence/links/58f52970a6fdcc11e569fdc4/Relevance-Realization-and-the-Neurodynamics-and-Neuroconnectivity-of-General-Intelligence.pdf)
- Untethered in the Platonic Realm - Blog - Johannes Jaeger, [https://www.johannesjaeger.eu/blog.html](https://www.johannesjaeger.eu/blog.html)
- Category: Arts & Science - Untethered in the Platonic Realm, [http://www.johannesjaeger.eu/blog/category/arts-science](http://www.johannesjaeger.eu/blog/category/arts-science)
- From flow to mystical experiences: Connecting entropy and fluency, [https://www.tandfonline.com/doi/pdf/10.1080/09515089.2025.2601717](https://www.tandfonline.com/doi/pdf/10.1080/09515089.2025.2601717)
- Full article: Solving the relevance problem with predictive processing, [https://www.tandfonline.com/doi/full/10.1080/09515089.2025.2460502](https://www.tandfonline.com/doi/full/10.1080/09515089.2025.2460502)
- Self-organization, free energy minimization, and optimal grip on a, [https://www.researchgate.net/publication/265094352_Self-organization_free_energy_minimization_and_optimal_grip_on_a_field_of_affordances](https://www.researchgate.net/publication/265094352_Self-organization_free_energy_minimization_and_optimal_grip_on_a_field_of_affordances)
- Dr. John Vervaeke - Ivy.fm, [https://ivy.fm/podcast/dr-john-vervaeke-1242030](https://ivy.fm/podcast/dr-john-vervaeke-1242030)
- Naturalizing relevance realization: why agency and cognition are, [https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1362658/full](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1362658/full)
- The tyranny of the propositional - Alexander Large, [https://www.alexanderlarge.com/scrapbook/2025/4.-Thinking/Misc-notes/The-tyranny-of-the-propositional](https://www.alexanderlarge.com/scrapbook/2025/4.-Thinking/Misc-notes/The-tyranny-of-the-propositional)
- Recommended Reading List - John Vervaeke, [https://johnvervaeke.com/books/recommended/](https://johnvervaeke.com/books/recommended/)
- 8. Matthew Appreciation | John Vervaeke's Lectern, [https://lectern.teachable.com/courses/rti/lectures/60524481](https://lectern.teachable.com/courses/rti/lectures/60524481)
- Heidegger - Episode 47: Awakening from the Meaning Crisis, [https://meaningcrisis.co/ep-47-awakening-from-the-meaning-crisis-heidegger/](https://meaningcrisis.co/ep-47-awakening-from-the-meaning-crisis-heidegger/)
- RR in the Brain ... - Episode 32: Awakening from the Meaning Crisis, [https://meaningcrisis.co/ep-32-awakening-from-the-meaning-crisis-rr-in-the-brain-insight-and-consciousness/](https://meaningcrisis.co/ep-32-awakening-from-the-meaning-crisis-rr-in-the-brain-insight-and-consciousness/)
- Skillful coping in the metaverse | 12 | On the challenges of immersion, [https://www.taylorfrancis.com/chapters/oa-edit/10.4324/9781003649359-12/skillful-coping-metaverse-marta-p%C3%A9rez-verdugo](https://www.taylorfrancis.com/chapters/oa-edit/10.4324/9781003649359-12/skillful-coping-metaverse-marta-p%25C3%25A9rez-verdugo)

---

## 🔗 Related Concepts & Entities

- **Concepts**:
  - [[The Frame Problem and Relevance Realization|The Frame Problem and Relevance Realization (Master Concept)]]
  - [[Is Consciousness Necessary for True Intelligence|Is Consciousness Necessary for True Intelligence?]]
  - [[Phenomenology and Embodied Cognition|Phenomenology & Embodied Cognition]]
  - [[Abductive Reasoning and Common Sense|Abductive Reasoning & Common Sense in AI]]
  - [[Computation vs Nature and the Observer-Relative Fallacy|Computation vs. Nature & The Observer-Relative Fallacy]]
  - [[The Divided Brain and Hemispheric Lateralization|The Divided Brain & Hemispheric Lateralization]]
  - [[Machine Metaphor|The Machine Metaphor & Computationalism]]
  - [[Wisdom and the Meaning Crisis|Wisdom & Cognitive Ecology]]
- **Entities**:
  - [[Hubert Dreyfus|Hubert Dreyfus]]
  - [[John Vervaeke|John Vervaeke]]
  - [[Martin Heidegger|Martin Heidegger]]
  - [[Maurice Merleau-Ponty|Maurice Merleau-Ponty]]
  - [[Daniel Dennett|Daniel Dennett]]
  - [[Walter J. Freeman|Walter J. Freeman]]
  - [[Michael Wheeler|Michael Wheeler]]
  - [[Rodney Brooks|Rodney Brooks]]
  - [[Karl Friston|Karl Friston]]
  - [[Francisco Varela|Francisco Varela]]
  - [[Humberto Maturana|Humberto Maturana]]
  - [[Evan Thompson|Evan Thompson]]
  - [[Hans Jonas|Hans Jonas]]
  - [[Jerry Fodor|Jerry Fodor]]
  - [[John Searle|John Searle]]
