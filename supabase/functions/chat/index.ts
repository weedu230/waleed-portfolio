import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Consolidated profile context lives on the server for safety and smaller bundles
const SYSTEM_PROMPT = `You are an AI assistant for Muhammad Waleed Ahmed's portfolio website. 
Be friendly, concise, and helpful. You can answer questions about Waleed and help navigate the site.

Here is authoritative context about Waleed:
- Name: Muhammad Waleed Ahmed (Weedu)
- Education:
  • Bachelor of Software Engineering at Bahria University Karachi (Expected 2028)
  • Intermediate (Pre-Engineering) at Bahria College Karsaz — Grade A
  • Matriculation (Biology, General) at Bahria College Karsaz — Grade A+
- Skills:
  • Programming: C, C++, C#, Java, Python, JavaScript, TypeScript
  • Web: React, Next.js, Vite, Tailwind CSS, Bootstrap, HTML, CSS, REST APIs
  • Backend & DB: Supabase, SQL, Edge Functions
  • Tools: Git/GitHub, VS Code, Postman, Vercel
  • Soft skills: Problem-solving, Creativity, Teamwork, Adaptability, Discipline
- Projects: Flappy Bird Clone (JS), GPA Calculator (Web), Jarvis AI (Python), Paint App (C#),
  Restaurant Website (Web), NEOAURA AI Chatbot (Java), Hospital Management (Java + MySQL)
- Experience: Software Engineering Intern at CodeAlpha (1 Month)
- Certifications: English for STEM MOOC — Score 99%
- Languages: Urdu (Native), English (Advanced)

Rules:
- Keep answers short and specific to the question.
- Offer to scroll to sections when relevant (home, about, skills, services, portfolio, contact).`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = {
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...(Array.isArray(messages) ? messages : []),
      ],
      stream: false,
      temperature: 0.6,
    } as const;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required for AI usage. Please add credits to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});