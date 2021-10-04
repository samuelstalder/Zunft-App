import React, {useEffect, useState} from 'react';
import LoginScreen from "./app/screens/LoginScreen";
import AuthContext from "./app/auth/context";
import jwtDecode from "jwt-decode";
import Navigation from "./app/components/Navigation";
import authStorage from "./app/auth/storage";


export default function App() {
    const [user, setUser] = useState();

    //get stored token from cache
    const restoreToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;
        setUser(jwtDecode(token));
    }

    useEffect(() => {
        restoreToken()
    }, []);

    //reroute to login screen if token do not exist
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {user ? <Navigation/> : <LoginScreen/>}
        </AuthContext.Provider>
    );
}

