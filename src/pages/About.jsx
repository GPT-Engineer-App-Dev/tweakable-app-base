import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2 } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About This Application</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>This is a bare-bones application template built with React and Shadcn UI components.</p>
          <p>Use this template as a starting point to build and customize your own application.</p>
          <Package2 className="h-16 w-16 mx-auto text-muted-foreground" />
        </CardContent>
      </Card>
    </div>
  );
};

export default About;