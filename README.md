# Dynamic Node.js Website on AWS using Terraform & GitHub Actions

## Overview
This project demonstrates hosting a Node.js dynamic website on AWS EC2. The infrastructure is provisioned via Terraform and the CI/CD pipeline is built with GitHub Actions.

## Tech Stack
- AWS (EC2, VPC, Security Groups)
- Terraform (IaC)
- GitHub Actions (CI/CD)
- Node.js (Express App)

## Architecture Diagram
[Insert your architecture diagram here]

## How it works
1. Terraform provisions an EC2 instance.
2. GitHub Actions automates deployment:
   - Push to `main` triggers the workflow.
   - Code is pulled onto EC2.
   - Node.js app runs on port 3000.

## Prerequisites
- AWS CLI & Terraform installed.
- AWS Key Pair for EC2 access.
- GitHub Secrets configured.

## How to Run
1. `cd infra/ && terraform init && terraform apply`
2. Push changes to `main` to trigger CI/CD.

## Output
Visit: `http://<EC2-PUBLIC-IP>:3000`

## Author
Md Riad Hossain Bhuiyan
