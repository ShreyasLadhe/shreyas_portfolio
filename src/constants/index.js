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
    href: "https://clouddevopsfornewbies.hashnode.dev",
    icon: "/assets/socials/hashnode.svg",
  },
];

export const experiences = [
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
        isCurrent: true
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
    img: "https://media.licdn.com/dms/image/v2/C5603AQGKRbvieGxz1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629022924164?e=1757548800&v=beta&t=bUjPPXoMl8y7qAoEizzHPmhUTPHZipCI_XfyMnSQRO0",
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
    issuer: "Oracle Data <br/> Platform",
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
  }
];