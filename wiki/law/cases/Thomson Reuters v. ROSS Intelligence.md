---
title: "Thomson Reuters v. ROSS Intelligence"
type: "legal-case"
category: "litigation"
court: "U.S. District Court for the District of Delaware"
judge: "Stephanos Bibas (3rd Cir. sitting by designation)"
filing_date: "2020-05-06"
decision_date: "2023-09-25"
plaintiff: "Thomson Reuters Enterprise Centre GmbH & West Publishing Corp."
defendant: "ROSS Intelligence Inc."
statutes:
  - "17 U.S.C. § 106 (Exclusive Rights in Copyrighted Works)"
  - "17 U.S.C. § 107 (Fair Use)"
tags:
  - ai-copyright
  - fair-use
  - legal-precedent
  - summary-judgment
  - market-substitution
  - transformative-use
aliases:
  - Thomson Reuters v. ROSS Intelligence
  - ROSS Intelligence
  - Thomson Reuters v. ROSS
---

# Thomson Reuters v. ROSS Intelligence

**Court:** U.S. District Court for the District of Delaware  
**Presiding Judge:** Circuit Judge Stephanos Bibas (sitting by designation)  
**Parties:** Thomson Reuters Enterprise Centre GmbH & West Publishing Corp. (Plaintiffs) v. ROSS Intelligence Inc. (Defendant)  
**Key Rulings:** Decision on Motions for Summary Judgment (Sept 2023); Interlocutory Appeal to the Third Circuit (2024–2025)  
**Core Doctrinal Holding:** **Fair use defense rejected on summary judgment.** Using proprietary, copyrighted expressive materials (Westlaw legal headnotes) to train an AI model designed as a direct commercial market substitute is **not transformative** under 17 U.S.C. § 107(1) and threatens market harm under § 107(4).

---

## 📌 Case Overview & Strategic Significance

*Thomson Reuters v. ROSS Intelligence* is the **first major federal judicial decision rejecting an artificial intelligence company's fair use defense**. While frontier AI developers frequently argue that machine learning ingestion is categorically protected as transformative "intermediate copying" under the *Authors Guild v. Google* (Google Books) precedent, Judge Bibas established a critical boundary: **the Direct Competitor Exception**.

When copyrighted expression is ingested to train an artificial intelligence system designed to serve the identical functional purpose and compete in the exact same commercial market as the original work, the training cannot qualify as transformative fair use.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             THOMSON REUTERS v. ROSS: THE FOUR-FACTOR FAIR USE BREAKDOWN                │
├────────────────────┬───────────────────────────────────────────────────────────────────┤
│ FAIR USE FACTOR    │ JUDICIAL HOLDING & REASONING (Judge Bibas)                        │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 1. Purpose &       │ • NOT TRANSFORMATIVE. ROSS did not analyze headnotes for research │
│    Character       │   or linguistic patterns; it trained an AI to return answers to   │
│    (§ 107(1))      │   legal questions—the identical commercial function of Westlaw.   │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 2. Nature of Work  │ • MIXED. Judicial opinions are in the public domain, but Westlaw’s│
│    (§ 107(2))      │   attorney-authored headnotes and Key Number classifications are   │
│                    │   protected original expressive compilations.                     │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 3. Amount &        │ • EXTENSIVE. ROSS ingested thousands of Westlaw headnotes via a   │
│    Substantiality  │   third-party intermediary (Legal Ease) to generate QA pairs.     │
│    (§ 107(3))      │                                                                   │
├────────────────────┼───────────────────────────────────────────────────────────────────┤
│ 4. Market Effect   │ • FATAL MARKET HARM. The resulting AI product was explicitly      │
│    (§ 107(4))      │   marketed to replace Westlaw subscriptions, directly eroding the │
│                    │   primary licensing and subscription market of the copyright owner│
└────────────────────┴───────────────────────────────────────────────────────────────────┘
```

---

## 🔍 Detailed Analysis of the Decision

### 1. The Transformation Boundary (Input vs. Output Function)
ROSS argued that training its natural language search engine on Westlaw headnotes was transformative because the end product was a search engine rather than a casebook. 

Judge Bibas rejected this abstraction:
- In *Google Books*, the search engine displayed non-consumptive "snippets" to help users locate books they would then purchase; it did not replace the book itself.
- In contrast, ROSS used the expressive synthesis inside West's headnotes to train an AI system to synthesize legal propositions. The **functional purpose of the input and the functional purpose of the output were identical**: enabling legal practitioners to find answers to legal questions without reading full opinions.

### 2. The Danger of Intermediate Copying Precedents
Technology companies frequently rely on *Sega v. Accolade* and *Sony v. Connectix*, where intermediate copying of software object code was held to be fair use to achieve interoperability. Judge Bibas clarified that intermediate copying is only excused when necessary to access unprotected functional elements (ideas, facts). Where the AI training extracts the **very expressive value** that the human author created (the headnote summaries), the copying is infringing.

### 3. Commercial Impact & Bankruptcy
Faced with the rejection of its fair use defense and impending trial damages, ROSS Intelligence ceased commercial operations, underscoring that the loss of fair use is an existential commercial threat to specialized AI startups.

---

## ⚖️ Doctrinal Precedent Established

1. **The Competitor Rule**: An AI system trained on proprietary corpus $X$ to compete directly with $X$ in market $Y$ cannot claim transformative fair use.
2. **Rejection of Computational Metaphor**: The court declined to treat machine training as akin to a "human student learning the law." The training was evaluated strictly as commercial data extraction and derivative engineering.

---

## 🔗 Related Dossiers & Vault Nodes

- **Legal Dashboard**: [[AI Law and Litigation Dashboard]]
- **Parallel Decisions**: [[Kadrey v. Meta Platforms]], [[Bartz v. Anthropic]]
- **Concepts**: [[The Epistemology of Evasion and AI Legal Strategy]], [[The Sincerity Trap and the Sanctified Bottom Line]]
