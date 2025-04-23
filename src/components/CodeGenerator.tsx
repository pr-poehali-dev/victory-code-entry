
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

// Простая функция для создания "кода" из сообщения
const encodeMessage = (message: string): string => {
  // Простое кодирование - можно заменить на более сложный алгоритм
  return btoa(message);
};

const CodeGenerator: React.FC = () => {
  const [message, setMessage] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [open, setOpen] = useState(false);

  const handleGenerate = () => {
    if (!message.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите сообщение для кодирования",
        variant: "destructive",
      });
      return;
    }

    const code = encodeMessage(message);
    setGeneratedCode(code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Код скопирован",
      description: "Код был скопирован в буфер обмена",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-victory-red/10 border-victory-red text-victory-red hover:bg-victory-red/20">
          Создать код
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-victory-dark border-victory-red">
        <DialogHeader>
          <DialogTitle className="text-victory-red">Создание кода</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-white">Сообщение</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите сообщение для кодирования..."
              className="border-victory-red/30 bg-black/30 text-white"
            />
          </div>
          <Button 
            onClick={handleGenerate} 
            className="bg-victory-red hover:bg-victory-red/80 text-white"
          >
            Сгенерировать код
          </Button>
          {generatedCode && (
            <div className="flex flex-col gap-2 mt-2">
              <Label htmlFor="code" className="text-white">Сгенерированный код</Label>
              <div className="flex gap-2">
                <Input
                  id="code"
                  value={generatedCode}
                  readOnly
                  className="flex-1 border-victory-red/30 bg-black/30 text-white"
                />
                <Button 
                  onClick={handleCopy} 
                  className="bg-victory-red hover:bg-victory-red/80"
                >
                  Копировать
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeGenerator;
