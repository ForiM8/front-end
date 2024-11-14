import { Link, useNavigate } from "react-router-dom";
import './header.css'
import { useEffect, useState } from "react";

import { getProfile } from "../../request/request";
import { Registerr } from "../../pages/register/register";
import { Number } from "../../pages/auth/auth";
import { useAuth } from "../../components/AuthContext/AuthhContext";



export const Header = () => {
    const { isAuth, setIsAuth } = useAuth()
    const [dataProfile, setDataProfle] = useState({})
    console.log(Registerr.first_mane)
    useEffect(()=>{
        // getProfile().then((data)=>{
        //     setDataProfle(data.data);
        //     localStorage.setItem("user", JSON.stringify(data.data))
        // })
        getProfile().then((data)=>{
            setDataProfle(prev => prev = Number)
        })
    },[isAuth])



    const navigate = useNavigate();

    const logout = () => {
        navigate("/");

        localStorage.removeItem("token");
        setIsAuth(false);
    };

    const [back, setBack] = useState(true)
    const changeBack = () => {
        setBack(!back)
    }
    const newColor = back ? '' : "header__container__big__right-textactive"
    return (
        <header>

            <div className="header__container">
                <div className="header__container__small">

                    <div className="header__container__small__position">
                        <svg className="header__container__small__position-svg" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00008 0.333313C4.58559 0.333313 3.22904 0.895216 2.22885 1.89541C1.22865 2.8956 0.666748 4.25216 0.666748 5.66665C0.666748 9.66665 6.00008 13.6666 6.00008 13.6666C6.00008 13.6666 11.3334 9.66665 11.3334 5.66665C11.3334 4.25216 10.7715 2.8956 9.77132 1.89541C8.77112 0.895216 7.41457 0.333313 6.00008 0.333313ZM6.00008 6.99998C5.67177 7.0013 5.35044 6.90523 5.07672 6.72392C4.80301 6.54261 4.58921 6.28421 4.46235 5.9814C4.33549 5.67858 4.30128 5.34494 4.36404 5.02268C4.4268 4.70042 4.58371 4.404 4.81493 4.17092C5.04615 3.93783 5.34129 3.77855 5.66304 3.7132C5.98479 3.64786 6.31869 3.67939 6.62251 3.80381C6.92634 3.92823 7.18645 4.13995 7.36995 4.4122C7.55345 4.68445 7.65209 5.005 7.65341 5.33331C7.65517 5.55155 7.61371 5.76798 7.53141 5.97011C7.44911 6.17225 7.32761 6.35608 7.1739 6.51103C7.0202 6.66597 6.83734 6.78894 6.63588 6.87286C6.43441 6.95678 6.21833 6.99999 6.00008 6.99998Z" fill="#999999" />
                        </svg>
                        <Link className="header__container__small__position-text">Россия, Москва</Link>
                    </div>

                    <div className="header__container__small__number" style={{width:'auto', maxWidth:'420px'}}>

                        {isAuth && (
                            <svg className="header__container__small__number-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#999999" />
                            </svg>
                        )}
                        {isAuth && (<Link to={"/register"} className="header__container__small__number-text"style={{marginRight:'auto'}}>{dataProfile}</Link>
                        )}
                        <div style={{width:'300px', display:'flex'}}>{!isAuth && (
                            <Link to={"/auth"} className="header__container__small__number-text" style={{marginLeft:'auto'}}>Войти.../</Link>
                        )}
                        {!isAuth && (
                            <Link to={"/register"} className="header__container__small__number-text" style={{margin:"0"}}>...Зарегестрироваться</Link>
                        )}</div>

                        <Link className="header__container__small__number-text">О компании</Link>

                    </div>

                </div>
                <div className="header__container__big">

                    <div className="header__container__big__position">

                    </div>
                    <div className="header__container__big__right">

                        <Link onClick={changeBack} className={`header__container__big__right-text`}>Главная</Link>
                        <Link onClick={changeBack} className="header__container__big__right-textactive">Список</Link>
                        <Link to={"/products"} className="header__container__big__right-text">Продукты</Link>

                        <div className="header__container__big__right__block">
                            <svg className="header__container__big__right__block-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3902 21.33L18.5502 17.49C20.0966 15.6699 20.8791 13.3223 20.7339 10.9384C20.5886 8.55448 19.527 6.31914 17.7711 4.70022C16.0152 3.08129 13.7012 2.20427 11.3134 2.2527C8.92558 2.30113 6.64903 3.27126 4.96024 4.96006C3.27145 6.64885 2.30131 8.9254 2.25288 11.3132C2.20445 13.701 3.08148 16.0151 4.7004 17.7709C6.31933 19.5268 8.55466 20.5885 10.9386 20.7337C13.3225 20.8789 15.6701 20.0964 17.4902 18.55L21.3302 22.39C21.348 22.4094 21.3696 22.4249 21.3937 22.4355C21.4178 22.4461 21.4439 22.4516 21.4702 22.4516C21.4965 22.4516 21.5226 22.4461 21.5467 22.4355C21.5708 22.4249 21.5924 22.4094 21.6102 22.39L22.3902 21.61C22.4096 21.5922 22.4251 21.5706 22.4357 21.5465C22.4463 21.5224 22.4518 21.4964 22.4518 21.47C22.4518 21.4437 22.4463 21.4177 22.4357 21.3936C22.4251 21.3695 22.4096 21.3478 22.3902 21.33ZM3.75021 11.5C3.75021 9.96722 4.20474 8.46884 5.05632 7.19436C5.9079 5.91987 7.11828 4.92654 8.53441 4.33996C9.95054 3.75338 11.5088 3.5999 13.0122 3.89894C14.5155 4.19797 15.8964 4.93609 16.9803 6.01995C18.0641 7.1038 18.8023 8.48472 19.1013 9.98808C19.4003 11.4914 19.2469 13.0497 18.6603 14.4658C18.0737 15.8819 17.0804 17.0923 15.8059 17.9439C14.5314 18.7955 13.033 19.25 11.5002 19.25C9.44559 19.2474 7.47589 18.43 6.02305 16.9772C4.57022 15.5243 3.75285 13.5546 3.75021 11.5Z" fill="#1A1A1A" />
                            </svg>
                            <div className="header__container__big__right__block-img" alt=""></div>
                        </div>

                    </div>


                </div>

            </div>
        </header>
    )
}