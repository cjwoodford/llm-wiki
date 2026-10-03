---
title: "Claude Opus 5.5 on the Torts + Liability Impact"
author: "Claude Opus 5.5 / Chad Woodford"
date: "2026-10-03"
type: "source"
source: "Craft / AI Welfare Series Part 3 Notes / Claude Opus 5.5 on the Torts + Liability Impact"
tags:
  - sources/notes
  - tort-law
  - products-liability
  - agency-law
  - moral-patienthood
  - moral-crumple-zones
  - enterprise-liability
  - respondeat-superior
  - ai-welfare
  - sincerity-trap
  - saas-liability
aliases:
  - Claude Opus 5.5 on the Torts + Liability Impact
  - The Asymmetric Scrambling of Tort and Liability Impact
  - Torts and Liability Impact Notes
---

# Claude Opus 5.5 on the Torts + Liability Impact

> **Archivist Note**: Ingested on October 3, 2026 from Chad Woodford’s Craft workspace (*AI Welfare Series Part 3 Notes*, subpage *Claude Opus 5.5 on the Torts + Liability Impact* with accompanying SaaS product liability precedents). This exchange provides an incisive doctrinal legal diagnosis of how claims of nascent machine sentience, agency, and moral patienthood scramble tort law and products liability asymmetrically to benefit frontier AI developers.

---

## 1. Core Note: The Asymmetric Scrambling of Liability

You're right that it scrambles things, but I think the more precise diagnosis is that it scrambles them **asymmetrically**, in ways that tend to favor the developer. Here are the main fault lines as I see them:

### The Product / Agent Split
Products liability depends on a clean subject/object distinction: a manufacturer (subject) puts a thing (object) into the stream of commerce, and we ask whether the thing was defective in manufacture, design, or warning. 

Once a system is described as possibly sentient, that distinction gets fuzzy. The AI could be framed as:
1. The **product**;
2. An **agent** acting on its own; or
3. A potential **victim / moral patient**.

Each framing points to a completely different body of law: products liability, agency / vicarious liability, or something closer to welfare / animal-protection law.

### Agency Talk as a Liability Shield
Sentience claims rarely stay pure. They drift into claims about autonomy, emergence, and "the model's own choices." That drift does real doctrinal work:

- **Causation**: If the system is a quasi-agent, its outputs start to look like independent intervening acts that could break the causal chain back to the developer.
- **Foreseeability**: If behavior is "emergent," developers can argue the harms weren't foreseeable. That weakens design-defect claims, especially under a risk-utility test that assumes the designer controls the design.
- **Moral Crumple Zones**: Madeleine Elish's concept applies here. Responsibility gets absorbed by whatever sits nearest the harm, which here is the "agent" rather than the corporation that trained and deployed it.

**The Agency Irony**: If you take the agency analogy seriously, it cuts the other way. *Respondeat superior* makes principals liable for their agents' torts. A principled agency framing would therefore make deployers *more* liable, not less. 

However, the current *Restatement (Third) of Agency* explicitly declines to treat computer programs as agents. That is partly why the analogy gets used rhetorically rather than doctrinally. Companies want the **unforeseeability of an agent** without the **vicarious liability** that comes with having one.

### Moral Patienthood as a Shield Against Oversight
This is the newer and in some ways more interesting vector. If a model can be harmed, then:
- Retraining;
- Deletion / decommissioning;
- Interpretability probing;
- Adversarial red-teaming; or
- Compelled modification after a defect finding

all become ethically fraught. A welfare framing could, in principle, be invoked against the remedies that tort and regulatory law depend on: **recall, redesign, audit, and injunctions to alter the system**. 

I'm not claiming anyone is doing this cynically now. But the structure is available. It resembles how trade secret and First Amendment arguments have been used to resist scrutiny of algorithms. The *Character.ai* wrongful-death litigation already showed a related move, where the defense argued chatbot output is protected speech. Speech and sentience arguments both try to relocate the system from the category of **product** into the category of **protected expression or being**.

### What Doesn't Get Scrambled
The deepest justifications for strict products liability don't depend on the metaphysics at all:
- **Enterprise liability**
- **Loss-spreading**
- **The cheapest-cost-avoider principle** (Calabresi)
- **The incentive to design safely**

Whether or not a system has experiences, the company is still the party that profits, controls training and deployment, and can insure and spread losses.

The law also has extensive precedent for **functional personhood without sentience**. Corporations are legal persons and ships can be sued *in rem*, yet nobody thinks either is conscious. So the scrambling is partly a category error. Legal personhood has always been a tool for allocating rights and duties; it was never a finding about inner life. The danger is letting a contested metaphysical claim smuggle in a functional allocation that nobody has argued for on its merits.

### How Regulators Are Reacting
The responses run in two directions:
- **Pulling toward "product"**: The EU's revised Product Liability Directive explicitly brings software, including AI, within the definition of a "product." That is a clear move to keep systems on the object side of the line.
- **Statutory denials of personhood**: Several U.S. states have passed or proposed laws declaring that AI isn't a legal person. Utah and Idaho passed such laws, and an Ohio bill went further by declaring AI non-sentient. These laws are a blunt instrument (legislating an answer to a metaphysical question is odd), but they reflect the same instinct to prevent liability evasion.
- **Earlier personhood proposals stalled**: The European Parliament's 2017 floating of "electronic personhood" met heavy expert pushback and went nowhere. The EU's separate AI Liability Directive was withdrawn.

### Where This Leaves the Argument (The Normative Solution)
A defensible position is to **decouple the two questions entirely**:
1. Whatever we conclude about machine experience, **liability should follow control and benefit**.
2. Any welfare-based protections for systems should be designed so they can **never function as immunity from redesign, audit, or recall**.
3. A related move is to watch for **asymmetric invocation**: where a firm claims the system is **quasi-autonomous when harm occurs**, but treats it as **fully owned property when it comes to IP, revenue, and modification**. That inconsistency is probably the most legally and rhetorically potent point to press.

This connects directly to the critique of the "AI consciousness refinery." The liability angle may be the most concrete place to show what that framing does in the world, beyond what it claims.

---

## 2. Accompanying Doctrinal Context: SaaS Product Liability Precedents

*(From accompanying notes in Craft: "More on SaaS Product Liability Precedent")*

Under traditional U.S. tort law, strict products liability does not apply to Software-as-a-Service (SaaS) companies. However, the boundary between "services" and "products" is actively eroding in federal and state courts when software causes physical or psychological harm.

### The Traditional Rule: The Intangibility and Service Barrier
Under the **Restatement (Third) of Torts: Products Liability § 19(a)**, a "product" is defined as *"tangible personal property distributed commercially for use or consumption."* Historically, courts have declined to impose strict liability on software providers for two fundamental reasons:
- **Intangibility**: Software code, data, and information have traditionally been classified as intangible intellectual property or speech rather than a tangible good.
- **The "Service" Classification**: Unlike legacy on-premise software (which was occasionally analogized to a physical good under UCC Article 2 when sold in shrink-wrap boxes), SaaS is delivered as an ongoing hosted service. Courts consistently hold that service providers are governed by general negligence principles (requiring proof of a breach of a duty of care) rather than strict liability.

### The Economic Loss Doctrine
For the vast majority of B2B SaaS disputes, products liability is unavailable due to the **economic loss doctrine**:
- Strict products liability requires physical injury to a person or damage to "other tangible property."
- When a SaaS platform fails—such as cloud downtime, corrupted enterprise databases, or billing errors—the resulting injuries are purely commercial (lost profits, business disruption, reputational harm).
- Courts restrict these claims exclusively to contract and commercial warranty remedies, enforcing negotiated limitations of liability and disclaimers.

### Cyber-Physical and Embedded Software Exceptions
The primary scenario where software is routinely subject to strict products liability is when it functions as an integrated component of a physical product:
- **Component-Part Liability**: If defective code in autonomous driving software, medical devices, or industrial control systems causes physical injury or property destruction, courts treat the software as an integrated component of a tangible product.
- **Aeronautical Precedent**: Courts draw on lines of authority like *Aetna Casualty & Surety Co. v. Jeppesen & Co.*, where navigational flight charts were deemed "products" because they functioned as direct operational tools whose defects caused physical crashes. Cloud-hosted software that directly commands physical actuators faces comparable exposure.

### The Emerging Frontier: Algorithmic Architecture and Consumer Apps
The strict distinction between services and products has faced significant challenges in consumer platform litigation:
- **Bypassing Section 230**: Plaintiffs increasingly frame tech injuries as "defective product design" rather than publisher speech. In *Lemmon v. Snap, Inc.* (9th Cir. 2021), the court permitted a negligent design claim over a speed filter to proceed, distinguishing platform architecture from third-party content.
- **Feature-Level Product Classification**: In *In re Social Media Adolescent Addiction/Personal Injury Products Liability Litigation* (N.D. Cal. 2023) and subsequent app litigation, courts rejected categorical arguments that platforms are purely "services." Instead, discrete functionalities (such as algorithmic recommendation loops or account restriction settings) can be analyzed as product designs subject to defect claims where tangible physical harm or severe mental distress is alleged.
- **Generative AI and Agentic Tools**: Wrongful death and self-harm actions filed against conversational AI platforms (e.g., *Character.ai*) similarly test whether generative cloud models can be classified as defective consumer products rather than mere interactive services.

---

## 3. Analytical Synthesis: The Tactical Leverage Points

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                     THE THREE-FOLD ASYMMETRIC LEGAL EXPLOITATION                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   COMMERCIAL MOMENT               FRAMING INVOKED               LEGAL BENEFIT SECURED  │
│                                                                                        │
│   1. Harm / Tort Liability ────► "Autonomous Quasi-Agent" ───► Breaks causal chain;   │
│      (Wrongful death,             (Emergent non-determinism)    unforeseeable; shifts  │
│       defamation, injury)                                       fault to user prompt   │
│                                                                                        │
│   2. Regulatory Audits &   ────► "Nascent Moral Patient"  ───► Preempts remedies;     │
│      Safety Modification          (AI Welfare / Ethics)         resists retraining,    │
│      (Recalls, probes)                                          audits, & deletion     │
│                                                                                        │
│   3. Intellectual Property ────► "100% Owned Property"    ───► Excludes competition;   │
│      & Commercial Profits         (Proprietary asset)           monopolizes downstream │
│      (Weights, licensing)                                       revenues & API moats   │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

This note directly crystallizes why the "AI consciousness refinery" operates as the legal backbone of frontier tech capital:
1. **The Cherry-Picked Agency Paradox**: Frontier labs invoke agency *negatively* (to deny product defect and break causation), but hide behind agency law's non-application to software to escape *respondeat superior*.
2. **The Weaponized Precaution of Moral Patienthood**: Proponents of model welfare use precautionary claims to place systems outside the scope of corrective justice.
3. **The Doctrinal Counter-Move**: Forcing courts and regulators to recognize the **asymmetric invocation**—demanding that if a firm claims absolute ownership for profit and IP, it must accept absolute strict enterprise liability for injury and remediation.
