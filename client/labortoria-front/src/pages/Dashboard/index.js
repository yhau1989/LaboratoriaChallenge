import NavBarDashboard from "../../components/navBarDashboard";
import { useUser } from "../../hooks/useUser";

export default function Dashboard(params) {

   const { loadingUseUser, userLogin } = useUser();


  return (
    <div className="pb-8">
       <NavBarDashboard></NavBarDashboard>
    </div>
  );
}
