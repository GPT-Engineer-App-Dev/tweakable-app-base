import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg">Start building your application by modifying this template.</p>
      <Button onClick={() => navigate("/about")}>Get Started</Button>
    </div>
  );
};

export default Index;