Parth Vaidya — Software Development Engineer(Java) Portfolio

A responsive portfolio website presenting my software engineering experience, technical skills, projects and professional background. It is built with React and Vite and automatically deployed to GitHub Pages through GitHub Actions.

Live Portfolio

Website: parth1986-dotnet.github.io/parth-tech-showcase

About Me

I am a Java Software Development Engineer with experience building backend services, RESTful APIs, event-driven microservices and modern web applications. My core technologies include Java, Spring Boot, React, TypeScript, AWS, Kafka, SQL and automated testing.

I enjoy solving production problems, improving application performance and building reliable software that delivers a clear benefit to users.

Portfolio Sections

Professional introduction and career highlights

Technical stack and engineering capabilities

Experience across fintech, healthcare and e-commerce

Featured full-stack and backend projects

Performance and reliability achievements

Education and contact information

Technology Stack

Area

Technologies

Frontend

React, TypeScript, JavaScript, HTML5, CSS3

Backend

Java 17/21, Spring Boot, Spring Cloud, REST, GraphQL, gRPC

Cloud

AWS Lambda, Step Functions, MSK, EKS, S3, RDS, SQS/SNS, CloudWatch

Data

PostgreSQL, MongoDB, DynamoDB, Redis, Elasticsearch

Messaging

Apache Kafka, RabbitMQ, event-driven architecture

DevOps

GitHub Actions, Jenkins, Docker, Kubernetes, Terraform

Testing

JUnit, Mockito, Testcontainers, Karate

Key Features

Responsive layout for desktop, tablet and mobile devices

Reusable React components and data-driven portfolio sections

Simple content management through JavaScript objects and arrays

Fast production builds using Vite

Repository-independent relative asset paths

Automatic deployment whenever code is pushed to main

Project Structure

parth-tech-showcase/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

Run Locally

Node.js and npm must be installed.

git clone https://github.com/Parth1986-dotnet/parth-tech-showcase.git
cd parth-tech-showcase
npm install
npm run dev

Open http://localhost:5173 in your browser.

To check the production build locally:

npm run build
npm run preview

Update the Portfolio

Most portfolio content is stored near the top of src/App.jsx in the following data sections:

PROFILE

HERO_METRICS

STACK

EXPERIENCE

PROJECTS

ACHIEVEMENTS

EDUCATION

After making changes, commit and push them:

git add .
git commit -m "Update portfolio content"
git push origin main

Automatic Deployment

The workflow in .github/workflows/deploy.yml builds and publishes the website automatically.

On every push to main, GitHub Actions:

Installs the project dependencies.

Creates the Vite production build.

Uploads the generated static files.

Deploys the site to GitHub Pages.

For the first deployment, open Repository Settings → Pages and set Source to GitHub Actions. Future pushes will deploy automatically.

Contact

LinkedIn

GitHub

Live portfolio
