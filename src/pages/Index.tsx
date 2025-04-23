
import React, { useState } from "react";
import CodeInput from "@/components/CodeInput";
import CodeGenerator from "@/components/CodeGenerator";
import MessageDecoder from "@/components/MessageDecoder";

const Index: React.FC = () => {
  const [decodedMessage, setDecodedMessage] = useState<string | null>(null);

  const handleCodeSubmit = (code: string) => {
    try {
      // Простая расшифровка - декодирование base64
      const decoded = atob(code);
      setDecodedMessage(decoded);
    } catch (error) {
      setDecodedMessage("Ошибка расшифровки: Неверный формат кода");
    }
  };

  return (
    <div className="min-h-screen bg-victory-dark victory-container">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img 
                src="/placeholder.svg" 
                alt="Родина-мать зовёт" 
                className="w-full h-full object-contain animate-fade-in opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-victory-dark opacity-30"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-victory-red mb-2 font-victoryTitle animate-fade-in">
            80 ЛЕТ ВЕЛИКОЙ ПОБЕДЫ
          </h1>
          <p className="text-white/80 text-lg">Секретные сообщения военного времени</p>
          
          <div className="mt-6 flex justify-center">
            <CodeGenerator />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <CodeInput onSubmit={handleCodeSubmit} />
            </div>
            
            <div className="flex items-center justify-center">
              <MessageDecoder message={decodedMessage} />
            </div>
          </div>
        </main>
        
        <footer className="mt-16 text-center text-white/60 text-sm">
          <p>© 2023 — Проект в честь 80-летия Победы в Великой Отечественной войне</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
