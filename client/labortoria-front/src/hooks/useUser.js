import { useEffect, useState } from "react";
import {getCookie} from "../utils/cookies"
import { useHistory } from "react-router-dom";

export function useUser({user} = {user:null}) {
    const [loadingUseUser, setLoadingUseUser] = useState(false)
    const [userLogin, setUserLogin] = useState()
    
    const history = useHistory()
    const currentUser = localStorage.getItem('userLogin')
    const laboratoriaValidtimeL = getCookie('laboratoriaValidtimeL')
    let currentPath = ""
    currentPath = history.location.pathname
    
    useEffect(() => {
        setLoadingUseUser(true)
        if(laboratoriaValidtimeL !== "1"){
            setLoadingUseUser(false)
            setUserLogin(null)
            if(currentPath === "/dashboard")
            {
                history.push('/login')
            }
        }
        else
        {
            if(currentUser && typeof(currentUser) === "string" && (currentPath === "/login" || currentPath === "/register"))
            {
                setLoadingUseUser(false)
                history.push('/dashboard')
            }
            else
            {
                setLoadingUseUser(false)
                setUserLogin(currentUser)
            }
            
            if((typeof(currentUser) !== "string") && (currentPath === "/dashboard")){
                setLoadingUseUser(false)
                setUserLogin(null)
                history.push('/login')
            }
        }
    }, [currentPath]);

    return {loadingUseUser, userLogin}

};
