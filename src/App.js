import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./navigation/routes";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthhContext, useAuth } from "./components/AuthContext/AuthhContext";


//!План на разработку
//? 1) Делаем закрытый роутинг и добавляем авторизацию настраиваем localStorage
//? 2) Добавляем страницы Profile и Products
//? 3) Работаем с формой создания/редактирования продуктов




export const App = () => {
  const {isAuth} = useAuth()

  useEffect(() => {
    // getAuth().then(() => {
    //   setIsAuth(true);
    // });
  });

  const routes = getRoutes(isAuth);

  return (
   
      <RouterProvider router={routes} />
    
  );
};




