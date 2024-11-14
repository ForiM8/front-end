import axios from "axios";
import { BASE_URL } from "../conts/url";

export const baseURL = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

export const getPost = () => {
  return baseURL("/promo");
};

export const getProfile = () => {
  return baseURL("/profile");
};

export const getAuth = () => {
  return baseURL("/auth");
};
export const getCheckToken = ({ token }) => {
  return baseURL(`/check-token?token=${token}`);
};
