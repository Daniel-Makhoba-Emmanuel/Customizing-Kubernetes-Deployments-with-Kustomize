import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface ApiResponseBoxProps {
  title?: string;
  response?: string;
  status?: "success" | "error" | "loading" | "idle";
  statusCode?: number;
}

const ApiResponseBox = ({ 
  title = "API Response", 
  response = "", 
  status = "idle",
  statusCode 
}: ApiResponseBoxProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "error":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "loading":
        return <AlertCircle className="h-4 w-4 text-warning animate-pulse" />;
      default:
        return <Terminal className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = () => {
    switch (status) {
      case "success":
        return "default";
      case "error":
        return "destructive";
      case "loading":
        return "secondary";
      default:
        return "outline";
    }
  };

  const formatResponse = (text: string) => {
    if (!text) return "No response data available";
    
    try {
      // Try to format as JSON if possible
      const parsed = JSON.parse(text);
      return JSON.stringify(parsed, null, 2);
    } catch {
      // Return as-is if not JSON
      return text;
    }
  };

  return (
    <Card className="bg-terminal text-terminal-foreground border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            {getStatusIcon()}
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            {statusCode && (
              <Badge variant="outline" className="text-xs font-mono">
                {statusCode}
              </Badge>
            )}
            <Badge variant={getStatusVariant()} className="text-xs capitalize">
              {status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-code rounded-md border border-gray-700">
          <pre className="code-scroll overflow-x-auto p-4 text-sm">
            <code className="font-mono text-code-foreground whitespace-pre-wrap">
              {formatResponse(response)}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiResponseBox;