import DashboardComponent from "../../components/DashboardComponent";
import { useUser } from "../../hooks/useUser";
import { useState, useEffect } from "react";
import LoadingPage from "../../components/LoadingPage";

export default function Dashboard(params) {
  const { loadingUseUser, userLogin } = useUser();
  const [loadingUseHook, setloadingUseHook] = useState(true);
  const [emailUser, setEmailUser] = useState(userLogin)

  useEffect(() => {
    if (!loadingUseUser) {
      setloadingUseHook(false)
    }
  }, [loadingUseUser]);

  useEffect(() => {
    if (!loadingUseUser) {
      setEmailUser(userLogin)
    }
  }, [userLogin]);

  

  return (
    <>
    {
      loadingUseHook ? (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <LoadingPage />
      </div>
      ) : (
      <div className="pb-8">
        <DashboardComponent emailUser={emailUser}></DashboardComponent>
      </div>
      ) 
    }
    </>
  );
}
