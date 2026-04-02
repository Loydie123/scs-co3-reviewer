# AWS SCS-C03 Reviewer & Quiz Web App

A frontend-only Next.js web app designed to help a learner review and test their knowledge for the **AWS Certified Security - Specialty (SCS-C03)** exam. The app focuses on the official SCS-C03 content domains so the reviewer and quiz flow stay aligned with the exam scope. AWS says the current SCS-C03 exam is organized into six domains with these weightings: Detection (16%), Incident Response (14%), Infrastructure Security (18%), Identity and Access Management (20%), Data Protection (18%), and Security Foundations and Governance (14%). The exam itself is 170 minutes long and contains 65 questions in multiple-choice and multiple-response format. :contentReference[oaicite:0]{index=0}

## Objective

Build a simple, clean, and deployable study web app that can be used as:

- a **reviewer** for key SCS-C03 concepts
- a **practice test** platform for topic-based quizzes
- a **personal study tool** that can be updated easily through Git/GitHub
- a **portfolio-worthy frontend project** using real structured content

## Project Type

This project will be:

- **Frontend only**
- built with **Next.js**
- using **local static data** for lessons, flashcards, and quiz questions
- deployable on **Vercel**
- version-controlled with **Git/GitHub**

No backend is needed for the first version because the main goal is to create a focused reviewer and quiz experience with fast development and easy content editing.

## Target Users

Primary user:

- one learner preparing for the AWS SCS-C03 exam

Possible future users:

- classmates
- friends reviewing for AWS certifications
- other learners who want a simple topic-based reviewer

## Core Concept

The app should have two main study modes:

1. **Reviewer Mode**  
   The user reads summarized notes, key ideas, common AWS services, and exam-focused explanations per domain.

2. **Quiz Mode**  
   The user answers practice questions by domain, gets immediate or end-of-test feedback, sees the score, and reviews explanations.

## Scope

## 1. Pages

### Home Page
Purpose:
- landing page of the app
- quick overview of the certification
- entry point to reviewer and quiz modes

Sections:
- app title
- short description
- SCS-C03 exam overview
- domain cards
- buttons for:
  - Start Reviewing
  - Take Quiz

### Reviewer Page
Purpose:
- show study materials by SCS-C03 domain

Content per domain:
- domain title
- official domain weight
- summarized notes
- important AWS services
- key concepts
- common exam scenarios
- best practices
- quick tips / memory aids

### Quiz Page
Purpose:
- allow the user to answer practice questions

Quiz capabilities:
- multiple-choice questions
- one question at a time
- next / previous navigation
- selected answer state
- submit quiz
- score calculation
- show correct answer
- show explanation per item

### Results Page
Purpose:
- show quiz outcome clearly

Content:
- score
- total correct answers
- percentage
- domain performance summary
- list of incorrect answers
- explanations / review notes
- retake quiz button

### Optional About Page
Purpose:
- explain what the app is
- state that questions are for study practice only
- mention that this is not an official AWS exam product

---

## 2. SCS-C03 Domain Coverage

The reviewer and quiz content must be organized around the official SCS-C03 domains. AWS’s current exam guide lists these six domains and percentages. :contentReference[oaicite:1]{index=1}

### Domain 1 — Detection (16%)
Suggested reviewer coverage:
- monitoring and alerting strategies
- CloudTrail
- CloudWatch
- GuardDuty
- Security Hub
- Macie
- Security Lake
- log aggregation and analysis
- detection of anomalous activity

### Domain 2 — Incident Response (14%)
Suggested reviewer coverage:
- incident triage
- containment and remediation
- forensic data sources
- automation for response
- EventBridge
- Lambda
- Systems Manager
- Security Hub workflows

### Domain 3 — Infrastructure Security (18%)
Suggested reviewer coverage:
- VPC security
- security groups vs NACLs
- AWS WAF
- Shield
- Firewall Manager
- Route 53 security features
- edge protections
- network segmentation
- private connectivity concepts

### Domain 4 — Identity and Access Management (20%)
Suggested reviewer coverage:
- IAM policies
- roles and trust policies
- permission boundaries
- SCPs
- federation
- identity providers
- least privilege
- temporary credentials
- access analysis

### Domain 5 — Data Protection (18%)
Suggested reviewer coverage:
- KMS
- envelope encryption
- key policies
- S3 encryption
- EBS encryption
- RDS encryption
- secrets handling
- certificate management
- data classification and protection patterns

### Domain 6 — Security Foundations and Governance (14%)
Suggested reviewer coverage:
- multi-account strategy
- AWS Organizations
- Control Tower concepts
- Config
- auditing and compliance
- governance guardrails
- risk reduction
- security baselines
- operational governance

---

## 3. Main Features

### Reviewer Features
- domain-based navigation
- collapsible topic sections
- key concept summaries
- AWS service highlights
- exam tips per domain
- “important to remember” notes
- simple flashcard-style sections
- study progress indicator (frontend only)

### Quiz Features
- domain-based quiz selection
- mixed mock exam mode
- multiple-choice format
- randomized question order
- answer explanation after submission
- score summary
- review wrong answers
- retake option
- optional timed mock exam mode

### UI Features
- responsive layout
- mobile-friendly design
- clean card-based interface
- progress bar
- domain badges
- light/dark mode
- sticky top navigation

---

## 4. Content Structure

All study content will be static and stored locally inside the project.

Suggested structure:

```bash
src/
  app/
    page.tsx
    reviewer/
      page.tsx
    quiz/
      page.tsx
    results/
      page.tsx
    about/
      page.tsx

  components/
    navbar.tsx
    domain-card.tsx
    topic-section.tsx
    question-card.tsx
    quiz-progress.tsx
    result-summary.tsx
    score-breakdown.tsx

  data/
    domains.ts
    reviewer/
      detection.ts
      incident-response.ts
      infrastructure-security.ts
      iam.ts
      data-protection.ts
      governance.ts
    quizzes/
      detection.json
      incident-response.json
      infrastructure-security.json
      iam.json
      data-protection.json
      governance.json
      mixed.json

  lib/
    quiz.ts
    scoring.ts
    helpers.ts

  types/
    domain.ts
    question.ts