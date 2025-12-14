import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

export const generateCV = async () => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Header with Name
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "MUHAMMAD WALEED AHMED",
              bold: true,
              size: 32,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Software Engineering Student | Full-Stack, Desktop & Mobile Application Developer",
              size: 20,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Email: mwaleedahmed256@gmail.com | Phone: 0333-2406306",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "GitHub: github.com/weedu230 | LinkedIn: linkedin.com/in/weedu230",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Portfolio: waleed-portfolio-omega.vercel.app",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Professional Summary
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SUMMARY",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Software Engineering student at Bahria University Karachi focused on building real-world digital products across web, desktop, and mobile platforms. Experienced in designing scalable, performance-oriented applications using modern development practices and clean architecture principles. Strong foundation in Object-Oriented Programming and full development lifecycle, with hands-on experience delivering functional projects ranging from AI-powered systems to enterprise-level applications. Adaptable, detail-oriented, and continuously evolving toward full-stack excellence.",
              size: 20,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Education
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EDUCATION",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bachelor of Software Engineering",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria University Karachi — Expected 2028",
              size: 18,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Intermediate (Pre-Engineering)",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz — Grade A",
              size: 18,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Matriculation (Science)",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz — Grade A+",
              size: 18,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Technical Skills
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "TECHNICAL SKILLS",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({ text: "Programming Languages: ", bold: true, size: 18 }),
            new TextRun({ text: "C, C++, C#, Java, Python, JavaScript", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Frontend & Web: ", bold: true, size: 18 }),
            new TextRun({ text: "React, Next.js, HTML, CSS, Bootstrap", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Backend & Databases: ", bold: true, size: 18 }),
            new TextRun({ text: "APIs, SQL, MySQL", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Core Concepts: ", bold: true, size: 18 }),
            new TextRun({ text: "Object-Oriented Programming, Software Architecture", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Tools & Platforms: ", bold: true, size: 18 }),
            new TextRun({ text: "Git, GitHub, VS Code, Postman, Vercel", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Soft Skills: ", bold: true, size: 18 }),
            new TextRun({ text: "Problem-solving, Team collaboration, Adaptability, Discipline", size: 18 }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Work Experience
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "WORK EXPERIENCE",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Software Engineering Intern",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "CodeAlpha — 1 Month",
              size: 18,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Assisted in software development and testing tasks within real-world project environments",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Collaborated with team members using Git-based version control workflows",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Gained practical exposure to professional development standards and teamwork",
              size: 18,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Projects
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROJECTS",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // STANS
        new Paragraph({
          children: [
            new TextRun({
              text: "STANS – Student Academic Navigation System (Web Application)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Designed and developed an academic support platform to assist students with structured academic navigation",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented a clean, user-focused interface with scalable architecture",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Focused on usability, performance, and real-world academic workflows",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // PDF Master
        new Paragraph({
          children: [
            new TextRun({
              text: "PDF Master (React Web Application)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Built a comprehensive PDF editing and conversion tool with merge, split, and manipulation features",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Live: pdf-master.base44.app",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // ReqBot
        new Paragraph({
          children: [
            new TextRun({
              text: "ReqBot (Next.js + AI)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Developed an AI-powered business analyst tool for requirement elicitation",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented voice-enabled conversational interface",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/reqbot | Live: reqbot-sigma.vercel.app",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Hospital Management System
        new Paragraph({
          children: [
            new TextRun({
              text: "Hospital Management System (Java, MySQL)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Developed an enterprise-style system for patient records, appointments, and staff management",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/hospital-management-system",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Jarvis AI
        new Paragraph({
          children: [
            new TextRun({
              text: "Jarvis AI Assistant (Python)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Created a voice-enabled personal assistant with automation capabilities",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/jarvis-ai-assistant",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // NeoAura
        new Paragraph({
          children: [
            new TextRun({
              text: "NeoAura Chatbot (Java)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Built an AI-driven chatbot management system with intelligent response handling",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/neoaura-chatbot",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Paint Application
        new Paragraph({
          children: [
            new TextRun({
              text: "Paint Application (C# Desktop Application)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Developed a desktop drawing tool with freehand sketching and adjustable brush sizes",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/paint-application",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Flappy Bird
        new Paragraph({
          children: [
            new TextRun({
              text: "Flappy Bird Clone (JavaScript)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Browser-based arcade game featuring smooth animations and responsive controls",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/flappy-bird-clone",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Restaurant Website
        new Paragraph({
          children: [
            new TextRun({
              text: "Restaurant Website (HTML, CSS, JavaScript)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Designed a responsive restaurant website with modern UI principles",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/restaurant-website",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // GPA Calculator
        new Paragraph({
          children: [
            new TextRun({
              text: "GPA Calculator (HTML, CSS, JavaScript)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Built an interactive GPA calculation tool for students",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• GitHub: github.com/weedu230/gpa-calculator",
              size: 16,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Professional Services
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SERVICES",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Web application development with responsive and scalable design",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Desktop and cross-platform application development",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• AI feature integration and automation solutions",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Database design and optimization",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Technical consulting including code review and architecture planning",
              size: 18,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Certifications
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "CERTIFICATIONS",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({
              text: "English for Science, Technology, Engineering, and Mathematics (STEM)",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Online Professional English Network (OPEN)",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Sponsored by the U.S. Department of State",
              size: 16,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Score: 99%",
              size: 16,
              bold: true,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Languages
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "LANGUAGES",
              bold: true,
              size: 22,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [
            new TextRun({ text: "Urdu: ", bold: true, size: 18 }),
            new TextRun({ text: "Native", size: 18 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "English: ", bold: true, size: 18 }),
            new TextRun({ text: "Advanced (STEM specialization, certified)", size: 18 }),
          ],
        }),
      ],
    }],
  });

  return doc;
};

export const downloadCV = async () => {
  try {
    const doc = await generateCV();
    
    const blob = await Packer.toBlob(doc);
    
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammad_Waleed_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating CV:', error);
    throw error;
  }
};
