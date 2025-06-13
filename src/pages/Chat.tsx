
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatPanel from '@/components/chat/ChatPanel';
import DataPanel from '@/components/data/DataPanel';

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  buttons?: Array<{
    text: string;
    action: string;
    data?: any;
  }>;
}

const Chat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState('data');

  useEffect(() => {
    // Initialize with data from welcome page
    const { initialMessage, initialFiles } = location.state || {};
    
    if (initialMessage || initialFiles) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: initialMessage || '已上传文件进行分析',
        isUser: true,
        timestamp: new Date()
      };

      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '好的，任务已收到。我为您配置了两个备选方案...我们先去"数据"标签页难道一些测试用例吧？',
        isUser: false,
        timestamp: new Date(),
        buttons: [
          {
            text: '批量数据准备',
            action: 'switchTab',
            data: { tab: 'batch' }
          }
        ]
      };

      setMessages([userMessage, systemMessage]);
    }
  }, [location.state]);

  const handleSendMessage = async (content: string, files?: File[]) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate API response
    setTimeout(() => {
      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '我已经分析了您的请求。根据数据显示，当前停车场的占用率和效率如下所示。',
        isUser: false,
        timestamp: new Date(),
        buttons: [
          {
            text: '查看详细数据',
            action: 'switchTab',
            data: { tab: 'data' }
          },
          {
            text: '性能对比',
            action: 'switchTab',
            data: { tab: 'results' }
          }
        ]
      };

      setMessages(prev => [...prev, systemMessage]);
    }, 1500);
  };

  const handleButtonClick = (action: string, data?: any) => {
    if (action === 'switchTab' && data?.tab) {
      setActiveTab(data.tab);
    }
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Chat Panel - Left Side */}
      <div className="w-1/2 border-r border-gray-200">
        <ChatPanel 
          messages={messages}
          onSendMessage={handleSendMessage}
          onButtonClick={handleButtonClick}
        />
      </div>

      {/* Data Panel - Right Side */}
      <div className="w-1/2">
        <DataPanel activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Chat;
