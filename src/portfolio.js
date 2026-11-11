/* Everything shown on the site comes from this file.
   Colors live in _globalColor.scss. */

import splashAnimation from "./assets/lottie/splashAnimation";

// Splash screen (off: it delays the first view by two seconds)
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Name in the header logo
const greeting = {
  username: "Rajesh Perumal"
};

// Hero
const hero = {
  title: "Hi, I'm Rajesh",
  subTitle:
    "I build AI agents that do real work in production. At AWS Marketplace, my agents help buyers find, understand and purchase software: tool-calling over MCP, answers grounded in citations, and a human approving every purchase. 18+ years of engineering behind it, from React front ends to serverless AWS.",
  openTo:
    "Open to Forward Deployed Engineer roles: working with customers to turn messy workflows into shipped agents.",
  resumeFileName: "Rajesh_Perumal_Resume.pdf"
};

const socialMediaLinks = {
  github: "https://github.com/v-rajeshperumal",
  linkedin: "https://www.linkedin.com/in/vrajeshperumal/",
  gmail: "v.rajeshperumal@gmail.com",
  display: true
};

// Production work
const productionWork = {
  title: "Production work",
  subtitle:
    "Agentic AI and purchase experiences I built and shipped at AWS Marketplace",
  projects: [
    {
      name: "AI Checkout Agent",
      image: require("./assets/images/checkoutAgent.png"),
      problem:
        "Buying software in AWS Marketplace meant finding, configuring and purchasing the right offer step by step.",
      built: [
        "MCP server on Amazon Bedrock AgentCore with tools to describe offers, purchase, fetch agreements and summarize EULAs",
        "FastAPI agent service around the LLM, and the React front end buyers talk to",
        "Cross-account authorization (FAS, KMS, STS AssumeRole); the buyer approves every purchase with a click"
      ],
      results: [
        "Took it from prototype to production; it now powers the MAX agent"
      ],
      stack: [
        "MCP",
        "Bedrock AgentCore",
        "FastAPI",
        "React",
        "TypeScript",
        "IAM/KMS/STS"
      ]
    },
    {
      name: "EULA Agent",
      image: require("./assets/images/eulaAgent.png"),
      problem:
        "Buyers had to read long license agreements to answer specific questions about their terms.",
      built: [
        "Citation-grounded RAG: OpenSearch hybrid search (BM25 + k-NN, Titan embeddings) fused with a legal-ontology knowledge graph on Amazon Neptune",
        "Parallel 7-stage ingestion on Step Functions, where Strands agents (ReAct) extract and validate clauses",
        "Prototyped a Neo4j and Stardog semantic graph layer for multi-hop retrieval and ontology inference"
      ],
      results: [
        "Answers cite the exact clause, so buyers can check them",
        "Lightweight routing sends only clause extraction to Claude Sonnet: up to 40% faster end-to-end inference and lower time-to-first-token",
        "The graph prototype cut context overhead by 35%"
      ],
      stack: [
        "RAG",
        "OpenSearch",
        "Amazon Neptune",
        "SPARQL",
        "Strands Agents",
        "Step Functions",
        "Claude Sonnet",
        "Neo4j (prototype)",
        "Stardog (prototype)"
      ]
    },
    {
      name: "Composable Procurement",
      image: require("./assets/images/composableProcurement.png"),
      problem: "Marketplace buyers went through two separate purchase flows.",
      built: [
        "One unified, session-based purchase flow in React, TypeScript and XState",
        "The purchase experience the agents hand off to, rolled out in stages"
      ],
      results: ["Rolled out to every Marketplace customer with zero downtime"],
      stack: ["React", "TypeScript", "XState", "AWS CDK"]
    }
  ]
};

// How I build
const principles = {
  title: "How I build",
  subtitle: "The principles behind every agent I put in front of customers",
  items: [
    {
      title: "Tools, not just prompts",
      text: "Agents act through well-defined MCP tools with clear inputs and outputs, so every action is explicit, testable and logged.",
      image: require("./assets/images/patternMcp.png")
    },
    {
      title: "Humans approve what can't be undone",
      text: "The agent prepares the action; a person reviews it and authorizes it. Automation where it helps, a person where it counts.",
      image: require("./assets/images/patternHitl.png")
    },
    {
      title: "Answers you can verify",
      text: "Every response points back to its source, and retrieval is designed so exceptions and cross-references aren't missed.",
      image: require("./assets/images/patternGrounded.png")
    },
    {
      title: "Secure by design",
      text: "Least-privilege, cross-account access for agent actions, with encryption and short-lived credentials.",
      image: require("./assets/images/patternSecurity.png")
    },
    {
      title: "Fast and cost-aware",
      text: "Measure latency and cost against a baseline, keep context lean, and use the smallest model that does the job well.",
      image: require("./assets/images/patternSpeed.png")
    },
    {
      title: "Built to operate",
      text: "Spec-driven development, security gates in CI/CD, structured logs, alarms and staged rollouts, so an agent can be trusted day after day.",
      image: require("./assets/images/patternOps.png")
    }
  ]
};

// Experience
const experience = {
  title: "Experience",
  roles: [
    {
      role: "Software Development Engineer II",
      company: "Amazon (AWS)",
      badge: require("./assets/images/awsBadge.png"),
      date: "Jun 2022 – Present",
      desc: "Build agentic AI and the purchase experience for AWS Marketplace. Also moved procurement services to IPv4/IPv6 dualstack in two weeks with no impact on IPv4 clients.",
      linkToWork: true
    },
    {
      role: "Senior Software Engineer",
      company: "The Home Depot",
      badge: require("./assets/images/homeDepotBadge.png"),
      date: "Aug 2021 – Jun 2022",
      desc: "Led a platform modernization initiative, setting CI/CD pipeline standards and building reusable HTTP client libraries adopted across engineering teams, while developing distributed services in Java and C# for retail and e-commerce operations."
    },
    {
      role: "Principal Software Engineer",
      company: "Dell Technologies",
      badge: require("./assets/images/dellBadge.png"),
      date: "Jun 2016 – Aug 2021",
      desc: "Led the migration of monolithic applications to cloud-native microservices on Pivotal Cloud Foundry, and built full-stack e-commerce modules with ASP.NET Core and Angular, including configurable-product pages and a re-engineered product catalog."
    },
    {
      role: "Senior .NET Developer",
      company: "Valence Health",
      badge: require("./assets/images/valenceBadge.png"),
      date: "Jun 2014 – May 2016",
      desc: "Built claims-processing and member-enrollment applications with ASP.NET MVC 4 and REST APIs for healthcare operations."
    },
    {
      role: "Lead Software Engineer",
      company: "TCS / Humana",
      badge: require("./assets/images/tcsBadge.png"),
      date: "Nov 2008 – May 2014",
      desc: "Built single-page applications with role-based security and WCF SOAP services for Humana's enterprise healthcare workflows in Louisville, KY, after starting in Chennai, India."
    }
  ]
};

// What I build (illustration + icon grid)
const whatIBuild = {
  title: "What I build",
  subtitle: "Agentic AI on AWS, from the first tool call to production",
  icons: [
    {name: "AI Agents", icon: "fas fa-robot"},
    {name: "MCP / Tool Calling", icon: "fas fa-plug"},
    {name: "LLMs", icon: "fas fa-brain"},
    {name: "Multi-Agent Orchestration", icon: "fas fa-network-wired"},
    {name: "Knowledge Graphs", icon: "fas fa-project-diagram"},
    {name: "Vector & Hybrid Search", icon: "fas fa-search"},
    {name: "AWS", icon: "fab fa-aws"},
    {name: "Serverless", icon: "fas fa-bolt"},
    {name: "Python", icon: "fab fa-python"},
    {name: "React", icon: "fab fa-react"},
    {name: "TypeScript / JavaScript", icon: "fab fa-js-square"},
    {name: "Node.js", icon: "fab fa-node-js"},
    {name: "Docker", icon: "fab fa-docker"},
    {name: "Databases", icon: "fas fa-database"},
    {name: "Security in CI/CD", icon: "fas fa-user-shield"},
    {name: "Git", icon: "fab fa-git-alt"}
  ]
};

// Skills
const skillGroups = {
  title: "Skills",
  groups: [
    {
      name: "Agentic AI",
      skills: [
        "MCP",
        "Bedrock AgentCore",
        "Strands Agents SDK",
        "Multi-agent orchestration",
        "Human-in-the-loop",
        "Model routing"
      ]
    },
    {
      name: "Retrieval",
      skills: [
        "RAG",
        "OpenSearch hybrid search (BM25 + k-NN)",
        "Titan embeddings",
        "Amazon Neptune",
        "SPARQL",
        "Knowledge graphs"
      ]
    },
    {
      name: "AWS & backend",
      skills: [
        "Lambda",
        "Step Functions",
        "EventBridge",
        "CDK",
        "IAM/KMS/STS",
        "FastAPI",
        "Python",
        "Go",
        "Node.js"
      ]
    },
    {
      name: "Front end & delivery",
      skills: [
        "React",
        "TypeScript",
        "XState",
        "CI/CD security gates (SAST/DAST)",
        "CloudWatch",
        "Spec-driven development"
      ]
    }
  ]
};

// Education
const education = {
  degree: "B.Tech, Information Technology",
  school: "Anna University, Chennai",
  years: "2004 – 2008"
};

// Contact
const contactInfo = {
  title: "Contact",
  subtitle: "Building agents, or hiring someone who does? My inbox is open.",
  email_address: "v.rajeshperumal@gmail.com"
};

// Template sections that are switched off (kept so their files still build)
const openSource = {showGithubProfile: "false", display: false};
const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};
const talkSection = {title: "", subtitle: "", talks: [], display: false};
const podcastSection = {title: "", subtitle: "", podcast: [], display: false};
const twitterDetails = {userName: "twitter", display: false};
const isHireable = false;

export {
  splashScreen,
  greeting,
  hero,
  socialMediaLinks,
  productionWork,
  principles,
  experience,
  whatIBuild,
  skillGroups,
  education,
  contactInfo,
  openSource,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  isHireable
};
