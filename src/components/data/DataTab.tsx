
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const DataTab = () => {
  const dataEntries = [
    {
      id: 1,
      scene: 'night',
      inputImage: 'night_parking_lot.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A', 
      方案2得分: 'N/A',
      最新交互: "生成变量 'night'"
    },
    {
      id: 2,
      scene: 'rainy',
      inputImage: 'rainy_parking_lot.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A',
      方案2得分: 'N/A', 
      最新交互: "生成变量 'rainy'"
    },
    {
      id: 3,
      scene: 'occluded',
      inputImage: 'occluded_parking_lot.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A',
      方案2得分: 'N/A',
      最新交互: "生成变量 'occluded'"
    },
    {
      id: 4,
      scene: 'sunny',
      inputImage: 'sunny_parking_lot.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A',
      方案2得分: 'N/A',
      最新交互: "生成变量 'sunny'"
    },
    {
      id: 5,
      scene: 'tree_occlusion',
      inputImage: 'tree_occlusion.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A',
      方案2得分: 'N/A',
      最新交互: "生成变量 'tree_occlusion'"
    },
    {
      id: 6,
      scene: 'dusk',
      inputImage: 'dusk_parking_lot.png',
      理想回答: '{}',
      评分标准: '数据未准备',
      网络点: 'N/A',
      方案1得分: 'N/A',
      方案2得分: 'N/A',
      最新交互: "生成变量 'dusk'"
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <input 
            placeholder="在批量数据中搜索..."
            className="px-3 py-2 border border-gray-300 rounded-lg w-64"
          />
          <Button variant="outline" size="sm">
            批量数据准备
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <div className="space-y-3">
            {dataEntries.map((entry) => (
              <Card key={entry.id} className="p-4">
                <div className="grid grid-cols-7 gap-4 items-center text-sm">
                  <div className="font-mono">
                    <div>{`"scene": "${entry.scene}",`}</div>
                    <div>{`"input_image": "${entry.inputImage}"`}</div>
                  </div>
                  
                  <div className="text-center">{entry.理想回答}</div>
                  
                  <div className="text-center text-gray-500">{entry.评分标准}</div>
                  
                  <div className="text-center">{entry.网络点}</div>
                  
                  <div className="text-center">
                    <Badge variant="secondary" className="text-green-600">
                      {entry.方案1得分}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="secondary" className="text-orange-600">
                      {entry.方案2得分}
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-gray-500">{entry.最新交互}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DataTab;
