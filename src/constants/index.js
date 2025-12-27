export const myProjects = [
  {
    id: 1,
    title: "PrepWise - AI Saas Interview Agent",
    description:
      "AI-powered interview preparation platform that customizes questions, conducts mock interviews, and delivers insightful feedback using speech and language models.",
    subDescription: [
      "Developed a full-stack web application using Next.js and Firebase for real-time authentication, storage, and database integration.",
      "Integrated Gemini AI and Vapi AI to generate personalized interview questions, conduct mock calls, and provide AI-driven feedback.",
      "Deployed the app on AWS Amplify with load balancer setup for production readiness.",
    ],

    href: "https://prepwise-seven.vercel.app",
    logo: "/assets/projects/prepwise-logo.svg",
    image: "/assets/projects/prepwise.png",
    tags: [
      {
        id: 1,
        name: "Vapi AI",
        path: "/assets/logos/vapi.svg",
      },
      {
        id: 2,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 3,
        name: "NextJs",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 4,
        name: "Genimi AI",
        path: "/assets/logos/gemini-ai.svg",
      },
    ],
  },
  {
    id: 2,
    title: "StoreIt - A Secure Custom Storage Solution",
    description:
      "StoreIt is a secure, privacy-first file-sharing platform inspired by Google Drive, enabling users to upload, manage, and share files.",
    subDescription: [
      "Utilized Appwrite for backend services with OTP-based authentication and session management.",
      "Integrated Amazon S3 for secure, temporary file storage using pre-signed URLs to protect data access.",
      "Deployed on AWS using VPCs, Load Balancer, and Auto Scaling Groups for enterprise-grade scalability.",
      "Set up CI/CD pipelines using Jenkins to maintain full control over build and deployment processes.",
    ],
    href: "https://storeit-topaz.vercel.app",
    logo: "/assets/projects/storeit-logo.svg",
    image: "/assets/projects/storeit.png",
    tags: [
      {
        id: 1,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 2,
        name: "NextJS",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "/assets/logos/appwrite.svg",
      },
      {
        id: 4,
        name: "Jenkins",
        path: "/assets/logos/jenkins.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Velvet Pour – A GSAP Scroll Experience",
    description:
      "Velvet Pour is a smooth-scroll experience website designed to explore and showcase GSAP animations with aesthetic transitions and interactive UI effects.",
    subDescription: [
      "Built with React and styled using modern CSS techniques to support animation fluidity.",
      "Used GSAP (GreenSock Animation Platform) to create scroll-triggered animations and smooth parallax effects.",
      "Focused on learning and implementing timeline control, staggered motion, and responsive scroll interactions.",
      "Deployed on AWS with highly available infrastructure.",
    ],
    href: "https://velvet-pour-amber.vercel.app",
    logo: "/assets/projects/velvetpour-logo.svg", // Replace with your actual logo path or leave empty if none
    image: "/assets/projects/velvet-pour.png", // Replace with a screenshot of your project
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "GSAP",
        path: "/assets/logos/gsap.svg", 
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Azure Sensei - AI Learning Assistant",
    description:
      "An intelligent n8n workflow that transforms Azure study materials into an interactive AI tutor accessible through Discord, making cloud learning accessible and budget-friendly.",
    subDescription: [
      "Built an automated n8n workflow that processes Azure documentation and study materials into a structured knowledge base.",
      "Integrated Gemini API for content analysis and response generation to create personalized learning experiences.",
      "Developed a custom Discord bot for seamless user interaction and real-time Q&A capabilities.",
      "Implemented automated content updates and maintenance tasks to keep the learning material current.",
    ],
    href: "https://solutions-architect-heaven.hashnode.dev/azure-sensei",
    logo: "/assets/projects/azure-sensei-logo.svg", 
    image: "/assets/projects/azure-sensei.png",
    tags: [
      {
        id: 1,
        name: "n8n",
        path: "/assets/logos/n8n.png", 
      },
      {
        id: 2,
        name: "Gemini",
        path: "/assets/logos/gemini-ai.svg",
      },
      {
        id: 3,
        name: "Pinecone",
        path: "/assets/logos/pinecone.png", 
      },
      {
        id: 4,
        name: "Discord",
        path: "/assets/logos/discord.png",
      },
    ],
  },
  {
    id: 5,
    title: "Mr. Helpful - AI Customer Support Agent",
    description:
      "An AI-powered n8n workflow that automates customer support operations by classifying incoming emails, generating RAG-based AI responses using Gemini and Pinecone, and routing feature requests directly to developer channels in Discord.",
    subDescription: [
      "Built an end-to-end n8n workflow that classifies incoming support emails into categories such as Support, Feature Request, and Others using Google Gemini.",
      "Integrated a Retrieval-Augmented Generation (RAG) pipeline using Pinecone and Gemini to generate contextual and empathetic AI responses.",
      "Implemented threaded Gmail replies and labeling for organized, auditable, and SLA-compliant support communication.",
      "Automated feature request handling by sending structured requests to a Discord developer channel for collaboration and review.",
    ],
    href: "https://solutions-architect-heaven.hashnode.dev/mr-helpful",
    logo: "/assets/projects/azure-sensei-logo.svg", 
    image: "/assets/projects/mr-helpful.png",
    tags: [
      {
        id: 1,
        name: "n8n",
        path: "/assets/logos/n8n.png", 
      },
      {
        id: 2,
        name: "Gemini",
        path: "/assets/logos/gemini-ai.svg",
      },
      {
        id: 3,
        name: "Pinecone",
        path: "/assets/logos/pinecone.png", 
      },
      {
        id: 4,
        name: "Discord",
        path: "/assets/logos/discord.png",
      },
      {
        id: 5,
        name: "Gmail",
        path: "/assets/logos/gmail.png",
      },
    ],
  },
  {
    id: 6,
    title: "Many more coming soon..",
    description:
      "Coming Soon!",
    subDescription: [
      "Coming Soon!",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/coming-soon.jpg",
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
      {
        id: 2,
        name: "",
        path: "",
      },
      {
        id: 3,
        name: "",
        path: "",
      },
      {
        id: 4,
        name: "",
        path: "",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/ShreyasLadhe",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shreyasladhe",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Hashnode",
    href: "https://hashnode.com/@nimbusarchitect",
    icon: "/assets/socials/hashnode.svg",
  },
];

export const experiences = [
  {
    company: "Searce",
    location: "Mumbai, India",
    remote: true,
    logo: "/assets/logos/searce.png",
    roles: [
      {
        title: "Associate Cloud Engineer",
        date: "Dec 2025 - Present",
        contents: [
          "Working on developing this..."
        ],
        skills: ["Google Cloud Platform", "Terraform", "Docker", "Kubernetes", "GitLab", "Zoho Suite"],
        isCurrent: true
      },
    ]
  },
  {
    company: "ZeroToCloud",
    location: "Australia",
    remote: true,
    logo: "/assets/logos/zerotocloud.jpg",
    roles: [
      {
        title: "Cloud Engineer Intern",
        date: "Aug 2025 - Present",
        contents: [
          "Designed and developed responsive websites for ZeroToCloud's cloud computing courses, ensuring performance, SEO optimization, and mobile compatibility.", 
          "Architected resilient and highly available architecture solutions that align with AWS Well Architect Framework pillars",
          "Collaborated closely with the content and design teams to ensure seamless integration of technical content with frontend components."
        ],
        skills: ["AWS", "Web Development", "React", "Authentication", "Exam Portals"],
        isCurrent: false
      },
      {
        title: "Cloud Engineer - Contract",
        date: "Apr 2025 - Aug 2025",
        contents: [
          "Built scalable practice exam portals tailored for AWS certifications, with user authentication, progress tracking, and timed test features.",
          "Created comprehensive question sets and detailed explanations aligned with AWS exam blueprints.",
        ],
        skills: ["AWS", "Web Development", "React", "Authentication", "Exam Portals"],
        isCurrent: false
      }
    ]
  },
  {
    company: "F13 Technologies",
    location: "New Delhi, India",
    remote: true,
    logo: "/assets/logos/f13.png",
    roles: [
      {
        title: "AWS Cloud Engineer",
        date: "Jan 2025 - Aug 2025",
        contents: [
          "Led cloud infrastructure and application development for EmployeeOS and 2doo, driving deployment scalability and performance optimization.",
          "Spearheaded infrastructure modernization using AWS services, streamlining CI/CD pipelines and reducing deployment times by over 60%.",
        ],
        skills: ["AWS", "CI/CD", "NextJS", "Docker", "Team Management"],
        isCurrent: false
      },
      {
        title: "Cloud Engineer Intern",
        date: "Aug 2024 - Dec 2024",
        contents: [
          "Mentored and managed fellow intern teams, conducting project evaluations, knowledge-sharing sessions, and aligning team efforts with sprint goals.",
        ],
        skills: ["AWS", "Databases", "Python", "Git", "GitHub"],
        isCurrent: false
      }
    ]
  },
  {
    company: "Microsoft Learn Student Ambassador",
    location: "IIITV Chapter",
    remote: false,
    logo: "/assets/logos/microsoft.svg",
    roles: [
      {
        title: "Technical Core Member",
        date: "Sep 2024 - Present",
        contents: [
          "Organized technical workshops and hackathons for university students.",
          "Mentored peers in cloud computing and development technologies.",
          "Collaborated with Microsoft to promote learning initiatives on campus.",
        ],
        skills: ["Microsoft Azure", "Workshop Organization", "Student Mentoring", "Event Management"],
        isCurrent: true
      }
    ]
  }
];
export const reviews = [
  {
    name: "Tarleen Kaur",
    username: "Human Resource Specialist, F13 Technologies",
    body: "Shreyas brings reliability and sharp problem-solving to every tech challenge. He's an asset to any team he’s part of.",
    img: "https://ca.slack-edge.com/T7BJUG8M8-U02E2EXNHD2-47176f2550c8-512",
  },
  {
    name: "Bhoomi Nawani",
    username: "Human Resource Associate, F13 Technologies",
    body: "Shreyas blends strong leadership with management, ensuring timely delivery and seamless teamwork.",
    img: "https://ca.slack-edge.com/T7BJUG8M8-U0837G9SPNF-d8aef70bde0b-512",
  },
  {
    name: "Amanpreet Singh",
    username: "Founder, F13 Technologies",
    body: "Relentlessly dedicated and always just a ping away, Shreyas is the kind of intern every startup dreams of - committed, consistent, and clockless.",
    img: "https://ca.slack-edge.com/T7BJUG8M8-U7BJUG8QJ-6f99a4b46f27-512",
  },
  {
    name: "Diya Mangla",
    username: "HR Associate, F13 Technologies",
    body: "Shreyas is someone you can always count on to bring ideas to life with clarity and commitment.",
    img: "https://ca.slack-edge.com/T7BJUG8M8-U086QJ8HF3R-7aa271d8c9c1-512",
  },
  {
    name: "Lucy Wang",
    username: "Founder, ZeroToCloud",
    body: "Shreyas takes full ownership and acts fast - always proactive, always dependable.",
    img: "https://ca.slack-edge.com/T06M90VDBNG-U06MVAP8YHW-c70914e646aa-192",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2024",
    logo: "/assets/logos/ccp.png",
    link: "https://www.credly.com/badges/3b18d51d-7a27-42ad-a6a3-2be4b5ebfcf2/public_url"
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "June 2025",
    logo: "/assets/logos/aif.png",
    link: "https://www.credly.com/badges/a73da11b-9abe-4261-b580-2e15b30b8e96/public_url"
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "August 2025",
    logo: "/assets/logos/aws-saa.png",
    link: "https://www.credly.com/badges/cbf1e721-9875-4411-84db-66365b6e2122/public_url"
  },
  {
    name: "OCI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "July 2025",
    logo: "/assets/logos/OCIF.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=25572D24DE0D91530D93023573FB13CE2E9B29B4AE8F5E24D81A103CA0421823"
  },
  {
    name: "OCI AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "July 2025",
    logo: "/assets/logos/ociai.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6A81FD0E191AB545C167A83B722C93578D3778005355DFDD63FDED5827749493"
  },
  {
    name: "ODP Foundations Associate",
    issuer: "Oracle Cloud Data Platform",
    date: "July 2025",
    logo: "/assets/logos/odpf.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8EF2F8B3241825F8EDACBF03B6C93B80281C91DD7F3321577D68675C84FE3C85"
  },
  {
    name: "OCI Architect Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "July 2025",
    logo: "/assets/logos/ociaa.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BA7D0F669BF7D5795678AC9510F69D852234235E7A258D3F2930AE3D8F4BA278"
  },
  {
    name: "Aviatrix MultiCloud Network Associate",
    issuer: "Aviatrix",
    date: "September 2025",
    logo: "/assets/logos/aviatrix-associate.png",
    link: "https://www.credly.com/badges/bc359949-6fd2-461f-b640-8ff075663f5b/public_url"
  },
  {
    name: "PagerDuty Practitioner",
    issuer: "Pagerduty",
    date: "October 2025",
    logo: "/assets/logos/pgduty-foundational.png",
    link: "https://www.credly.com/badges/b91642ce-6288-46ea-b51a-810b9c524e75/public_url"
  },
  {
    name: "PagerDuty Administrator",
    issuer: "Pagerduty",
    date: "October 2025",
    logo: "/assets/logos/pgduty-administrator.png",
    link: "https://www.credly.com/badges/ed7520ee-9713-499f-b296-ba982fdf7653/public_url"
  },
  {
    name: "Microsoft GitHub Copilot",
    issuer: "GitHub",
    date: "October 2025",
    logo: "/assets/logos/gh300.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShreyasLadhe/4CD8885D2129B90B?sharingId=35477125F4F04F3D"
  },
  {
    name: "Introduction to Linux",
    issuer: "Linux Foundation",
    date: "December 2025",
    logo: "/assets/logos/lfs101.png",
    link: "https://www.credly.com/badges/5a05dbc2-5613-4a6c-90d8-c892325005ef/public_url"
  },
  {
    name: "Snowflake Certified SnowPro Associate",
    issuer: "Snowflake",
    date: "December 2025",
    logo: "/assets/logos/snowpro.png",
    link: "https://achieve.snowflake.com/b93a373b-2d6c-44b1-a2d3-4c819f179d4d#acc.kL6K9EUP"
  }
];

// Solutions Architect content (cards + blog content)
export const solutionsProjects = [
  {
    slug: "from-exposed-to-exemplary",
    title: "Transforming Security: A Startup's Successful Transition to Safe Cloud",
    subtitle: "Tips for Securing Your AWS Cloud: A Practical Handbook",
    image: "/assets/projects/secure-cart/security-pillar.png",
    cover: "/assets/projects/secure-cart/security-pillar.png",
    hashnodeUrl: "https://solutions-architect-heaven.hashnode.dev/transforming-security",
    content: [
      {
        heading: "Overview",
        body: [
          "In the fast-paced world of tech startups, speed is often the top priority. Features are rolled out, customer bases grow, and infrastructure is spun up with a **'get it working now'** mentality. But what happens when the dust settles and you realize your rapid growth has been built on a foundation of critical security vulnerabilities?",
          "This was the exact predicament of **SecureCart**, a booming e-commerce platform that, in its rush to market, left its most valuable resources exposed to the public internet. With over 10,000 customers, their success was also their biggest liability. This is their story, a journey from a high-risk setup to a production-grade, secure cloud environment, offering a powerful lesson for any organization on AWS."
        ]
      },
      {
        heading: "The Wrong Way: A Ticking Time Bomb 💣",
        body: [
          "SecureCart's initial architecture was a perfect storm of common cloud security mistakes. To get their application running quickly, they deployed everything into a default public environment.",
          "Here’s a look at the vulnerabilities they were dealing with:",
          "> - **Publicly Exposed Servers:** Their main application server, an **EC2 instance**, was sitting in a public subnet with its SSH port (22) and HTTP port (80) open to the entire world (0.0.0.0/0). This is the digital equivalent of leaving your office front door unlocked and advertising its location online.  It invited anyone on the internet to attempt to gain access.",
          { image: "/assets/projects/secure-cart/insecure_ec2.png", alt: "Example: EC2 in public subnet with open ports"},
          "> - **Internet-Facing Database:** In one of the most dangerous misconfigurations possible, their RDS MySQL database was also publicly accessible. This setup, often done for **quick access** during development, exposed sensitive customer data directly to potential attackers, with only a simple password standing in the way.",
          { image: "/assets/projects/secure-cart/insecure_rds.png", alt: "Example: RDS MySQL database in public subnet"},
          "> - **Open File Storage:** Product images and other assets were stored in a public S3 bucket. A misconfigured bucket policy allowed any user, even unauthenticated ones, to read every object in the bucket. This kind of oversight has been the cause of massive data breaches at major companies.",
          { image: "/assets/projects/secure-cart/insecure_s3.png", alt: "Example: Public S3 bucket"},
          "This setup was a disaster waiting to happen, plagued by a lack of network segmentation, poor data protection, and nonexistent access control. **A complete redesign was not just necessary; it was urgent**."
        ]
      },
      {
        heading: "The Solution Architect's Approach: Designing for Defense-in-Depth 🛡️",
        body: [
          "Taking on the role of a cloud security-focused Solutions Architect, the mission was clear: transform the vulnerable environment into a secure, production-ready architecture using AWS-native tools and best practices. The new design would be guided by the principle of **layered security (defense-in-depth)**, ensuring that if one layer fails, others are there to protect the application.",
          "💡The secure architecture would be built around a custom Virtual Private Cloud (VPC).",
          "Here are the core AWS services used and the reasoning behind their implementation:",
          "> **Amazon VPC (Virtual Private Cloud)**",
          { image: "/assets/projects/secure-cart/aws_vpc.jpg", alt: "AWS VPC"},
          "This is the foundation of the secure network. Instead of using the default VPC, a custom VPC was created to provide complete control over the network environment. It was segmented into:",
          ">> - **Public Subnets:** These subnets are for resources that *must* be internet-facing, like the load balancer. They have a route to an **Internet Gateway**, which allows two-way communication with the internet.",
          ">> - **Private Subnets:** These are for backend resources like the application server and database. They have no direct route to the internet, isolating them from public traffic and significantly reducing the attack surface.",
          "> **Application Load Balancer**",
          { image: "/assets/projects/secure-cart/aws_elb.jpg", alt: "Application Load Balancer"},
          "Placed in the public subnet, the ALB acts as the secure front door to the application. It accepts incoming public traffic and forwards it to the private EC2 instance. This is the only component directly exposed to the internet, minimizing risk.",
          "> **Amazon EC2**",
          { image: "/assets/projects/secure-cart/aws_ec2.jpg", alt: "Amazon EC2"},
          "The application server was moved into a private subnet. This crucial step means it no longer has a public IP address and cannot be accessed directly from the internet, protecting it from common attacks.",
          "> **NAT Gateway**",
          { image: "/assets/projects/secure-cart/aws_nat.png", alt: "NAT Gateway"},
          "So, if the EC2 instance is private, how does it get software updates? The NAT Gateway, placed in a public subnet, provides the answer. It allows instances in private subnets to initiate outbound traffic to the internet (for updates, patches, etc.) but blocks any inbound traffic from being initiated from the internet.",
          "> **Amazon RDS**",
          { image: "/assets/projects/secure-cart/aws_rds.jpg", alt: "Amazon RDS"},
          "The database was launched in the private subnet, making it completely inaccessible from the public internet. Access is restricted via security groups so that only the EC2 application server can communicate with it, enforcing the principle of least privilege.",
          "> **Amazon S3**",
          { image: "/assets/projects/secure-cart/aws_s3.jpg", alt: "Amazon S3"},
          "The new S3 bucket was configured to block all public access and enable server-side encryption by default. This ensures that all data is encrypted at rest and cannot be accidentally exposed.",
          "> **AWS WAF**",
          { image: "/assets/projects/secure-cart/aws_waf.jpg", alt: "AWS WAF"},
          "As an additional layer of defense, WAF was integrated with the ALB. It acts as a shield, filtering traffic for common web exploits like SQL injection and cross-site scripting (XSS) before they can even reach the application.",
          "> **Bastion Host**",
          { image: "/assets/projects/secure-cart/aws_bastion.webp", alt: "Bastion Host"},
          "To perform administrative tasks on the private EC2 instance, a Bastion Host (or jump server) was set up in the public subnet. Engineers can securely SSH into the Bastion Host, and from there, 'jump' to the private EC2 instance. This provides secure, controlled administrative access without exposing the app server.",
          { image: "/assets/projects/secure-cart/secure-cart.png", alt: "securecart-architecture"},
        ]
      },
      {
        heading: "In the Trenches: Overcoming Real-World Challenges 🛠️",
        body: [
          "The journey from an insecure to a secure architecture is a masterclass in precision. Even with a solid blueprint, implementation comes with its own set of practical hurdles. Overcoming them provides some of the most valuable lessons.",
          "**The Security Group Catch-22**",
          "**The Issue:** A key step was restricting SSH access to the private application server, allowing it only from the Bastion Host. The plan was to add an inbound rule to the app's security group (`app-sg`) that referenced the Bastion's security group (`bastion-sg`). However, AWS returned a referencing error.",
          "**The Lesson:** The problem was the pre-existing, insecure rule that allowed SSH from anywhere (0.0.0.0/0). You cannot have a broad rule and a specific, referenced rule for the same port simultaneously in this manner. The fix required a disciplined sequence: first, **delete the insecure 0.0.0.0/0 rule**, save the changes (briefly leaving the instance with no SSH access path), and then add the new, secure rule referencing `bastion-sg`. This reinforces that secure network changes must be deliberate and sequential.",
          "**The Command Not Found Mystery**",
          "**The Issue:** After connecting to the private EC2 instance via the Bastion Host, it was time to start the Node.js application using `sudo`. Despite following the guide, a `command not found` error appeared, even though Node.js was clearly installed.",
          "**The Lesson:** The devil is in the details. The installation script for Node Version Manager (NVM) adds its path to the user's environment, but not necessarily to the root user's environment that `sudo` uses. The fix was to use the full, exact path returned by the `which node` command (`/home/ec2-user/.nvm/versions/node/v18.20.8/bin/node`). It's a classic reminder to always substitute placeholders with actual values from your specific environment.",
          "**The 503 Error and the Silent Health Check**",
          "**The Issue:** The Application Load Balancer (ALB) was `active`, the EC2 instance was running, and the app was started. Yet, accessing the ALB's DNS name resulted in a 503 Service Unavailable error. The app was working, but the outside world couldn't reach it.",
          "**The Lesson:** The culprit was the ALB's health checks. The ALB continuously pings the application to ensure it's healthy before sending traffic. This health check traffic was being blocked by the EC2 instance's own security group. The fix was to go back to the `app-sg` security group and add an inbound rule allowing HTTP traffic on port 80, with the source set to the ALB's security group (`alb-sg`). This ensures that only the load balancer can communicate with the application, a core tenet of this secure design.",
          "**The Private Key Permission Puzzle**",
          "**The Issue:** To connect from the Bastion Host to the private EC2 instance, the `.pem` private key file is needed. After successfully copying the key to the Bastion, attempting to use it for SSH resulted in a **permissions too open** error.",
          "**The Lesson:** This is not a bug, but a critical security feature of SSH. A private key must be private. If its file permissions allow other users on the system to read it, SSH assumes it may have been compromised and refuses to use it. The solution is to strictly lock down the file's permissions with the command `chmod 400 ssh-key.pem` on the Bastion Host, which grants read access only to the file's owner.",
        ]
      },
      {
        heading: "The Payoff: A Secure and Resilient Foundation ✅",
        body: [
          "By the end of the undertaking, SecureCart was transformed from a vulnerable application into a production-grade, secure cloud environment. This wasn't just about patching a few holes; it was about designing a secure foundation from the ground up.",
          "The key achievements and learnings from this journey include:",
          "> **True Network Isolation:** Backend resources are now in private subnets with no direct internet access, drastically reducing the attack surface.",
          "> **Enforced Least Privilege:** Security groups were meticulously configured to only allow necessary communication between components (e.g., only the ALB can talk to the EC2 app, and only the EC2 app can talk to the RDS database).",
          "> **Defense-in-Depth in Action:** With a WAF filtering malicious requests, an ALB as the single entry point, and isolated private resources, multiple layers of security are now in place.",
          "> **Data Protection by Default:** All data is now encrypted, both in transit (via HTTPS, handled by ALB) and at rest (in RDS and S3).",
          "This demonstrates that cloud security is not an afterthought it's an architectural principle. By moving from a flat, public network to a segmented, multi-layered VPC, SecureCart not only mitigated its immediate risks but also built a scalable and resilient foundation for future growth.",
        ]
      },
      {
        heading: "Resilient for the Future: How to Make Good Architecture Great 🚀",
        body: [
          "The new SecureCart architecture is secure and follows best practices, but a great design is never truly finished. It evolves. Here are the next steps to enhance resilience, automation, and observability, turning a secure setup into a world-class one.",
          "**Introduce High Availability with Auto Scaling**",
          "The current design places the application server in a single Availability Zone (AZ). To protect against an AZ failure, the next step is to use an **EC2 Auto Scaling group**. By configuring a launch template and spanning the Auto Scaling group across the private subnets in both Availability Zones, the system can automatically handle instance failure and scale in or out based on traffic, ensuring high availability and elasticity.",
          "**Codify Everything with Infrastructure as Code (IaC)**",
          "The entire setup was built manually in the AWS Console. This `click-ops` approach is prone to human error and difficult to replicate consistently. The professional standard is to define the infrastructure as code using a tool like **AWS CloudFormation** or **Terraform**. This allows the entire VPC, subnets, gateways, ALB, and security group configuration to be deployed, updated, and destroyed in an automated and repeatable way.",
          "**Implement Robust Monitoring and Secrets Management**",
          "While the initial insecure setup lacked any monitoring, the new architecture can be greatly enhanced with it.",
          "**Observability**",
          "Integrate **Amazon CloudWatch** to collect logs and metrics. Set up alarms for events like high CPU utilization on EC2 or increased latency on the ALB. Enable VPC Flow Logs to monitor all network traffic for security analysis.",
          "**Secrets**",
          "Instead of manually handling the database password, it should be stored in **AWS Secrets Manager**. The EC2 instance can then be granted a secure IAM role to retrieve the credential at runtime, eliminating hardcoded secrets from the application code entirely.",
          "**Automate Deployments with a CI/CD Pipeline**",
          "The current application deployment is a manual process of SSHing into a server . This is slow and risky. A modern approach is to build a CI/CD (Continuous Integration/Continuous Deployment) pipeline using services like **AWS CodePipeline**, **AWS CodeBuild**, and **AWS CodeDeploy**. This pipeline can automatically fetch code from a repository, build it, run tests, and safely deploy it to the EC2 instances in the Auto Scaling group, enabling faster, more reliable updates.",
        ]
      },
      {
        heading: "From Liability to Asset",
        body: [
          "The story of SecureCart is more than just a technical exercise; it's a critical lesson in digital maturity for the modern age. By systematically dismantling their insecure infrastructure and rebuilding it with a security-first mindset, they transformed their greatest liability into a competitive advantage.",
          "They learned that true cloud security isn't about a single tool or a magic bullet. It's about implementing layers of defense that work in concert. This journey involved:",
          "> - Establishing a secure network foundation with a custom VPC, complete with public and private subnets for strict isolation.",
          "> - Placing the Application Load Balancer as the single, hardened entry point for all traffic, minimizing the public attack surface.",
          "> - Shielding the core application server (EC2) and database (RDS) in private subnets, making them inaccessible from the open internet.",
          "> - Enforcing the principle of least privilege using granular Security Groups and IAM roles.",
          "> - Deploying AWS WAF to proactively block common web-based attacks like SQL injection before they could ever reach the application.",
          "The initial **move fast and break things** approach built a ticking time bomb. The methodical, architectural redesign not only defused it but replaced it with a resilient, production-ready system prepared for future growth and scale.",
          "For any organization building on the cloud, SecureCart's journey serves as a clear and powerful reminder: don't wait for a security incident to force your hand. Design with security in mind from day one, and transform your cloud infrastructure from a potential risk into your strongest asset."
        ]
      }
    ],
    links: [
      { label: "Full Project with detailed steps", href: "https://www.zerotocloud.co/course/5-aws-cloud-projects-to-become-a-solutions-architect" },
      { label: "AWS Documentation", href: "https://docs.aws.amazon.com" }
    ]
  },
  {
    slug: "The Midnight Scramble",
    title: "Midnight Struggles: A DevOps Adventure of Challenges and Growth",
    subtitle: "Effective Methods for Robust and Automated Cloud Management",
    image: "/assets/projects/chatops/operational-excellence_pillar.png",
    cover: "/assets/projects/chatops/operational-excellence_pillar.png",
    hashnodeUrl: "https://solutions-architect-heaven.hashnode.dev/midnight-struggles",
    content: [
      {
        heading: "Overview",
        body: [
          "Imagine this: it's 3 AM, and a critical service goes down. Your on-call engineer, jolted awake by a notification, begins the frantic dance of diagnostics. They're jumping between the AWS Console, CloudWatch dashboards, and application logs, all while the pressure mounts. Every minute spent navigating different interfaces is a minute of downtime, a minute of customer frustration, and a minute closer to a major incident. This **chaotic, reactive approach is all too common**, and it’s a clear sign that it’s time for a better way.",
          "This scenario highlights a fundamental challenge in modern operations: the disconnect between alerts and actions. The traditional method is slow, inefficient, and ripe for human error. What if there was a way to bring the entire incident response workflow into the one place your team already collaborates?",
          "This is where **ChatOps** comes in a model that integrates your development and operations tools directly into your chat platform. By leveraging the power of chat, teams can receive real-time alerts, diagnose issues, and trigger automated fixes, all without ever leaving their chat client."
        ]
      },
      {
        heading: "The Solution Architect's Approach: Building the ChatOpsBot",
        body: [
          "As a Solutions Architect focused on operational excellence, my goal was to design a system that not only alerts the team but empowers them to respond instantly and securely. The solution, **ChatOpsBot**, is a lightweight DevOps assistant that brings AWS operations directly into Slack.",
          { image: "/assets/projects/chatops/cloudwatch_trigger_slack.png", alt: "ChatOps Demo"},
          { image: "/assets/projects/chatops/lambda_slack.png", alt: "ChatOps Demo2"},
          "The core principle is to create a seamless flow from alert to resolution. Instead of just notifying the team of a problem, we provide them with the tools to fix it right from their chat window.", 
          "This approach aligns perfectly with the **Operational Excellence Pillar** of the AWS Well-Architected Framework, which emphasizes automating and improving response to operational events.",
          "The implementation of **ChatOpsBot** revolves around a suite of powerful AWS services, each playing a crucial role in creating a robust and automated workflow."
        ]
      },
      {
        heading: "The Architecture and Services: A Symphony of Automation",
        body: [
          { image: "/assets/projects/chatops/chatops.png", alt: "ChatOps Architecture Diagram" },
          "At the heart of our ChatOps solution is a carefully orchestrated set of AWS services working in harmony. Here’s a breakdown of each component and why it was chosen:",
          "**AWS Chatbot**",
          { image: "/assets/projects/chatops/slack_connection.png", alt: "Slack Connection" },
          "This is the linchpin of our entire system. AWS Chatbot acts as the **bridge between Slack and our AWS environment**, allowing us to receive notifications and execute commands from within our chat channels. It’s the foundational piece that makes real-time, chat-based operations possible.",
          "**AWS CloudWatch**",
          { image: "/assets/projects/chatops/cloudwatch_config.png", alt: "CloudWatch Configuration" },
          "You can't fix what you can't see. CloudWatch serves as our vigilant eyes on the infrastructure, constantly monitoring **key metrics like CPU utilization**. When a metric crosses a defined threshold, CloudWatch triggers an alarm, kicking off our automated workflow.",
          "**Amazon SNS**",
          { image: "/assets/projects/chatops/sns_topic_sub.png", alt: "SNS Connection" },
          "SNS is the **messaging backbone** of our architecture. When a CloudWatch alarm is triggered, it publishes a message to an SNS topic. This topic then fans out the notification to all subscribed endpoints, in our case, AWS Chatbot. This decoupled approach ensures that we can easily add more notification channels in the future without reconfiguring our alarms.",
          "**AWS Lambda**",
          { image: "/assets/projects/chatops/lambda.png", alt: "Lambda" },
          "This is where the **magic of automation** happens. Lambda functions are our go-to for defining custom, on-demand actions. Whether it's restarting a service, fetching logs, or scaling a resource, we can encapsulate that logic into a **Lambda function that can be invoked directly from Slack**. This empowers the team with one-click fixes for common problems.",
          "**AWS Identity and Access Management (IAM)**",
          "Security is paramount. IAM allows us to define granular permissions, ensuring that only authorized users can execute specific commands from Slack. We can create roles that **grant read-only access for general queries and more privileged access for remedial actions**, providing a secure and auditable operational environment.",
          { image: "/assets/projects/chatops/cloudformation_stack.png", alt: "IAM Configuration" },
          { image: "/assets/projects/chatops/dashboard_hosted.png", alt: "ChatOps Dashboard" },
          "To provide a high-level overview of our system's health, we deployed a read-only dashboard. **CloudFormation was used to define our infrastructure as code**, ensuring a consistent and repeatable deployment of an S3 bucket to host our static website and a CloudFront distribution to serve it securely and efficiently across the globe.",
        ]
      },
      {
        heading: "Challenges and Learnings: The Road to Operational Zen",
        body: [
          "The path to building any new system is rarely a straight line, and the development of ChatOpsBot was no exception. Here are some of the hurdles we encountered and the valuable lessons we learned along the way:",
          "> **IAM Permissions Puzzle:** One of the most significant challenges was getting the IAM permissions just right. It’s a delicate balance between granting enough access for the bot to be useful and maintaining a secure posture. Initially, we faced **access denied** errors when trying to invoke Lambda functions from Slack.",
          ">> - **Resolution:** We had to meticulously trace the execution path and ensure that the `awschatbot-role` had the necessary policies attached to it, specifically the `lambda:InvokeFunction` permission for the target functions.",
          ">> - **Learning:** Start with the least privilege and incrementally add permissions as needed. This approach, while sometimes tedious, is crucial for building a secure and resilient system.",
          "> **Asynchronous Head-Scratchers:** The asynchronous nature of the alarm-to-notification flow can be tricky to debug. There was a point where our CloudWatch alarm was firing, but the notification wasn't appearing in Slack.",
          ">> - **Resolution:** We found it incredibly helpful to add an email subscription to our SNS topic for testing purposes. This allowed us to confirm that the SNS topic was indeed receiving the message from CloudWatch, isolating the issue to the connection between SNS and AWS Chatbot.",
          ">> - **Learning:** When dealing with event-driven architectures, it's essential to have visibility into each step of the process. Temporary, parallel notification channels can be a lifesaver during debugging.",
          "> **The 'It Works on My Machine' Dashboard:** After deploying the frontend dashboard with CloudFormation, we initially encountered 403 Forbidden errors when trying to access the site via the CloudFront URL.",
          ">> - **Resolution:** The issue was with the S3 bucket policy. We needed to ensure that the policy explicitly granted `s3:GetObject` permissions to the CloudFront distribution's Origin Access Control (OAC).",
          ">> - **Learning:** Infrastructure as Code is powerful, but it requires a deep understanding of the underlying services. A single misconfiguration in a CloudFormation template can lead to hours of troubleshooting.",
        ]
      },
      {
        heading: "Building for a Resilient Future: What's Next for ChatOpsBot?",
        body: [
          "A core principle of the Operational Excellence pillar is the **continuous evolution of operational practices**. ChatOpsBot, in its current form, is a massive leap forward, but there's always room for improvement. Here are some ways we can enhance the architecture to make it even more resilient and capable:",
          "> **Interactive Buttons and Modals:** Instead of relying solely on CLI-style commands, we can leverage Slack's interactive components. Imagine an alert for a high CPU that comes with **View Logs**, **Restart Service** and **Acknowledge** buttons. This would lower the barrier to entry for less technical team members and reduce the chance of typos in commands.",
          "> **Integration with AWS Systems Manager (SSM):** For more complex or sensitive operations, we can use AWS Systems Manager documents instead of Lambda functions. SSM documents can provide a more structured and secure way to perform tasks like patching instances or running detailed diagnostic scripts.",
          "> **Enhanced Frontend Dashboard:** The current dashboard is read-only. We could evolve it into a fully interactive operational console by integrating it with Amazon API Gateway and Lambda. This would allow users to trigger actions from the dashboard itself, providing a single pane of glass for both monitoring and remediation.",
          "> **Tiered Alerting and Escalation Policies**: Not all alerts are created equal. We can implement more sophisticated alerting logic using multiple SNS topics for different severity levels (e.g., `critical-alerts`, `warning-alerts`). This would allow us to set different notification preferences and even integrate with on-call management tools like PagerDuty for critical issues.",
          "> **AI-Powered Insights:** The integration of Amazon Q Developer opens up exciting possibilities for AI-powered assistance. We can train it to recognize patterns in alerts and suggest probable causes or even recommend specific remediation actions based on historical data.",
          "By embracing a culture of continuous improvement and leveraging the full power of the AWS ecosystem, we can transform our operational capabilities from **reactive firefighting to proactive, intelligent**, and ultimately, a more peaceful night's sleep for our on-call engineers.",
        ]
      }
    ]
  }
];

// Workflow Chronicles content
export const workflowProjects = [
  {
    slug: "azure-sensei",
    title: "Azure Sensei",
    subtitle: "Learn Azure on a Budget: Transform Study Material to an AI Tutor in Discord",
    image: "/assets/projects/azure-sensei.png",
    cover: "/assets/projects/azure-sensei.png",
    hashnodeUrl: "https://solutions-architect-heaven.hashnode.dev/azure-sensei",
    description: "An intelligent n8n workflow that transforms Azure study materials into an interactive AI tutor accessible through Discord, making cloud learning accessible and budget-friendly.",
    tags: ["n8n", "Azure", "AI", "Discord", "Automation"],
    content: [
      {
        heading: "Overview",
        body: [
          "Azure Sensei is an innovative n8n workflow that democratizes Azure learning by transforming traditional study materials into an interactive AI-powered tutor accessible through Discord. This solution addresses the common challenge of expensive cloud training resources while providing personalized, on-demand learning support.",
          "The workflow leverages n8n's powerful automation capabilities to create a seamless bridge between educational content and AI assistance, making Azure certification preparation more accessible and engaging for learners on a budget."
        ]
      },
      {
        heading: "Key Features",
        body: [
          "**Automated Content Processing:** The workflow automatically processes Azure study materials, documentation, and practice questions into a structured knowledge base.",
          "**Discord Integration:** Users can interact with the AI tutor directly through Discord commands, making learning accessible from anywhere.",
          "**Personalized Learning Paths:** The AI adapts to individual learning styles and progress, providing customized study recommendations.",
          "**Cost-Effective Solution:** Eliminates the need for expensive training courses while providing comprehensive Azure learning support.",
          "**Real-time Q&A:** Instant responses to Azure-related questions with contextual explanations and practical examples."
        ]
      },
      {
        heading: "Technical Implementation",
        body: [
          "The workflow is built using n8n's visual workflow editor, connecting multiple services and APIs to create a comprehensive learning platform:",
          "> - **Content Ingestion:** Automated scraping and processing of Azure documentation and study materials",
          "> - **AI Processing:** Integration with AI services for content analysis and response generation",
          "> - **Discord Bot:** Custom Discord bot for user interaction and command processing",
          "> - **Database Management:** Efficient storage and retrieval of learning content and user progress",
          "> - **Scheduling:** Automated content updates and maintenance tasks"
        ]
      }
    ],
    links: [
      { label: "n8n Documentation", href: "https://docs.n8n.io" },
      { label: "Azure Learning Paths", href: "https://learn.microsoft.com/en-us/azure" }
    ]
  },
  {
    slug: "mr-helpful",
    title: "Mr. Helpful",
    subtitle: "AI-Powered Customer Support Automation with n8n, Gemini, and Pinecone",
    image: "/assets/projects/mr-helpful.png",
    cover: "/assets/projects/mr-helpful.png",
    hashnodeUrl: "https://solutions-architect-heaven.hashnode.dev/mr-helpful",
    description:
      "An intelligent n8n workflow that automates customer support operations by classifying incoming emails, generating RAG-based AI responses using Gemini and Pinecone, and routing feature requests directly to developer channels in Discord.",
    tags: ["n8n","Automation","Discord", "Customer Support"],
  
    content: [
      {
        heading: "Overview",
        body: [
          "Mr. Helpful is an AI-powered customer support workflow designed to automate support operations using n8n, Google Gemini, and Pinecone. It classifies incoming support emails, generates empathetic AI responses using retrieval-augmented generation (RAG), and routes feature requests directly to development teams through Discord.",
          "This workflow was originally developed for the Azure Sensei project to handle incoming user queries and feature requests automatically, enabling efficient triage, context-aware responses, and seamless collaboration between support and engineering teams."
        ]
      },
      {
        heading: "Key Features",
        body: [
          "**AI-Driven Email Classification:** Automatically categorizes incoming emails into Support, Feature Request, or Other using Google Gemini’s large language model capabilities.",
          "**RAG-Powered Support Responses:** Uses Pinecone as a vector store to retrieve relevant documentation and generate accurate, contextual replies via Gemini — making Mr. Helpful an intelligent virtual support agent.",
          "**Threaded Gmail Replies:** Replies directly within the existing Gmail thread instead of creating new messages, ensuring clean and auditable communication history.",
          "**Discord Integration for Feature Requests:** Automatically forwards new feature requests to a designated developer channel in Discord for discussion and implementation.",
          "**Scalable & Transparent:** Maintains complete visibility into every workflow execution with structured logs and organized Gmail labeling for better SLA management."
        ]
      },
      {
        heading: "Technical Implementation",
        body: [
          "The workflow was built using n8n’s low-code orchestration engine, connecting cloud services, AI models, and communication tools to create an autonomous support pipeline:",
          "> - **Gmail Trigger:** Detects incoming support or feature request emails in real time.",
          "> - **Gemini Model (Classification):** Analyzes and classifies each email based on its content and intent.",
          "> - **Mr. Helpful (RAG Agent):** Uses Gemini integrated with Pinecone to fetch relevant context from the knowledge base and craft professional, empathetic replies.",
          "> - **Gmail Reply Node:** Sends the AI-generated message as a threaded response and applies a 'Customer Support' label for tracking.",
          "> - **Discord Node:** Sends structured feature request summaries directly to a Discord developer channel for review.",
          "> - **Logging & Control Flow:** Every action is logged and auditable, allowing easy troubleshooting and transparency."
        ]
      },
      {
        heading: "Future Enhancements",
        body: [
          "The next iteration of Mr. Helpful will introduce a human-in-the-loop approval system for feature requests, routing them to the product team before development. Planned upgrades also include multilingual support, analytics dashboards for performance tracking, and integration with project management tools like Jira or Linear."
        ]
      }
    ],
  
    links: [
      { label: "Hashnode Article", href: "https://solutions-architect-heaven.hashnode.dev/mr-helpful" },
      { label: "Workflow Template", href: "https://drive.google.com/file/d/1iOPQtsImj9aaarKeDwZz-eFPONzd3Lrl/view?usp=sharing" },
      { label: "n8n Documentation", href: "https://docs.n8n.io" },
      { label: "Pinecone Docs", href: "https://docs.pinecone.io" },
      { label: "Google Gemini API", href: "https://ai.google.dev/gemini-api/docs" }
    ]
  }
];