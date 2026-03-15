// data.js - Jobs data 
const jobData =[
  {
    id: 1, title: "Senior Frontend Engineer", company: "Vercel", logo: "VC", location: "Remote", type: "Full-time", mode: "Remote", level: "Senior", category: "Engineering", salary: "$140k – $175k", salaryMin: 140000, salaryMax: 175000, posted: "2 days ago", featured: true, tags:["React", "TypeScript", "Next.js", "CSS"],
    description: "Join the team building the world's fastest frontend deployment platform.",
    responsibilities:["Lead frontend architecture decisions and establish best practices", "Build performant, accessible UI components", "Mentor junior engineers"],
    requirements:["5+ years of frontend engineering experience", "Deep expertise in React, TypeScript, and CSS"]
  },
  {
    id: 2, title: "Product Designer", company: "Linear", logo: "LN", location: "San Francisco, CA", type: "Full-time", mode: "Hybrid", level: "Mid", category: "Design", salary: "$120k – $150k", salaryMin: 120000, salaryMax: 150000, posted: "1 day ago", featured: false, tags:["Figma", "Design Systems", "UX Research", "Prototyping"],
    description: "Shape the future of project management tooling. We care deeply about craftsmanship.",
    responsibilities:["Own end-to-end design for key product areas", "Conduct user research", "Maintain design system"],
    requirements:["3+ years of product design experience", "Expert-level Figma skills", "Portfolio demonstrating complex product thinking"]
  },
  {
    id: 3, title: "Backend Engineer — Node.js", company: "Stripe", logo: "ST", location: "New York, NY", type: "Full-time", mode: "On-site", level: "Mid", category: "Engineering", salary: "$160k – $200k", salaryMin: 160000, salaryMax: 200000, posted: "3 days ago", featured: true, tags: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    description: "Help build the financial infrastructure that powers millions of businesses globally.",
    responsibilities:["Design and implement scalable APIs", "Own reliability of payment services"],
    requirements:["4+ years backend engineering", "Experience with distributed systems"]
  },
  {
    id: 4, title: "Data Analyst", company: "Notion", logo: "NO", location: "Remote", type: "Full-time", mode: "Remote", level: "Entry", category: "Data & Analytics", salary: "$80k – $110k", salaryMin: 80000, salaryMax: 110000, posted: "5 days ago", featured: false, tags:["SQL", "Python", "Tableau", "dbt"],
    description: "Translate data into clear stories that guide product and business decisions.",
    responsibilities:["Build and maintain dashboards", "Define and track KPIs"],
    requirements:["1–2 years of analytical experience", "Strong SQL and BI tool experience"]
  },
  {
    id: 5, title: "Engineering Manager", company: "Figma", logo: "FG", location: "Austin, TX", type: "Full-time", mode: "Hybrid", level: "Lead", category: "Engineering", salary: "$190k – $240k", salaryMin: 190000, salaryMax: 240000, posted: "4 days ago", featured: false, tags:["Leadership", "React", "WebGL", "C++"],
    description: "Lead a team of engineers working on Figma's core editor infrastructure.",
    responsibilities: ["Manage and grow team", "Define technical roadmap"],
    requirements:["3+ years of engineering management", "Strong technical background"]
  },
  {
    id: 6, title: "Growth Marketing Manager", company: "Loom", logo: "LM", location: "London, UK", type: "Full-time", mode: "Remote", level: "Mid", category: "Marketing", salary: "$90k – $120k", salaryMin: 90000, salaryMax: 120000, posted: "1 week ago", featured: false, tags:["SEO", "Paid Ads", "Analytics"],
    description: "Own acquisition channels and help Loom reach the next 10M users.",
    responsibilities: ["Own paid channels", "Design A/B experiments"],
    requirements:["3+ years in performance marketing", "Analytical mindset"]
  },
  {
    id: 7, title: "iOS Engineer", company: "Spotify", logo: "SP", location: "Remote", type: "Contract", mode: "Remote", level: "Senior", category: "Engineering", salary: "$130k – $160k", salaryMin: 130000, salaryMax: 160000, posted: "2 days ago", featured: false, tags:["Swift", "UIKit", "SwiftUI", "Core Audio"],
    description: "Build audio experiences for 500M+ users on iOS.",
    responsibilities: ["Develop core iOS features", "Collaborate on API contracts"],
    requirements:["5+ years Swift development", "Deep understanding of UIKit/SwiftUI"]
  },
  {
    id: 8, title: "UI/UX Design Intern", company: "Webflow", logo: "WF", location: "San Francisco, CA", type: "Internship", mode: "Hybrid", level: "Entry", category: "Design", salary: "$35 – $45/hr", salaryMin: 35, salaryMax: 45, posted: "3 days ago", featured: false, tags:["Figma", "Prototyping", "User Research"],
    description: "Join our design team for a 3-month internship.",
    responsibilities: ["Assist senior designers", "Create wireframes and prototypes"],
    requirements:["Enrolled in design program", "Strong Figma skills"]
  },
  {
    id: 9, title: "DevOps Engineer", company: "GitLab", logo: "GL", location: "Remote", type: "Full-time", mode: "Remote", level: "Senior", category: "Engineering", salary: "$150k – $185k", salaryMin: 150000, salaryMax: 185000, posted: "6 days ago", featured: false, tags:["Kubernetes", "Terraform", "CI/CD", "AWS"],
    description: "Help GitLab scale its infrastructure to serve millions of developers.",
    responsibilities: ["Design cloud infrastructure", "Build CI/CD pipelines"],
    requirements:["5+ years DevOps experience", "Strong Kubernetes expertise"]
  },
  {
    id: 10, title: "Product Manager — Growth", company: "Intercom", logo: "IC", location: "Dublin, Ireland", type: "Full-time", mode: "Hybrid", level: "Mid", category: "Product", salary: "$110k – $140k", salaryMin: 110000, salaryMax: 140000, posted: "4 days ago", featured: false, tags:["Product Strategy", "Analytics", "A/B Testing"],
    description: "Drive growth initiatives across Intercom's self-serve acquisition funnel.",
    responsibilities: ["Own product roadmap", "Run experiments"],
    requirements:["3+ years PM experience", "Strong analytical skills"]
  },
  {
    id: 11, title: "Full Stack Engineer", company: "Supabase", logo: "SB", location: "Remote", type: "Full-time", mode: "Remote", level: "Mid", category: "Engineering", salary: "$120k – $155k", salaryMin: 120000, salaryMax: 155000, posted: "1 day ago", featured: true, tags:["React", "Node.js", "PostgreSQL", "TypeScript"],
    description: "Build the open source Firebase alternative used by 1M+ developers.",
    responsibilities: ["Ship full-stack features", "Contribute to open source"],
    requirements: ["3+ years full-stack experience", "Strong SQL skills"]
  },
  {
    id: 12, title: "Content Strategist", company: "Mailchimp", logo: "MC", location: "Atlanta, GA", type: "Part-time", mode: "Hybrid", level: "Entry", category: "Marketing", salary: "$50k – $70k", salaryMin: 50000, salaryMax: 70000, posted: "1 week ago", featured: false, tags: ["Content Writing", "SEO", "Copywriting"],
    description: "Help Mailchimp tell its story across blog, email, and social channels.",
    responsibilities:["Write and edit copy", "Develop content calendars"],
    requirements: ["1+ years content writing", "Strong SEO fundamentals"]
  }
];