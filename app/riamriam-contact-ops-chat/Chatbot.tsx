"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text:
            language === "en"
              ? "Hello! I am the RPDN Peace Assistant. Ask me anything about our peace accords, 7 core programs, border corridors, or our history!"
              : "Habari! Mimi ni Msaidizi wa Amani wa RPDN. Niulize jambo lolote kuhusu mikataba yetu ya amani, mipango yetu 7, maeneo ya mipakani, au historia yetu!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  }, [language, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const knowledgeBase = {
    en: [
      {
        keys: ["riamriam", "meaning", "name", "what does", "origin"],
        answer:
          "The name 'RiamRiam' originates from the Ateker cultural tradition meaning 'meeting and meeting again'. It symbols: continuous dialogue, reconciliation, cooperation, and peaceful coexistence. Historically, RiamRiam gatherings served as traditional peace forums where elders, women, and youth resolved conflicts under acacia trees."
      },
      {
        keys: ["founders", "leadership", "ceo", "eripete", "losikiria", "locham", "lotesiro"],
        answer:
          "RIAMRIAM is led by experienced community experts, including Alexander Losikiria (CEO and former Sub-County Administrator), Mr. Peter Eripete (distinguished national intelligence expert), Seline Locham (eminent grassroots women's empowerment leader), and Mr. Peter Lotesiro (pastoral livelihoods expert)."
      },
      {
        keys: ["programs", "pillars", "what do you do", "activities", "areas"],
        answer:
          "We operate 7 core programs: 1. Peacebuilding & Conflict Resolution, 2. Governance & Civic Engagement, 3. Livelihoods & Livelihoods Empowerment (including Climate Resilience), 4. Gender & Social Inclusion (Women Empowerment), 5. Humanitarian & Emergency Response, 6. Youth Development, and 7. Education & Capacity Building."
      },
      {
        keys: ["where", "operations", "turkana", "karamoja", "toposa", "nyangatom", "ethiopia", "uganda", "sudan"],
        answer:
          "Our operations span vulnerable pastoral zones across the East African borderlands: Turkana County (Kenya), Karamoja Cluster (Uganda border), Toposa Corridor (South Sudan border), Nyangatom Corridor (Ethiopia border), and the wider Ateker agricultural and dry-season pastoral migration pathways."
      },
      {
        keys: ["donate", "money", "stripe", "support", "paypal", "m-pesa", "mtn"],
        answer:
          "You can securely donate by clicking the 'Donate' button in the menu. We support Credit Cards, PayPal, and Mobile Money (M-Pesa/MTN). 100% of donations fund border dialogue councils, peace markets, and solar boreholes."
      },
      {
        keys: ["volunteer", "apply", "join", "work"],
        answer:
          "To volunteer, navigate to the Partnership Portal on our website, fill out the Volunteer application form detailing your interest areas, and our field team will contact you!"
      },
      {
        keys: ["early warning", "ewer", "sms", "reporting"],
        answer:
          "Our Early Warning and Early Response (EWER) system utilizes SMS-based reporting where localized peace monitors transmit unusual cattle herds or armed movements. This allows traditional elders and security agencies to mediate and de-escalate potential cattle raids before violence breaks out."
      }
    ],
    sw: [
      {
        keys: ["riamriam", "maana", "jina", "asili"],
        answer:
          "Jina 'RiamRiam' linatokana na utamaduni wa Ateker likiwa na maana ya 'kukutana na kukutana tena'. Inasimamia: mazungumzo endelevu, upatanisho, ushirikiano, na kuishi pamoja kwa amani. Kihistoria, mikusanyiko ya RiamRiam ilikuwa majukwaa ya amani ya wazee chini ya miti."
      },
      {
        keys: ["viongozi", "uongozi", "ceo", "eripete", "losikiria", "locham", "lotesiro"],
        answer:
          "RIAMRIAM inaongozwa na wataalamu akiwemo Alexander Losikiria (CEO), Mr. Peter Eripete (mtaalamu wa usalama), Seline Locham (mwanaharakati wa wanawake), na Mr. Peter Lotesiro (mtaalamu wa maisha ya wafugaji)."
      },
      {
        keys: ["mipango", "nguzo", "shughuli", "kazi zenu"],
        answer:
          "Tuna mipango 7 ya kimsingi: 1. Ujenzi wa Amani, 2. Utawala na Ushiriki, 3. Uwezeshaji wa Maisha, 4. Wanawake na Ujumuishi, 5. Misaada ya Kibinadamu, 6. Maendeleo ya Vijana, na 7. Utafiti na Elimu."
      },
      {
        keys: ["wapi", "maeneo", "turkana", "karamoja", "toposa", "nyangatom", "ethiopia", "uganda", "sudan"],
        answer:
          "Tunafanya kazi kwenye mipaka ya Afrika Mashariki: Kaunti ya Turkana (Kenya), Ukanda wa Karamoja (Uganda), Ukanda wa Toposa (Sudan Kusini), na Ukanda wa Nyangatom (Ethiopia)."
      }
    ]
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse =
        language === "en"
          ? "Thank you for asking. RIAMRIAM is dedicated to sustainable peace. Could you clarify your question about our program areas or borders?"
          : "Asante kwa kuuliza. RIAMRIAM imejitolea kwa amani endelevu. Je, unaweza kufafanua swali lako?";

      const kb = language === "en" ? knowledgeBase.en : knowledgeBase.sw;

      for (const item of kb) {
        if (item.keys.some((key) => currentInput.includes(key))) {
          botResponse = item.answer;
          break;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const quickQuestions =
    language === "en"
      ? [
          { q: "What does RIAMRIAM mean?", tag: "meaning" },
          { q: "Tell me about RPDN programs.", tag: "programs" },
          { q: "Where does RPDN operate?", tag: "operations" }
        ]
      : [
          { q: "Maana ya RIAMRIAM?", tag: "meaning" },
          { q: "Mipango ya RPDN?", tag: "programs" },
          { q: "Wapi RPDN inafanya kazi?", tag: "operations" }
        ];

  const handleQuickQuestion = (text: string) => {
    setInput(text);
    setTimeout(() => {
      const btn = document.getElementById("chat-send-btn");
      if (btn) btn.click();
    }, 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal hover:bg-teal/90 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-gold/50 cursor-pointer animate-bounce"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] rounded-2xl shadow-2xl border border-ink/20 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 bg-bone">
          <div className="bg-gradient-to-r from-teal to-forest px-4 py-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-serif font-bold tracking-wide">RPDN Peace Assistant</h3>
                <span className="block text-[10px] text-white/80 font-semibold">Active Resiliency Guide</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-bone">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`p-2 rounded-xl shrink-0 ${
                    msg.sender === "user"
                      ? "bg-gold/10 text-gold"
                      : "bg-teal/10 text-teal"
                  }`}
                >
                  {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gold text-ink font-semibold rounded-tr-none"
                      : "bg-paper text-ink border border-ink/5 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                  <span className="block text-[9px] text-ink/40 text-right mt-1 font-bold">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 mr-auto max-w-[80%] items-center">
                <div className="bg-teal/10 text-teal p-2 rounded-xl">
                  <Bot className="h-4 w-4 animate-spin" />
                </div>
                <div className="bg-paper px-4 py-2.5 rounded-2xl text-xs text-ink/60 italic border border-ink/5 rounded-tl-none">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="bg-bone px-4 pb-2 pt-1 flex gap-2 overflow-x-auto border-t border-ink/5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(q.q)}
                className="bg-paper border border-teal/20 text-[10px] text-teal hover:bg-teal hover:text-white px-2.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all duration-200 shadow-sm cursor-pointer"
              >
                {q.q}
              </button>
            ))}
          </div>

          <div className="bg-paper p-3 border-t border-ink/10 flex gap-2">
            <input
              type="text"
              placeholder={language === "en" ? "Ask about RIAMRIAM..." : "Uliza kuhusu RIAMRIAM..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              className="flex-1 bg-bone border border-ink/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal"
            />
            <button
              id="chat-send-btn"
              onClick={handleSend}
              className="bg-teal hover:bg-teal/90 text-white p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-md"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
