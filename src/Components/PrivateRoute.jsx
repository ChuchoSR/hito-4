import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
