
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface CodeInputProps {
  onSubmit: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onSubmit }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onSubmit(code);
    } else {
      toast({
        title: "Ошибка",
        description: "Введите код для расшифровки",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full h-full min-h-[300px] border-victory-red border-2 bg-victory-dark">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold text-victory-red">
          Введите код
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Введите секретный код..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border-2 border-victory-red/30 bg-black/30 text-white placeholder:text-gray-400 focus:border-victory-red"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-victory-red hover:bg-victory-red/80 text-white font-bold"
          >
            Расшифровать
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CodeInput;
