---
title: "IssueOps: Continuous AI for GitHub Issues"
collection: talks
type: "Presentation"
order: 2
permalink: /talks/issueops
venue: "DS 252: Introduction to Cloud Computing, IISc"
date: 2025-11-01
monogram: "IO"
summary: "A **fully serverless** GitHub App that triages issues end-to-end on AWS — spam filtering, classification, and **availability-aware assignment** via Bedrock models — at roughly **$2.5–3 per 1,000 issues**."
banner_media: /images/portfolio/issueops.webp
tech: ["AWS Lambda", "Bedrock", "DynamoDB", "Multi-Agent", "Serverless"]
meta: "DS 252: Cloud Computing, IISc · serverless multi-agent · ~$2.5–3 / 1k issues"
links:
  slides: "/files/issueops-presentation/issueops-main-presentation.pdf"
  code: "https://github.com/Cloud-Project-VaaS/VaaS"
  app: "https://github.com/apps/ds252-issueops"
---

Issue triage drains open-source maintainers: issues sit uncategorized for days, and assignment
rarely accounts for who is available, let alone overloaded. IssueOps automates this end-to-end as
a fully serverless GitHub App on AWS. Hourly Lambda pipelines fetch new issues, filter spam,
classify type, priority, and component, and route each one through a reasoning agent that weighs a
developer's expertise, working hours, and current workload before assigning it. The most
instructive failure came early: a fine-tuned BERT classifier reached over 85% offline accuracy yet
proved brittle on real repository noise, pushing us to foundation models on AWS Bedrock. I built
the pipeline's intake agent. The deployed app was peer-tested on live repositories and runs at
roughly $2.5–3 per thousand issues.
