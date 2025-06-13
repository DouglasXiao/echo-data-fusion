
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResultsTab = () => {
  const performanceData = [
    { metric: 'night', solution1: 'N/A', solution2: 'N/A' },
    { metric: 'rainy', solution1: 'N/A', solution2: 'N/A' },
    { metric: 'occluded', solution1: 'N/A', solution2: 'N/A' },
    { metric: 'sunny', solution1: 'N/A', solution2: 'N/A' },
    { metric: 'tree_occlusion', solution1: 'N/A', solution2: 'N/A' },
    { metric: 'dusk', solution1: 'N/A', solution2: 'N/A' }
  ];

  return (
    <div className="h-full p-4">
      {/* Results Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">结果总结</h3>
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-4 text-center">
            <h4 className="font-medium text-blue-600">方案 1</h4>
            <div className="text-3xl font-bold text-blue-600 mt-2">0.00</div>
            <div className="text-sm text-gray-500">/ 5</div>
            <div className="text-xs text-gray-400 mt-1">平均得分</div>
          </Card>
          
          <Card className="p-4 text-center">
            <h4 className="font-medium text-green-600">方案 2</h4>
            <div className="text-3xl font-bold text-green-600 mt-2">0.00</div>
            <div className="text-sm text-gray-500">/ 5</div>
            <div className="text-xs text-gray-400 mt-1">平均得分</div>
          </Card>
        </div>
      </div>

      {/* Performance Comparison */}
      <div>
        <h3 className="text-lg font-medium mb-4">性能对比</h3>
        <Card className="p-4">
          <div className="space-y-3">
            {performanceData.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2 border-b border-gray-100 last:border-b-0">
                <div className="font-medium">{item.metric}</div>
                <div className="text-sm text-gray-500">方案 1</div>
                <div className="text-sm text-gray-500">方案 2</div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {item.solution1}
                  </Badge>
                  <span className="mx-2 text-gray-300">vs</span>
                  <Badge variant="outline" className="text-xs">
                    {item.solution2}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResultsTab;
