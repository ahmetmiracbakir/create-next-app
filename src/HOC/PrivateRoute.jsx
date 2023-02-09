import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  if (true) {
    // if isAuth is true
    return children;
  }
  return; // else direct to login
};

export default PrivateRoute;
