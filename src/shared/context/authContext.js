import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    userRole: null,
    login: () => { },
    logout: () => { }
})

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState();
    const [userRole, setUserRole] = useState();

    const login = useCallback((uid, urole) => {
        setIsLoggedIn(true);
        setUserId(uid);
        setUserRole(urole);
    }, [])

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        setUserId(null);
        setUserRole(null);
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, userId: userId, userRole: userRole, login: login, logout: logout }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
