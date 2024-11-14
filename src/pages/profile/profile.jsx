import { useEffect, useState } from "react";
import { getProfile } from "../../request/request";
import { useAuth } from "../../components/AuthContext/AuthhContext";



export const Profile = () => {

    const [dataProfile, setDataProfle] = useState({})

    const {isAuth} = useAuth()

    useEffect(()=>{
        getProfile().then((data)=>{
            setDataProfle(data.data);
            localStorage.setItem("user", JSON.stringify(data.data))
        })
    },[isAuth])
    console.log("Profile", dataProfile)
  return (
    <div>
      фио : {dataProfile?.last_name} {dataProfile?.first_name} {dataProfile?.middle_name}
    </div>
  );
};
