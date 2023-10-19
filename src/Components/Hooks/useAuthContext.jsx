import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const useAuthContext = () => {
    const useAuth = useContext(AuthContext);
    return useAuth;
};

export default useAuthContext;