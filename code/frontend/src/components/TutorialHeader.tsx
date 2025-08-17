import { Card } from "@/components/ui/card";

interface TutorialHeaderProps {
  environment: "dev" | "prod";
}

const TutorialHeader = ({ environment }: TutorialHeaderProps) => {
  return (
    <Card className="border-b border-border bg-card shadow-none rounded-none">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Kustomize Build Output ({environment === "dev" ? "Dev" : "Prod"})
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive Kustomize output viewer for different environments
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TutorialHeader;