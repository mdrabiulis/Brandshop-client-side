import { Navigate, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import useAuthContext from "../../Components/Hooks/useAuthContext";

const Private = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default Private;
Private.propTypes = {
  children: PropTypes.node,
};
