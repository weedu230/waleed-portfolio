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
              size: 36,
              color: "2563EB"
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Software Engineer & Full Stack Developer",
              size: 24,
              color: "64748B"
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Contact Information
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "📧 mwaleed256@gmail.com | 📞 03332406306 | 📍 Karachi, Pakistan",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "🔗 github.com/weedu230 | 💼 linkedin.com/in/weedu",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Professional Summary
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SUMMARY",
              bold: true,
              size: 24,
              color: "2563EB"
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Passionate Software Engineer with expertise in full-stack development, object-oriented programming, and modern web technologies. Proven ability to design and implement scalable applications across multiple platforms. Strong problem-solving skills with a focus on clean code, efficient algorithms, and user-centric design. Experienced in developing diverse projects ranging from AI assistants to enterprise management systems.",
              size: 22
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Education
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EDUCATION",
              bold: true,
              size: 24,
              color: "2563EB"
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bachelor of Software Engineering",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria University Karachi | 2020 - 2024",
              size: 20,
              italics: true
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Intermediate (Pre-Engineering)",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz | Percentage: 82%",
              size: 20,
              italics: true
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Matriculation (Science)",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Bahria College Karsaz | Percentage: 92%",
              size: 20,
              italics: true
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Technical Skills
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "TECHNICAL SKILLS",
              bold: true,
              size: 24,
              color: "2563EB"
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Programming Languages: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "C, C++, C#, Java, Python, JavaScript",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Web Technologies: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "HTML, CSS, React, Next.js, Bootstrap",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Database & Backend: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "SQL, MySQL, Database Design, API Development, System Design",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Development Tools: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "Git, GitHub, GitLab, VS Code, Visual Studio, NetBeans, Postman",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Concepts: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "OOP, Design Patterns, Software Architecture, Algorithms",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Projects
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "KEY PROJECTS",
              bold: true,
              size: 24,
              color: "2563EB"
            }),
          ],
        }),

        // Project 1
        new Paragraph({
          children: [
            new TextRun({
              text: "Hospital Management System | Java + MySQL",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Comprehensive hospital management system with patient records, appointment scheduling, and staff management",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented database design with MySQL for efficient data management",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Project 2
        new Paragraph({
          children: [
            new TextRun({
              text: "NeoAura AI Chatbot Management System | Java",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• AI-driven chatbot management system with intelligent response generation",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Enhanced user interaction and automation capabilities",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Project 3
        new Paragraph({
          children: [
            new TextRun({
              text: "Jarvis AI Assistant | Python",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Personal AI assistant with voice recognition and automation features",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Implemented daily task automation and intelligent command processing",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Project 4
        new Paragraph({
          children: [
            new TextRun({
              text: "Paint Application | C#",
              bold: true,
              size: 22
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Desktop drawing application with freehand sketching and color picker",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Adjustable brush sizes and digital art creation capabilities",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Services
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "PROFESSIONAL SERVICES",
              bold: true,
              size: 24,
              color: "2563EB"
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Custom Software Development: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "Full-stack applications, desktop software, automation tools",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Web Development: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "Responsive websites, modern UI/UX, performance optimization",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• System Integration: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "API development, third-party integration, system optimization",
              size: 20
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• Cross-Platform Solutions: ",
              bold: true,
              size: 20
            }),
            new TextRun({
              text: "Mobile-first design, progressive web apps, cloud integration",
              size: 20
            }),
          ],
        }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};

export const downloadCV = async () => {
  try {
    const buffer = await generateCV();
    const blob = new Blob([buffer], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
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