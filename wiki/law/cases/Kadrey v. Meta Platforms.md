---
title: "Kadrey v. Meta Platforms"
type: "legal-case"
category: "litigation"
court: "U.S. District Court for the Northern District of California"
judge: "Vince Chhabria"
filing_date: "2023-07-07"
decision_date: "2025-06-23"
plaintiff: "Richard Kadrey, Sarah Silverman, Christopher Golden et al."
defendant: "Meta Platforms, Inc."
statutes:
  - "17 U.S.C. § 106 (Exclusive Rights in Copyrighted Works)"
  - "17 U.S.C. § 107 (Fair Use)"
tags:
  - ai-copyright
  - fair-use
  - legal-precedent
  - summary-judgment
  - llama
  - shadow-libraries
  - market-harm
aliases:
  - Kadrey v. Meta Platforms
  - Kadrey v. Meta
  - Silverman v. Meta
---

# Kadrey v. Meta Platforms

**Court:** U.S. District Court for the Northern District of California (San Francisco)  
**Presiding Judge:** District Judge Vince Chhabria  
**Parties:** Richard Kadrey, Sarah Silverman, Christopher Golden et al. (Plaintiffs) v. Meta Platforms, Inc. (Defendant)  
**Key Ruling:** Order Granting Defendant's Motion for Summary Judgment on Fair Use (June 2025)  
**Core Doctrinal Holding:** **Fair use defense granted on an evidentiary record.** Training a general-purpose Large Language Model ([[Meta|Llama]]) on copyrighted books scraped from unauthorized "shadow libraries" constitutes transformative fair use under 17 U.S.C. § 107 where plaintiffs **fail to produce concrete economic evidence of market substitution or direct expressive regurgitation**. However, the court issued a stern judicial warning that AI fair use is narrow, evidentiary-dependent, and readily vulnerable under stronger market-harm showings.

---

## 📌 Case Overview & Strategic Significance

*Kadrey v. Meta Platforms* (consolidated with *Silverman v. Meta*) is one of the foundational test cases evaluating whether Big Tech's ingestion of entire literary catalogs from unauthorized "shadow libraries" (e.g., Books3, Bibliotik) to pretrain open-weights foundation models constitutes copyright infringement.

In a landmark June 2025 decision, Judge Vince Chhabria granted summary judgment to Meta on its affirmative defense of **fair use**, finding that pretraining Llama was highly transformative. Crucially, however, the opinion was **not a sweeping endorsement of AI scraping**, but a sharp critique of the plaintiffs' evidentiary failure. Judge Chhabria emphasized that in most future cases with proper economic evidence of licensing markets and expressive displacement, AI developers could face severe liability.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               KADREY v. META PLATFORMS: FAIR USE DOCTRINAL SPECTRUM                    │
├────────────────────┬───────────────────────────────────────────────────────────────────┤
│ FAIR USE FACTOR    │ JUDICIAL HOLDING & REASONING (Judge Chhabria)                     │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 1. Purpose &       │ • HIGHLY TRANSFORMATIVE. Llama was not trained to re-publish      │
│    Character       │   books, but to extract statistical linguistic structures to      │
│    (§ 107(1))      │   generate novel text across thousands of unrelated domains.      │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 2. Nature of Work  │ • FAVORS AUTHORS. Creative fiction and expressive memoirs sit at  │
│    (§ 107(2))      │   the very core of traditional copyright protection.          │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 3. Amount &        │ • EXTENSIVE BUT NECESSARY. Copying entire books was substantial,  │
│    Substantiality  │   but permissible because full-text ingestion was functionally    │
│    (§ 107(3))      │   required for statistical natural-language learning.             │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 4. Market Effect   │ • EVIDENTIARY FAILURE. Plaintiffs presented no market studies or  │
│    (§ 107(4))      │   empirical evidence proving that Llama outputs substituted for   │
│                    │   book sales or diluted their specific literary commercial value. │
└────────────────────┴───────────────────────────────────────────────────────────────────┘
```

---

## 🔍 Detailed Breakdown of the Holding

### 1. The Evidentiary Gap: The Absence of Output Substitution
Judge Chhabria’s ruling turned decisively on the **fourth factor (market impact)**:
- The author plaintiffs failed to demonstrate that Llama outputs could act as a market substitute for their novels. The model did not regurgitate their prose verbatim, nor did it generate derivative sequels that displaced sales of their books.
- Relying on *Sony Corp. v. Universal City Studios* and *Campbell v. Acuff-Rose Music*, the court held that without demonstrable market substitution for the copyrighted works themselves, the transformative nature of LLM statistical training tipped the balance to fair use.

### 2. The Chhabria Warning: The Fragility of the AI Defense
While Silicon Valley celebrated the ruling, Judge Chhabria included an explicit, stern admonition directly limiting the scope of the precedent:
> *"This ruling should not be read as a declaration that AI training is categorically fair use. In most cases where copyright owners present robust economic evidence that AI training displaces established licensing markets, or where models generate competitive synthetic substitutes within the author’s primary genre, AI developers will easily lose the fair use defense."*

The court emphasized that Meta prevailed not because training on pirated shadow libraries is inherently legal, but because **these specific plaintiffs failed to conduct the necessary economic and forensic discovery** to prove market harm.

---

## ⚖️ Doctrinal Comparison: *Kadrey* vs. *Thomson Reuters*

The divergence between *Kadrey* and *Thomson Reuters v. ROSS* illustrates the emerging fault lines of AI copyright law:
- In *Thomson Reuters*, the AI was trained to compete directly against the ingested corpus in the legal research market (Fair Use **Denied**).
- In *Kadrey*, the AI (Llama) was a general-purpose model where the books were an infinitesimal fraction of a 15-trillion-token corpus, and the model was not commercialized as a substitute for reading those specific novels (Fair Use **Granted** on that record).

---

## 🔗 Related Dossiers & Vault Nodes

- **Legal Dashboard**: [[AI Law and Litigation Dashboard]]
- **Parallel Decisions**: [[Thomson Reuters v. ROSS Intelligence]], [[Bartz v. Anthropic]]
- **Entities**: [[Meta]]
- **Concepts**: [[The Epistemology of Evasion and AI Legal Strategy]], [[The Sincerity Trap and the Sanctified Bottom Line]]
