
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const SolutionsTab = () => {
  return (
    <div className="h-full p-4">
      <Tabs defaultValue="solution1" className="h-full">
        <TabsList className="mb-4">
          <TabsTrigger value="solution1">方案 1</TabsTrigger>
          <TabsTrigger value="solution2">方案 2</TabsTrigger>
        </TabsList>

        <TabsContent value="solution1" className="h-full">
          <Card className="p-6 h-full">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">提示词</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  作为一款先进的图像识别AI，你的任务是分析给定的停车场图片，并准确地识别图像中的车辆总数。
                </p>
                <br />
                <p className="text-sm">
                  请遵循以下规则：<br />
                  1. 仔细算新、SUV、卡车、面包车等所有可见的机动车辆<br />
                  2. 以JSON格式返回结果，包含一个键"vehicle_count"。
                </p>
                <br />
                <p className="text-sm">
                  图片：{`{input_image}`}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">模型及推理参数</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm">{`{
  "model": "yolov8n",
  "confidence": 0.25,
  "iou": 0.45
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">代码</h3>
              <div className="bg-gray-900 text-white p-4 rounded-lg">
                <pre className="text-sm">{`# ... 方案 1 代码 ...
from ultralytics import YOLO
model = YOLO('yolov8n.pt')
# ... (方案 1 specific logic)`}</pre>
              </div>
              <Button className="mt-4">编辑</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="solution2" className="h-full">
          <Card className="p-6 h-full">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">提示词</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  请分析这张停车场图片，识别并统计其中的车辆数量。使用深度学习方法进行检测。
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">模型及推理参数</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm">{`{
  "model": "detectron2",
  "confidence": 0.3,
  "iou": 0.5
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">代码</h3>
              <div className="bg-gray-900 text-white p-4 rounded-lg">
                <pre className="text-sm">{`# ... 方案 2 代码 ...
import detectron2
# ... (方案 2 specific logic)`}</pre>
              </div>
              <Button className="mt-4">编辑</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SolutionsTab;
