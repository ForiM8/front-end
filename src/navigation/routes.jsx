import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./error-element";
import { Layout } from "./layout";
import { Auth } from "../pages/auth/auth";
import { Register } from "../pages/register/register";
import { Main } from "../pages/main/main";
import { Profile } from "../pages/profile";
import {Products} from "../pages/products/Products"



const authPages = [
  {
    path: "/profile",
    Component: Profile,
  },
];

const notAuthPages = [
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/products",
    Component: Products,
  },
];

export const getRoutes = (isAuth) => {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          Component: Main,
        },

        ...(isAuth ? authPages : notAuthPages),
      ],
    },
  ]);
};
