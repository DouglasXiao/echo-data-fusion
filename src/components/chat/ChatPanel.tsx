
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Upload } from 'lucide-react';
import { Message } from '@/pages/Chat';

interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (content: string, files?: File[]) => void;
  onButtonClick: (action: string, data?: any) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ messages, onSendMessage, onButtonClick }) => {
  const [input, setInput] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = () => {
    if (!input.trim() && files.length === 0) return;
    
    onSendMessage(input, files);
    setInput('');
    setFiles([]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">对话任务</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <Card className={`max-w-[80%] p-3 ${
              message.isUser 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border border-gray-200'
            }`}>
              <p className="whitespace-pre-wrap">{message.content}</p>
              
              {/* Message Buttons */}
              {message.buttons && (
                <div className="mt-3 space-y-2">
                  {message.buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => onButtonClick(button.action, button.data)}
                      className={message.isUser ? 'border-white text-white hover:bg-white hover:text-blue-500' : ''}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              )}
            </Card>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        {files.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {files.map((file, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {file.name}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex space-x-2">
          <Input
            placeholder="输入消息或指令..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className="flex-1"
          />
          
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="chat-file-upload"
          />
          <label htmlFor="chat-file-upload">
            <Button variant="outline" size="icon" asChild>
              <span className="cursor-pointer">
                <Upload className="w-4 h-4" />
              </span>
            </Button>
          </label>
          
          <Button onClick={handleSubmit}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
