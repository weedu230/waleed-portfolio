import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Waleed's AI assistant. I can help you learn about his qualifications, skills, projects, and navigate through his portfolio. What would you like to know?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load API key from localStorage
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const waleedInfo = `
    Name: Muhammad Waleed Ahmed (Weedu)
    Education: 
    - Bachelor of Software Engineering at Bahria University Karachi (Expected 2028)
    - Intermediate (Pre-Engineering) at Bahria College Karsaz - Grade A
    - Matriculation (Science) at Bahria College Karsaz - Grade A+
    
    Contact:
    - Email: mwaleedahmed256@gmail.com
    - Phone: 0333-2406306
    - LinkedIn: linkedin.com/in/weedu
    - GitHub: github.com/weedu230
    - Location: Karachi, Pakistan
    
    Skills:
    - Programming Languages: C, C++, C#, Java, Python, JavaScript
    - Web Development: React, Next.js, Bootstrap, HTML, CSS
    - Concepts: OOP, Software Architecture
    - Tools: Git/GitHub, VS Code, Postman
    - Soft Skills: Problem-solving, Creativity, Teamwork, Adaptability, Discipline
    
    Projects:
    1. Flappy Bird Clone (JavaScript) - Recreated the classic game with responsive design
    2. GPA Calculator (HTML/CSS/JS) - Interactive tool for accurate GPA calculation
    3. Jarvis AI Assistant (Python) - Voice-enabled assistant executing system commands
    4. Paint Application (C#) - Desktop app with brush tools, shapes, and color options
    5. Restaurant Website (HTML/CSS/JS) - Functional site with menu and order management
    6. NEOAURA – AI Chatbot System (Java) - NLP-based chatbot for interactive conversations
    7. Hospital Management System (Java + MySQL) - Comprehensive system with patient records and appointment scheduling
    
    Work Experience:
    - Software Engineering Intern at CodeAlpha (1 Month) - Assisted in software development and testing, collaborated in real-world project workflows
    
    Certifications:
    - English for Science, Technology, Engineering, and Mathematics (STEM) MOOC - Score: 99%
    
    Languages:
    - Urdu (Native)
    - English (Advanced - STEM specialization, certified 99%)
    
    Professional Summary:
    Passionate Software Engineering student with expertise in developing scalable, efficient applications. Skilled in OOP, Frontend Development, and Software Architecture. Successfully built diverse projects from AI assistants to interactive applications, combining problem-solving with creativity.
    
    Website Sections:
    - Home/Hero: Introduction and main call-to-actions
    - About: Personal bio and education details
    - Skills: Technical skills organized by categories
    - Services: Development services offered
    - Portfolio: Showcase of projects with descriptions
    - Contact: Contact information and contact form
  `;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Navigated",
        description: `Scrolled to ${sectionId} section`,
      });
    }
  };

  const getNavigationResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('home') || lowerMessage.includes('top') || lowerMessage.includes('beginning')) {
      scrollToSection('home');
      return "I've scrolled to the home section for you!";
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('bio') || lowerMessage.includes('education')) {
      scrollToSection('about');
      return "I've scrolled to the about section where you can learn more about Waleed's background and education!";
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technical') || lowerMessage.includes('programming')) {
      scrollToSection('skills');
      return "I've scrolled to the skills section showcasing Waleed's technical expertise!";
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('development')) {
      scrollToSection('services');
      return "I've scrolled to the services section to show what Waleed can offer!";
    }
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work')) {
      scrollToSection('portfolio');
      return "I've scrolled to the portfolio section to showcase Waleed's projects!";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('message')) {
      scrollToSection('contact');
      return "I've scrolled to the contact section where you can get in touch with Waleed!";
    }
    
    return null;
  };

  const callOpenAI = async (userMessage: string): Promise<string> => {
    if (!apiKey) {
      throw new Error('OpenAI API key is required');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant for Muhammad Waleed Ahmed's portfolio website. You help visitors learn about Waleed and navigate his website. 

Here's comprehensive information about Waleed:
${waleedInfo}

Guidelines:
- Be friendly, professional, and helpful
- Answer questions about Waleed's qualifications, skills, projects, education, and experience
- Keep responses concise but informative
- If asked about navigation, mention that you can help them navigate to different sections
- If someone asks to see a specific section, let them know you'll scroll to it
- Always refer to him as "Waleed" or "Muhammad Waleed Ahmed"
- Highlight his key strengths: problem-solving, creativity, adaptability, and continuous learning`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Check for navigation requests first
    const navigationResponse = getNavigationResponse(inputMessage);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      let assistantResponse: string;
      
      if (navigationResponse) {
        assistantResponse = navigationResponse;
      } else if (apiKey) {
        assistantResponse = await callOpenAI(inputMessage);
      } else {
        assistantResponse = "I'd love to help you learn about Waleed! However, I need an OpenAI API key to provide detailed responses. You can set one by clicking the settings icon. In the meantime, I can help you navigate to different sections of the website - just ask me to show you the about, skills, portfolio, or contact sections!";
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantResponse,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey);
      setShowApiKeyInput(false);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved locally.",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-brand-sky hover:bg-brand-sky/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-brand-sky text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <CardTitle className="text-lg">Waleed's AI Assistant</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                >
                  <Settings className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 border-b bg-secondary/20">
              <div className="space-y-2">
                <label className="text-sm font-medium">OpenAI API Key:</label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="sk-..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="text-sm"
                  />
                  <Button size="sm" onClick={handleSaveApiKey}>
                    Save
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your API key is stored locally and only used for AI responses.
                </p>
              </div>
            </div>
          )}

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'assistant' && (
                    <div className="w-8 h-8 bg-brand-sky/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-brand-sky" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-brand-sky text-white'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-brand-orange" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 bg-brand-sky/10 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-brand-sky" />
                  </div>
                  <div className="bg-secondary p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-sky/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-sky/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-brand-sky/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about Waleed's qualifications, skills, or navigate the site..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="icon"
                  className="bg-brand-sky hover:bg-brand-sky/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;