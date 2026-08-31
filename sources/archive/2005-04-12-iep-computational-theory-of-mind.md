---
title: "Computational Theory of Mind"
url: "https://iep.utm.edu/computational-theory-of-mind/"
author: "Steven Horst"
date: "2005-04-12"
type: "encyclopedia-entry"
publisher: "Internet Encyclopedia of Philosophy"
---

# Computational Theory of Mind

Title: Live Content

Description: Fetched live

Source: https://iep.utm.edu/computational-theory-of-mind/

---



	Computational Theory of Mind | Internet Encyclopedia of Philosophy




































# The Computational Theory of Mind

The Computational Theory of Mind (CTM) claims that the mind is a computer, so the theory is also known as [computationalism](../art-inte/#SH4a). It is generally assumed that CTM is the main working hypothesis of cognitive science.

CTM is often understood as a specific variant of the [Representational Theory of Mind](../fodor/#H4) (RTM), which claims that cognition is manipulation of representation. The most popular variant of CTM, classical CTM, or simply CTM without any qualification, is related to the [Language of Thought Hypothesis](../lot-hypo/) (LOTH), that has been forcefully defended by [Jerry Fodor](../fodor/). However, there are several other computational accounts of the mind that either reject LOTH—notably connectionism and several accounts in contemporary computational neuroscience—or do not subscribe to RTM at all. In addition, some authors explicitly disentangle the question of whether the mind is computational from the question of whether it manipulates representations. It seems that there is no inconsistency in maintaining that cognition requires computation without subscribing to representationalism, although most proponents of CTM agree that the account of cognition in terms of computation over representation is the most cogent. (But this need not mean that representation is reducible to computation.)

One of the basic philosophical arguments for CTM is that it can make clear how thought and content are causally relevant in the physical world. It does this by saying thoughts are syntactic entities that are computed over: their form makes them causally relevant in just the same way that the form makes fragments of source code in a computer causally relevant. This basic argument may be made more specific in various ways. For example, Allen Newell couched it in terms of the physical symbol hypothesis, according to which being a physical symbol system (a physical computer) is a necessary and sufficient condition of thinking. Haugeland framed the claim in formalist terms: if you take care of the syntax, the semantics will take care of itself. Daniel Dennett, in a slightly different vein, claims that while semantic engines are impossible, syntactic engines can approximate them quite satisfactorily.

This article focuses only on specific problems with the Computation Theory of Mind (CTM), while for the most part leaving RTM aside. There are four main sections. In the first section, the three most important variants of CTM are introduced: classical CTM, connectionism, and computational neuroscience. The second section discusses the most important conceptions of computational explanation in cognitive science, which are functionalism and mechanism. The third section introduces the skeptical arguments against CTM raised by Hilary Putnam, and presents several accounts of implementation (or physical realization) of computation. Common objections to CTM are listed in the fourth section.

### Table of Contents

1. [Variants of Computationalism]

  1. [Classical CTM]

  2. [Connectionism]

  3. [Computational Neuroscience]

2. [Computational Explanation]

  1. [Functionalism]

  2. [Mechanism]

3. [Implementation]

  1. [Putnam and Searle against CTM]

  2. [Semantic Account]

  3. [Causal Account]

  4. [Mechanistic Account]

4. [Other objections to CTM]

5. [Conclusion]

6. [References and Further Reading]

## 1. Variants of Computationalism

The generic claim that the mind is a computer may be understood in various ways, depending on how the basic terms are understood. In particular, some theorists claimed that only cognition is computation, while emotional processes are not computational (Harnish 2002, 6), yet some theorists explain neither motor nor sensory processes in computational terms (Newell and Simon 1972). These differences are relatively minor compared to the variety of ways in which “computation” is understood.

The main question here is just how much of the mind’s functioning is computational. The crux of this question comes with trying to understand exactly what computation is. In its most generic reading, computation is equated with information processing; but in stronger versions, it is explicated in terms of digital effective computation, which is assumed in the classical version of CTM; in some other versions, analog or hybrid computation is admissible. Although Alan Turing defined effective computation using his notion of a machine (later called a ‘Turing machine’, see below section 1.a), there is a lively debate in philosophy of mathematics as to whether all physical computation is Turing-equivalent. Even if all mathematical theories of effective computation that we know of right now (for example, lambda calculus, Markoff algorithms, and partial recursive functions) turn out to be equivalent to Turing-machine computation, it is an open question whether they are adequate formalizations of the intuitive notion of computation. Some theorists, for example, claim that it is physically possible that hypercomputational processes (that is, processes that compute functions that a Turing machine cannot compute) exist (Copeland 2004). For this reason, the assumption that CTM has to assume Turing computation, frequently made in the debates over computationalism, is controversial.

One can distinguish several basic kinds of computation, such as digital, analog, and hybrid. As they are traditionally assumed in the most popular variants of CTM, they will be explicated in the following format: classical CTM assumes digital computation; connectionism may also involve analog computation; and in several theories in computational neuroscience, hybrid analog/digital processing is assumed.

### a. Classical CTM

Classical CTM is understood as the conjunction of RTM (and, in particular, LOTH) and the claim that cognition is digital effective computation. The best-known account of digital, effective computation was given by Alan Turing in terms of abstract machines (which were originally intended to be conceptual tools rather than physical entities, though sometimes they are built physically simply for fun). Such abstract machines can only do what a human computer would do mechanically, given a potentially indefinite amount of paper, a pencil, and a list of rote rules. More specifically, a [Turing machine](../art-inte/#SSH3a.ii) (TM) has at least one tape, on which symbols from a finite alphabet can appear; the tape is read and written (and erased) by a machine head, and can also move left or right. The functioning of the machine is described by the machine table instructions, which  include five pieces of information: (1) the current state of the TM; (2) the symbol read from the tape; (3) the symbol written on the tape; (4) left or right movement of the head; (5) the next state of the TM. The machine table has to be finite; the number of states is also finite. In contrast, the length of tape is potentially unbounded.

As it turns out, all known effective (that is, halting, or necessarily ending their functioning with the expected result) algorithms can be encoded as a list of instructions for a Turing machine. For  example, a basic Turing machine can be built to perform logical negation of the input propositional letter. The alphabet may consist of all 26 Latin letters, a blank symbol and a tilde. Now, the machine table instructions need to specify the following operations: if the head scanner is at the tilde, erase the tilde (this effectively realizes the double negation rule); if the head scanner is at the letter and the state of the machine is not “1”, move the head left and change the state of the machine to 1; if the state is “1” and the head is at the blank symbol, write the tilde (note: This list of instructions is vastly simplified for presentation purposes. In reality, it would be necessary to rewrite symbols on the tape when inserting the tilde and decide when to stop operation. B—ased on the current list, it would simply cycle infinitely). Writing Turing machine programs is actually rather time-consuming and useful only for purely theoretical purposes, but all other digital effective computational formalisms are essentially similar in requiring  (1) a finite number of different symbols in what corresponds to a Turing machine alphabet (digitality); (2) that there are a finite number of steps from the beginning to the end of operation (effectiveness). (Correspondingly, one can introduce hypercomputation by positing an infinite number of symbols in the alphabet, infinite number of states or steps in the operation, or by introducing randomness in the execution of operations.) Note that *digitality*is not equivalent to binary code, it is just technologically easier to produce physical systems responsive to two states rather than ten. Early computers operated, for example, on decimal code, rather than binary code (Von Neumann 1958).

There is a particularly important variant of the Turing machine, which played a seminal role in justifying the CTM. This is the universal Turing machine. A Turing machine is a formally defined, mathematical entity. Hence, it has a unique description, which can identify a given TM. Since we can encode these descriptions on the tape of another TM, they can be operated upon, and one can make these operations conform to the definition of the first TM. This way, a TM that has the encoding of any other TM on its input tape will act accordingly, and will faithfully simulate the other TM. This machine  is then called*universal*. The notion of universality is very important in the mathematical theory of computability, as the universal TM is hypothesized to be able to compute all effectively computable mathematical functions. In addition, the idea of using a description of a TM to determine the functioning of another TM gave rise to the idea of programmable computers. At the same time, flexibility is supposed to be the hallmark of general intelligence, and many theorists supposed that this flexibility can be explained with universality (Newell 1980). This gave the universal TM a special role in the CTM; one that motivated an analogy between the mind and the computer: both were supposed to solve problems whose nature cannot be *exactly*predicted (Apter 1970).

These points notwithstanding, the analogy between the universal TM and the mind is not necessary to prove classical CTM true. For example, it may turn out that human memory is essentially much more bounded than the tape of the TM. In addition, the significance of the TM in modeling cognition is not obvious: the universal TM was never used directly to write computational models of cognitive tasks, and its role may be seen as merely instrumental in analyzing the computational complexity of algorithms posited to explain these tasks. Some theorists question whether anything at all hinges upon the notion of equivalence between the mind’s information-processing capabilities and the Turing machine (Sloman 1996) ——the CTM may leave the question whether all physical computation is Turing-equivalent open, or it might even embrace hypercomputation.

The first digital model of the mind was (probably) presented by Warren McCulloch and Walter Pitts (1943), who suggested that the brain’s neuron operation essentially corresponds to logical connectives (in other words, neurons were equated with what later was called ‘logical gates’ —the basic building blocks of contemporary digital integrated circuits). In philosophy, the first avowal of CTM is usually linked with Hilary Putnam (1960), even if the latter paper does not explicitly assert that the mind is equivalent to a Turing machine but rather uses the concept to defend his functionalism. The classical CTM also became influential in early cognitive science (Miller, Galanter, and Pribram 1967).

In 1975, Jerry Fodor linked CTM with LOTH. He argued that cognitive representations are tokens of the Language of Thought and that the mind is a digital computer that operates on these tokens. Fodor’s forceful defense of LOTH and CTM as inextricably linked prompted many cognitive scientists and philosophers to equate LOTH and CTM. In Fodor’s version, CTM furnishes psychology with the proper means for dealing with the question of how thought, framed in terms of propositional attitudes, is possible. Propositional attitudes are understood as relations of the cognitive agent to the tokens in its LOT, and the operations on these tokens are syntactic, or computational. In other words, the symbols of LOT are transformed by computational rules, which are usually supposed to be inferential. For this reason, classical CTM is also dubbed*symbolic CTM*, and the existence of symbol transformation rules is supposed to be a feature of this approach. However, the very notion of the symbol is used differently by various authors: some mean entities equivalent to symbols on the tape of the TM, some think of physically distinguishable states, as in Newell’s physical symbol hypothesis (Newell’s symbols, roughly speaking, point to the values of some variables), whereas others frame them as tokens in LOT. For this reason, major confusion over the notion of symbol is prevalent in current debate (Steels 2008).

The most compelling case for classical CTM can be made by showing its aptitude for dealing with abstract thinking, rational reasoning, and language processing. For example, Fodor argued that productivity of language (the capacity to produce indefinitely many different sentences) can be explained only with compositionality, and compositionality is a feature of rich symbol systems, similar to natural language. (Another argument is related to systematicity; see (Aizawa 2003).) Classical systems, such as production systems, excel in simulating human performance in logical and mathematical domains. Production systems contain production rules, which are, roughly speaking, rules of the form “if a condition X is satisfied, do Y”. Usually there are thousands of concurrently active rules in production systems (for more information on production systems, see (Newell 1990; Anderson 1983).)

In his later writings, however, Fodor (2001) argued that only peripheral (that is, mostly perceptual and modular) processes are computational, in contradistinction to central cognitive processes, which, owing to their holism, cannot be explained computationally (or in any other way, really). This pessimism about classical CTM seems to contrast with the successes of the classical approach in its traditional domains.

Classical CTM is silent about the neural realization of symbol systems, and for this reason it has been criticized by connectionists as biologically implausible. For example, Miller et al. (1967) supposed that there is a specific cognitive level which is best described as corresponding to reasoning and thinking, rather than to any lower-level neural processing. Similar claims have been framed in terms of an analogy between the software/hardware distinction and the mind/brain distinction. Critics stress that the analogy is relatively weak, and neurally quite implausible. In addition, perceptual and motor functioning does not seem to fit the symbolic paradigm of cognitive science.

### b. Connectionism

In contrast to classical CTM, [connectionism](../connect/) is usually presented as a more biologically plausible variant of computation. Although some