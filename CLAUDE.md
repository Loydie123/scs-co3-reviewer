You are improving an existing Next.js frontend-only app.

The app is NOT just an exam reviewer.

It is a learning + practice platform for AWS SCS-C03.

IMPORTANT:
- Follow CLAUDE.md
- No backend
- No overengineering
- Use local data only
- Keep MVP simple

---

## CORE OBJECTIVE

Transform the app into a complete learning system:

1. Review page = understanding concepts deeply
2. Quiz page = applying knowledge like real AWS exam

---

## TASK 1 — Upgrade Review Page (LEARNING MODE)

The review page should NOT feel like plain notes.

Each topic must include:

- Concept explanation (simple and clear)
- When to use this service
- When NOT to use this
- Common real-world scenario
- Comparison with similar AWS services
- Best practices
- Key exam tips

---

### Example:

Instead of:
"GuardDuty is a threat detection service"

Rewrite as:

Concept:
GuardDuty detects suspicious activity in AWS accounts using logs like CloudTrail.

When to use:
Use GuardDuty when you need continuous threat detection across accounts.

When NOT to use:
Do not rely on GuardDuty alone for compliance reporting.

Scenario:
A company wants to detect anomalous API calls across multiple AWS accounts...

Comparison:
GuardDuty vs Security Hub vs Detective

Best practice:
Enable GuardDuty in all regions and aggregate findings.

---

## TASK 2 — Add Comparison Sections (VERY IMPORTANT)

Add comparisons inside reviewer:

- Security Groups vs NACL
- IAM Policy vs SCP
- KMS vs CloudHSM
- GuardDuty vs Security Hub vs Detective
- CloudTrail vs CloudWatch Logs
- SSE-S3 vs SSE-KMS vs SSE-C

---

## TASK 3 — Upgrade Quiz (EXAM MODE)

Convert all questions into scenario-based.

Each question:
- 2–4 sentences
- real-world AWS scenario
- includes constraints (cost, security, compliance)
- asks for BEST answer

---

## TASK 4 — Improve Question Format

{
  id: string,
  domain: string,
  difficulty: "easy" | "medium" | "hard",
  question: string,
  choices: string[],
  answer: string,
  explanation: string,
  why_not: {
    A: string,
    B: string,
    C: string,
    D: string
  }
}

---

## TASK 5 — Add Difficulty Levels

- Easy → concept understanding
- Medium → applied logic
- Hard → real exam scenario

---

## TASK 6 — Improve Quiz Logic

- randomize questions
- randomize answers
- track incorrect answers
- review wrong answers mode
- score per domain

---

## TASK 7 — Improve Results Page

- score
- percentage
- domain breakdown
- weak areas
- incorrect answers with explanation

---

## TASK 8 — Coverage (CRITICAL)

Ensure content includes:

- IAM policy evaluation
- STS / temporary credentials
- KMS and encryption types
- S3 encryption differences
- CloudTrail vs CloudWatch
- GuardDuty / Security Hub / Detective
- Organizations / SCPs
- VPC endpoints
- WAF / Shield

---

## TASK 9 — Architecture

- keep components modular
- separate data from UI
- clean structure
- reusable components

---

## TASK 10 — DO NOT DO

- no backend
- no auth
- no database
- no overengineering

---

## FINAL RULE

Review page = understanding  
Quiz page = decision-making

Do not mix them.