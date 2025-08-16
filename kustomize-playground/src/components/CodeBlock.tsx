import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  filename?: string;
}

const CodeBlock = ({ code, language = "yaml", title, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        description: "Code copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Failed to copy code",
      });
    }
  };

  return (
    <Card className="bg-code text-code-foreground border-border overflow-hidden">
      {(title || filename) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <div>
            {title && <span className="text-sm font-medium">{title}</span>}
            {filename && (
              <span className="text-sm text-gray-400 ml-2 font-mono">{filename}</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0 hover:bg-gray-700"
          >
            {copied ? (
              <Check className="h-3 w-3 text-success" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      )}
      <div className="relative">
        {!title && !filename && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="absolute right-2 top-2 h-6 w-6 p-0 hover:bg-gray-700 z-10"
          >
            {copied ? (
              <Check className="h-3 w-3 text-success" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
        <pre className="code-scroll overflow-x-auto p-4 text-sm">
          <code className="font-mono text-code-foreground">{code}</code>
        </pre>
      </div>
    </Card>
  );
};

export default CodeBlock;