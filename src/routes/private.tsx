//todo Import packages
import { Navigate } from "react-router-dom";

//todo Import layout
import Layout from "../layout";

interface CustomProps {
  roles: Array<string>;
  component: () => JSX.Element;
}

const Private = ({ component, roles }: CustomProps) => {
  const ac = localStorage.getItem("access");
  const re = localStorage.getItem("refresh");
  const role = localStorage.getItem("role");

  if (ac && re) {
    return roles?.includes(String(role)) ? (
      <Layout component={component} />
    ) : null;
  }
  return <Navigate to="/login" replace />;
};

export default Private;
