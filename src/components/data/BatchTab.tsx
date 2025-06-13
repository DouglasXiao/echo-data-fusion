
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const BatchTab = () => {
  return (
    <div className="h-full p-4">
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* Left Column - Input */}
        <Card className="p-4">
          <h3 className="font-medium mb-4">变量</h3>
          <Textarea 
            placeholder="输入变量定义..."
            className="min-h-[200px] font-mono text-sm"
            defaultValue={`{
  "scene": "night",
  "input_image": "night_parking_lot.png"
}`}
          />
        </Card>

        {/* Middle Column - Ideal Answer */}
        <Card className="p-4">
          <h3 className="font-medium mb-4">理想回答</h3>
          <Textarea 
            placeholder="定义理想回答..."
            className="min-h-[200px] font-mono text-sm"
            defaultValue="{}"
          />
        </Card>

        {/* Right Column - Evaluation */}
        <Card className="p-4">
          <h3 className="font-medium mb-4">评分标准</h3>
          <Textarea 
            placeholder="定义评分标准..."
            className="min-h-[200px] font-mono text-sm"
          />
          
          <div className="mt-4 space-y-2">
            <Button className="w-full">保存测试用例</Button>
            <Button variant="outline" className="w-full">运行批量测试</Button>
          </div>
        </Card>
      </div>

      {/* Interaction History */}
      <Card className="mt-4 p-4">
        <h3 className="font-medium mb-2">交互历史</h3>
        <div className="text-sm text-gray-600">
          <div className="flex items-center justify-between py-1">
            <span>生成变量 'night' by AI</span>
            <span className="text-xs">2025/6/13 16:06:14</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BatchTab;
