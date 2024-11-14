import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./auth.scss"
import PhoneInput from "react-phone-input-2";
import RegisterInput from "../../components/register/regiserInput";
import { Registerr } from "../register/register";
import { getAuth } from "../../request/request";
import { useAuth } from "../../components/AuthContext/AuthhContext";

export var Number = ''

export const Auth = () => {

  const { isAuth, setIsAuth } = useAuth

  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getAuth().then(({ data }) => {
      const phoneExists = Registerr.some(prev => Registerr.phone === data.phone);
      const passwordExists = Registerr.some(prev => Registerr.password === data.password)
      if (watch("password")) {
        if (phoneExists) {
          if (passwordExists) {
            setIsAuth(prev => !prev)
            console.log(Registerr)
            Number = Registerr.phone
            console.log(Number)
            navigate("/")
            alert("вы успешно вошли")
            localStorage.setItem("token", data.token);
          } else {
            alert('не правильный пароль')
          }
        } else {
          alert("такого пользователя нет")
          console.log(Registerr)
          navigate("/register")
        }

      } else {
        alert("вы не ввели пароль")
      }
    });
  };

  return (
    <div className="auth__wrapper">
      <div className="auth__container">
        <div className="auth__container-label">Добро пожаловать в консьерж-сервис</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PhoneInput
            id="phone" type="tel"
            name={'phone'}
            country={'ru'}
            onlyCountries={['ru', 'by', 'us', 'kz']}
            preferredCountries={['ru']}
            placeholder='Номер'

            inputClass='name-input'
          />
          <div className="auth__container__inputButton__block">
            <RegisterInput
              input_type={"password"}
              input_text="Пароль"
              type="password"
              errors={errors}
              name={"password"}
              register={register}
              validate={{ required: true }}
              classNameInput='name-input'
              classNameLabel='name-label'
            />
            <button className="name-button">Авторизация</button>
          </div>

          <div className="auth__container__applay">
            <input type="checkbox" className="auth__container__applay-checkbox" style={{ width: "24px", height: "24px", }}></input>
            <div className="auth__container__applay-text">Оставляя контактные данные, Вы соглашаетесь с
              <span class="colortext"> офертой, политикой конфиденциальности</span> и подтверждаете, что ознакомлены
              со <span class="colortext">способами оплаты</span>, перечнем услуг и <span class="colortext">правилами отказа
                от услуг</span></div>
          </div>

        </form>
      </div>
      <div className="auth__blackbox"></div>
    </div>
  );
};
