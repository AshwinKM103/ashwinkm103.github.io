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
banner_media: /images/portfolio/issueops.png
tech: ["AWS Lambda", "Bedrock", "DynamoDB", "Multi-Agent", "Serverless"]
meta: "DS 252: Cloud Computing, IISc · serverless multi-agent · ~$2.5–3 / 1k issues"
links:
  slides: "/files/issueops-presentation/issueops-main-presentation.pdf"
  code: "https://github.com/Cloud-Project-VaaS/VaaS"
  app: "https://github.com/apps/ds252-issueops"
---

Issue triage quietly drains open-source maintainers: issues sit uncategorized for days, spam
accumulates, and assignment rarely accounts for who is available, let alone who is overloaded.
IssueOps is a GitHub App that automates this end-to-end on a fully serverless AWS stack. Hourly
Lambda pipelines fetch new issues, filter spam, enrich metadata, classify type, priority, and
component, and route each issue through a reasoning agent that weighs expertise inferred from
commit history, working hours, and current workload before assigning a developer — with DynamoDB
as the single source of truth and a Streamlit dashboard for oversight. The most instructive
failure came early: a fine-tuned BERT classifier reached over 85% offline accuracy yet proved
brittle on real repository noise, pushing us to foundation models served through AWS Bedrock —
Mistral 7B for classification, Llama 3 for spam filtering, and DeepSeek V3 for the final
assignment reasoning. I built the intake agent at the core of this pipeline. The deployed app was
peer-tested on live repositories and runs at roughly $2.5–3 per thousand issues. Built with
teammates for DS 252: Introduction to Cloud Computing at IISc.
