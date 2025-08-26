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
              text: "MUHAMMAD WALEED",
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
              text: "Full Stack Developer & Software Engineer",
              size: 20,
              color: "666666",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "📧 mwaleed@example.com | 📱 +1 (555) 123-4567 | 🌐 linkedin.com/in/mwaleed",
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
              text: "Passionate Full Stack Developer with 3+ years of experience building scalable web applications, desktop software, and AI-powered solutions. Expertise in modern web technologies, database design, and creating exceptional user experiences. Proven track record of delivering high-quality projects from concept to deployment.",
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
              text: "Bachelor of Science in Computer Science",
              bold: true,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "University of Technology | 2020 - 2024 | GPA: 3.8/4.0",
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
              text: "• Frontend: React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Next.js",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Backend: Node.js, Express.js, Python, Django, RESTful APIs, GraphQL",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Databases: PostgreSQL, MongoDB, MySQL, Supabase, Firebase",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Desktop Development: Electron.js, C#, .NET Framework",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• AI/ML: Python, TensorFlow, OpenAI API, Machine Learning Algorithms",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Tools & Technologies: Git, Docker, AWS, Vercel, CI/CD, Agile Methodologies",
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
        
        // Project 1
        new Paragraph({
          children: [
            new TextRun({
              text: "E-Commerce Platform | React, Node.js, PostgreSQL",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Developed a full-featured e-commerce platform with user authentication, payment processing, and admin dashboard",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented responsive design with 95% mobile compatibility and 40% improved loading speeds",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Integrated Stripe payment gateway and real-time inventory management",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Project 2
        new Paragraph({
          children: [
            new TextRun({
              text: "AI Task Management App | React, Python, OpenAI API",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Built an intelligent task management system with AI-powered task prioritization and scheduling",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented natural language processing for smart task creation and categorization",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Achieved 30% increase in user productivity through AI recommendations",
              size: 16,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Space

        // Project 3
        new Paragraph({
          children: [
            new TextRun({
              text: "Desktop Inventory System | Electron.js, SQLite",
              bold: true,
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Developed cross-platform desktop application for inventory management with offline capabilities",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented barcode scanning, automated reorder alerts, and comprehensive reporting",
              size: 16,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Reduced inventory tracking time by 60% for small to medium businesses",
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

        // Achievements
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "ACHIEVEMENTS & CERTIFICATIONS",
              bold: true,
              size: 20,
              color: "2E74B5",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• AWS Certified Developer Associate (2023)",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Google Cloud Professional Developer (2023)",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Winner of University Hackathon 2023 - Best Web Application",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Open Source Contributor - 50+ GitHub repositories",
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