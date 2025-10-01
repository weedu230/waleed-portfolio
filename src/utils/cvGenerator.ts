import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';

export const generateCV = async () => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Header with Name and Title
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
              text: "Motivated Software Engineering Student | Future Full-Stack Developer",
              size: 20,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "📧 mwaleedahmed256@gmail.com | 📱 0333-2406306",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "💻 GitHub: github.com/weedu230 | 🔗 LinkedIn: linkedin.com/in/weedu230",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "🌐 Portfolio: waleed-portfolio.lovable.app",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Professional Summary
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SUMMARY",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Passionate Software Engineering student at Bahria University Karachi with expertise in developing scalable, efficient, and high-performance applications. Skilled in Object-Oriented Programming, Frontend Development, and Software Architecture, with hands-on experience across C++, Java, Python, JavaScript, and more. Successfully built diverse projects, from AI assistants to interactive applications, combining problem-solving with creativity. Adaptable, detail-oriented, and motivated to grow into a full-stack developer while continuously learning emerging technologies.",
              size: 20,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Education
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EDUCATION",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria University Karachi — Bachelor of Software Engineering (Expected 2028)",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz — Intermediate (Pre-Engineering), Grade A",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz — Matriculation (Science), Grade A+",
              size: 18,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Technical Skills
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "TECHNICAL SKILLS",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Programming: C, C++, C#, Java, Python, JavaScript",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Web Development: React, Next.js, Bootstrap, HTML, CSS",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Concepts: OOP, Software Architecture",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Tools: Git/GitHub, VS Code, Postman",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Soft Skills: Problem-solving, Creativity, Teamwork, Adaptability, Discipline",
              size: 18,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Projects
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "KEY PROJECTS",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        
        // Work Experience
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "WORK EXPERIENCE",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Software Engineering Intern — CodeAlpha | 1 Month",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Assisted in software development and testing",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Collaborated in real-world project workflows",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Strengthened version control and teamwork skills (Git)",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Projects
        new Paragraph({
          children: [
            new TextRun({
              text: "PDF Master (React/Web App): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Comprehensive PDF editing and conversion tool with merge, split, and manipulation features | Live: pdf-master.base44.app",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ReqBot (Next.js + AI): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "AI-powered business analyst for requirement elicitation with voice-enabled conversational interface | GitHub: github.com/weedu230/reqbot | Live: reqbot-sigma.vercel.app",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Hospital Management System (Java + MySQL): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Enterprise application with patient records, appointment scheduling, and staff management | GitHub: github.com/weedu230/hospital-management-system",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Jarvis AI Assistant (Python): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Voice-enabled personal assistant with automation features | GitHub: github.com/weedu230/jarvis-ai-assistant",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "NeoAura Chatbot (Java): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "AI-driven chatbot management system with intelligent responses | GitHub: github.com/weedu230/neoaura-chatbot",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Paint Application (C#): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Desktop drawing tool with freehand sketching and adjustable brush sizes | GitHub: github.com/weedu230/paint-application",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Flappy Bird Clone (JavaScript): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Browser-based arcade game with smooth animations | GitHub: github.com/weedu230/flappy-bird-clone",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Restaurant Website (HTML/CSS/JS): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Responsive restaurant website with modern UI | GitHub: github.com/weedu230/restaurant-website",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "GPA Calculator (HTML/CSS/JS): ",
              bold: true,
              size: 16,
            }),
            new TextRun({
              text: "Interactive web tool for GPA calculation | GitHub: github.com/weedu230/gpa-calculator",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Services
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SERVICES",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Web Development: Custom responsive websites and web applications",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Desktop Applications: Cross-platform software solutions for business automation",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• AI Integration: Smart features and automation using machine learning",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Database Design: Efficient database architecture and optimization",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Technical Consulting: Code review, architecture planning, and performance optimization",
              size: 18,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Certifications
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "CERTIFICATIONS",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "English for Science, Technology, Engineering, and Mathematics (STEM) MOOC",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Online Professional English Network (OPEN), sponsored by the U.S. Department of State",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Score: 99% - Developed advanced STEM communication skills",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Languages
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "LANGUAGES",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Urdu — Native",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• English — Advanced (STEM specialization, certified 99%)",
              size: 18,
            }),
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
    
    // Use browser-compatible blob generation
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