
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MessageDecoderProps {
  message: string | null;
}

const MessageDecoder: React.FC<MessageDecoderProps> = ({ message }) => {
  return (
    <Card className="w-full h-full min-h-[300px] border-victory-red border-2 bg-victory-dark">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold text-victory-red">
          Расшифровка
        </CardTitle>
      </CardHeader>
      <CardContent>
        {message ? (
          <ScrollArea className="h-[200px] p-4 rounded-md bg-black/30 border border-victory-red/30">
            <div className="text-white whitespace-pre-wrap">{message}</div>
          </ScrollArea>
        ) : (
          <div className="h-[200px] flex items-center justify-center text-white/50 p-4 rounded-md bg-black/30 border border-victory-red/30">
            Здесь появится расшифрованное сообщение...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MessageDecoder;
