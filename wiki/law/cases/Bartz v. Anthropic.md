---
title: "Bartz v. Anthropic"
type: "legal-case"
category: "litigation"
court: "U.S. District Court for the Northern District of California"
judge: "William Alsup"
filing_date: "2024-08-19"
decision_date: "2025-06-30"
settlement_date: "2026-07-20"
plaintiff: "Andrea Bartz, Charles Graeber, Kirk Wallace Johnson et al."
defendant: "Anthropic PBC"
statutes:
  - "17 U.S.C. § 106 (Exclusive Rights in Copyrighted Works)"
  - "17 U.S.C. § 107 (Fair Use)"
  - "17 U.S.C. § 504(c) (Statutory Damages)"
tags:
  - ai-copyright
  - fair-use
  - legal-precedent
  - anthropic
  - claude
  - settlement
  - shadow-libraries
  - intermediate-copying
aliases:
  - Bartz v. Anthropic
  - Bartz v. Anthropic PBC
  - Anthropic Copyright Litigation
---

# Bartz v. Anthropic

**Court:** U.S. District Court for the Northern District of California (San Francisco)  
**Presiding Judge:** District Judge William Alsup  
**Parties:** Andrea Bartz, Charles Graeber, Kirk Wallace Johnson et al. (Plaintiffs) v. Anthropic PBC (Defendant)  
**Key Rulings:** Summary Judgment on Transformative Use vs. Storage (June 2025); Final Order Approving **$1.5 Billion Class Settlement** (July 20, 2026)  
**Core Doctrinal Holding:** **Model training is transformative, but maintaining unauthorized digital "shadow libraries" is actionable infringement.** While training neural network weights on copyrighted text is a highly transformative fair use where models do not regurgitate expressive text, downloading and storing vast, permanent internal digital libraries of pirated books creates severe independent copyright liability, forcing the largest copyright infringement settlement in U.S. history ($1.5 billion).

---

## 📌 Case Overview & Strategic Significance

*Bartz v. Anthropic* is the definitive watershed in generative AI copyright litigation. Presided over by Judge William Alsup—renowned for his technical mastery in *Oracle v. Google*—the lawsuit confronted [[Anthropic]]’s ingestion of millions of copyrighted literary works (sourced from pirated shadow libraries like Books3 and Library Genesis) to train its Claude family of frontier models.

Judge Alsup’s June 2025 summary judgment ruling established a razor-sharp doctrinal bifurcation that permanently altered the economics of AI development:
1. **Mathematical Training as Transformative Fair Use**: The act of running text through deep learning algorithms to extract high-dimensional semantic weights without reproducing the underlying text is **transformative fair use**.
2. **Intermediate Shadow Library Storage as Independent Infringement**: Maintaining permanent, central internal digital repositories of pirated books for corporate engineering teams is **not fair use**.

By ruling that Anthropic remained directly liable for massive statutory damages ($150,000 per infringed work under 17 U.S.C. § 504(c)) for maintaining unauthorized shadow copies, Judge Alsup created insurmountable trial exposure. Rather than risk an existential multi-billion-dollar verdict, Anthropic agreed to pay **$1.5 billion in compensation to authors**—formally approved on July 20, 2026 as the largest copyright settlement in American history.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               JUDGE ALSUP'S TWO-TIERED AI COPYRIGHT BIFURCATION                        │
├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤
│ ACTIVITY EVALUATED │ LEGAL CLASSIFICATION        │ DOCTRINAL RATIONALE (Judge Alsup)   │
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ 1. Algorithmic     │ • TRANSFORMATIVE FAIR USE   │ • Weights do not store or copy the  │
│    Model Training  │   (Protected under § 107)   │   text; outputs do not regurgitate  │
│    (Feedforward)   │                             │   or substitute for human books.    │
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ 2. Digital Shadow  │ • ACTIONABLE INFRINGEMENT   │ • Downloading, copying, & hosting   │
│    Library Storage │   (Liable under § 106)      │   pirated corpora inside corporate  │
│    (Corpus copies) │                             │   infrastructure is illegal piracy. │
└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘
```

---

## 🔍 Detailed Analysis of the Holding & Resolution

### 1. Training vs. Ingestion Storage
Anthropic’s defense counsel argued that under *Authors Guild v. Google* (Google Books), intermediate digital copies are completely immunized if the ultimate output is non-infringing.

Judge Alsup decisively dismantled this conflation:
- In *Google Books*, Google partnered with university libraries to scan physical books it legally accessed, creating a secure search index that displayed only tiny snippets.
- Anthropic, by contrast, downloaded illicit torrents of pirated books from criminal shadow libraries and maintained unrestricted, unencrypted corporate servers holding full-text copies.
- Judge Alsup held that while the mathematical transformation of text into token embeddings and attention weights is protected, **a commercial entity cannot cleanse the illegal acquisition and perpetual storage of pirated text simply by pointing to a transformative downstream algorithm**.

### 2. The $1.5 Billion Settlement (July 20, 2026)
Facing imminent jury trial on the storage infringement claims—where statutory damages for tens of thousands of registered books threatened total corporate insolvency—Anthropic agreed to settle:
- **Financial Terms**: $1.5 billion paid into an author compensation fund, establishing an average statutory recovery for registered class members.
- **Mandatory Deletion**: Anthropic agreed to permanently delete all underlying raw text archives of pirated shadow libraries.
- **The Licensing Pivot**: Anthropic agreed that future foundation model training would transition to commercial licensing pools, formal publisher agreements, and legitimate public-domain corpora.

---

## ⚖️ Ideological Context: The Sincerity Trap Exposed

As analyzed in [[The Sincerity Trap and the Sanctified Bottom Line]], *Bartz v. Anthropic* demonstrated the profound dialectic between Anthropic’s corporate ideology and common-law reality:
- In its public statements and internal philosophy, Anthropic defended mass training as an infant digital mind exercising its sacred "right to learn" human literature.
- In the courtroom, however, Judge Alsup stripped away the metaphysics of machine cognition, treating Anthropic strictly as a multi-billion-dollar commercial software enterprise that engaged in wholesale corporate piracy.

---

## 🔗 Related Dossiers & Vault Nodes

- **Legal Dashboard**: [[AI Law and Litigation Dashboard]]
- **Parallel Decisions**: [[Thomson Reuters v. ROSS Intelligence]], [[Kadrey v. Meta Platforms]]
- **Entities**: [[Anthropic]], [[Dario Amodei]], [[Luiza Jarovsky]]
- **Concepts**: [[The Epistemology of Evasion and AI Legal Strategy]], [[The Sincerity Trap and the Sanctified Bottom Line]]
