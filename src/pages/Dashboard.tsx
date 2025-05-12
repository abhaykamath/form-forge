import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <Button asChild>
        <NavLink to="create">Create Form</NavLink>
      </Button>
    </div>
  );
};

export default Dashboard;
