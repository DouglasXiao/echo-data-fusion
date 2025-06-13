
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataTab from './DataTab';
import SolutionsTab from './SolutionsTab';
import ResultsTab from './ResultsTab';
import BatchTab from './BatchTab';

interface DataPanelProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DataPanel: React.FC<DataPanelProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">停车场数据识别</h2>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={onTabChange} className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4">
          <TabsTrigger value="data">数据</TabsTrigger>
          <TabsTrigger value="solutions">方案</TabsTrigger>
          <TabsTrigger value="results">结果</TabsTrigger>
          <TabsTrigger value="batch">批量</TabsTrigger>
          <TabsTrigger value="analysis">数据分析</TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="data" className="h-full m-0">
            <DataTab />
          </TabsContent>

          <TabsContent value="solutions" className="h-full m-0">
            <SolutionsTab />
          </TabsContent>

          <TabsContent value="results" className="h-full m-0">
            <ResultsTab />
          </TabsContent>

          <TabsContent value="batch" className="h-full m-0">
            <BatchTab />
          </TabsContent>

          <TabsContent value="analysis" className="h-full m-0">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-4">数据分析</h3>
              <p className="text-gray-600">分析功能正在开发中...</p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DataPanel;
