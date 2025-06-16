import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Upload,
  Send,
  Image as ImageIcon,
  Video,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Welcome = () => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!message.trim() && files.length === 0) {
      toast({
        title: "请输入消息或上传文件",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Navigate to chat interface with data
      navigate("/chat", {
        state: {
          initialMessage: message,
          initialFiles: files,
        },
      });
    } catch (error) {
      toast({
        title: "发送失败",
        description: "请重试",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hello, what can I do for you?
          </h1>
          <p className="text-lg text-gray-600">上传图片、视频或输入描述</p>
        </div>

        {/* Chat Card */}
        <Card className="p-6 shadow-xl bg-white/80 backdrop-blur-sm">
          {/* Welcome Message */}
          {/* <div className="mb-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg max-w-md">
              <p>
                您好，任务已收到。我为您配置了两个备选方案...我们先去"数据"标签页难道一些测试用例吧？
              </p>
            </div>
          </div> */}

          {/* File Preview */}
          {files.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                已选择的文件:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="relative p-2 bg-gray-100 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      {file.type.startsWith("image/") && (
                        <ImageIcon className="w-4 h-4" />
                      )}
                      {file.type.startsWith("video/") && (
                        <Video className="w-4 h-4" />
                      )}
                      {!file.type.startsWith("image/") &&
                        !file.type.startsWith("video/") && (
                          <FileText className="w-4 h-4" />
                        )}
                      <span className="text-xs truncate">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Please input messages or instructions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                className="flex-1"
              />
              <input
                type="file"
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button variant="outline" size="icon" asChild>
                  <span className="cursor-pointer">
                    <Upload className="w-4 h-4" />
                  </span>
                </Button>
              </label>
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessage("分析停车场夜间情况")}
            >
              夜间分析
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessage("统计车辆数量")}
            >
              车辆统计
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessage("检测停车位占用情况")}
            >
              停车位检测
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
