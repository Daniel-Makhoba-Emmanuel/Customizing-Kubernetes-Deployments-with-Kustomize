import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";

interface TutorialStepProps {
  stepNumber: number;
  title: string;
  description: string;
  children?: React.ReactNode;
  completed?: boolean;
  active?: boolean;
}

const TutorialStep = ({ 
  stepNumber, 
  title, 
  description, 
  children, 
  completed = false,
  active = false 
}: TutorialStepProps) => {
  return (
    <Card className={`transition-all duration-200 ${
      active ? 'ring-2 ring-ring shadow-lg' : ''
    } ${completed ? 'bg-success/5 border-success/20' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border bg-background flex-shrink-0">
            {completed ? (
              <CheckCircle className="h-5 w-5 text-success" />
            ) : (
              <Circle className={`h-5 w-5 ${active ? 'text-ring' : 'text-muted-foreground'}`} />
            )}
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3">
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              <Badge variant="outline" className="text-xs font-mono">
                Step {stepNumber}
              </Badge>
            </div>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>
      {children && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {children}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default TutorialStep;