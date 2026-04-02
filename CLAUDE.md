5. Question Data Format

Suggested JSON structure:

[
  {
    "id": "d1-q1",
    "domain": "Detection",
    "question": "Which AWS service is best suited to detect suspicious activity and potential threats in AWS accounts and workloads?",
    "choices": [
      "Amazon GuardDuty",
      "AWS Artifact",
      "AWS Organizations",
      "Amazon Route 53"
    ],
    "answer": "Amazon GuardDuty",
    "explanation": "Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts, workloads, and data sources for malicious or unauthorized behavior."
  }
]
6. Functional Requirements
Reviewer
user can browse all six domains
user can open a specific domain
user can read summarized domain topics
user can move between domains smoothly
Quiz
user can choose a domain quiz
user can choose a mixed quiz
user can answer all questions
user can submit the quiz
app computes total score
app shows correct and incorrect answers
app shows explanation for each question
Results
app displays:
total score
total items
percentage
domain category
app allows quiz retake
app allows review of mistakes
7. Non-Functional Requirements
fast loading
simple UI
readable typography
responsive on desktop and mobile
maintainable content structure
easy to update with Git commits
no backend dependency for MVP
8. Tech Stack
Next.js
TypeScript
Tailwind CSS
shadcn/ui or reusable custom UI components
local JSON / TS content files
Vercel for deployment
Git/GitHub for version control
9. Git/GitHub Workflow

Recommended Git workflow:

Branches
main → production-ready branch
dev → active development branch
feature branches:
feature/home-page
feature/reviewer-page
feature/quiz-mode
feature/results-page
feature/dark-mode
Example commits
init nextjs project
setup app layout and tailwind
add home page and domain cards
add reviewer content structure
add quiz question rendering
add score calculation logic
add results page
add domain filters and navigation
deploy app to vercel
10. MVP Definition

The first version should include only the essentials:

Home page
Reviewer page
Quiz page
Results page
six SCS-C03 domains
static reviewer content
static quiz data
score calculation
responsive UI

This is enough for a fully usable first release.

11. Future Improvements

Possible version 2 features:

flashcard mode
mock exam mode with timer
save progress in localStorage
bookmarks / favorite topics
weak-area tracking
domain analytics chart
explanation-first learning mode
search bar for services and topics
question difficulty tags
streak tracking
spaced repetition mode

Possible version 3 features:

authentication
cloud database
admin content editor
multiple users
leaderboard
shared reviewer links
12. Study Alignment Notes

This project should stay aligned to the current AWS SCS-C03 guide, not random unstructured notes. The app content must prioritize domain-based review according to the official exam outline and weightings published by AWS. AWS also describes the certification as validating expertise in creating and implementing security solutions in AWS, including data protection mechanisms, encryption approaches, and secure AWS security controls.

To keep the app aligned:

organize content by the six official domains
prioritize high-weight domains appropriately
keep explanations scenario-based
focus on AWS services commonly tied to each domain
avoid irrelevant non-exam filler topics
treat the app as a reviewer and practice tool, not an exam dump
13. Development Goal

Create a polished and practical AWS SCS-C03 Reviewer & Quiz Web App that is:

easy to study with
easy to maintain
easy to deploy
clearly aligned with the official AWS exam structure
useful as both a personal study tool and a frontend portfolio project
14. Disclaimer

This project is an unofficial study tool created for review and practice purposes only. It is not affiliated with, endorsed by, or published by AWS. Exam objectives, domains, and weightings should always be checked against the latest official AWS exam guide.


Pwede rin kitang gawan agad ng **folder structure + starter data schema + prompt for Cursor** na tugma dito.
::contentReference[oaicite:4]{index=4}