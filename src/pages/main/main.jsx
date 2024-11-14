import React, { useState, useEffect } from "react";
import { getPost } from "../../request/request";
import './main.scss';
import BackBlocks from "../../components/backBlocks";
import { useAuth } from "../../components/AuthContext/AuthhContext";

export const Main = () => {
    const [isLoading, setIsLoadingPromo] = useState(false);
    const [listPromo, setListPromo] = useState([]);
    const [error, setError] = useState({
        status: false,
        message: "",
    });

const {isAuth} = useAuth()
console.log(isAuth)
    useEffect(() => {
        setIsLoadingPromo(true);
        getPost()
            .then((data) => {
                if (data.data && data.status === 200) {
                    setListPromo(data.data);
                }
            })
            .catch((error) =>
                setError({ status: true, message: Error(error).message })
            )
            .finally(() => setIsLoadingPromo(false));
    }, []);

    if (isLoading) {
        return <div className="loading">loading...</div>;
    }
    if (error.status) {
        return <div className="loading">{error.message}</div>;
    }

    return (
        <div className="container">
            <div className="container__main">
                <BackBlocks/>
                <div className="container__main__main">
                    {listPromo.map((elem) => (
                        <div className="container__main__main__banner" key={elem.id}>
                            <img className="container__main__main__banner-banner" src={elem.banner}></img>
                            <div className="container__main__main__banner-title">{elem.title}</div>
                            <div className="container__main__main__banner-description">{elem.description}</div>
                            <div className="container__main__main__banner-end_date">до 24 февраля 2024</div>
                            <div className="container__main__main__banner__location">
                                <svg className="container__main__main__banner__location-punson" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00008 0.333344C4.58559 0.333344 3.22904 0.895247 2.22885 1.89544C1.22865 2.89563 0.666748 4.25219 0.666748 5.66668C0.666748 9.66668 6.00008 13.6667 6.00008 13.6667C6.00008 13.6667 11.3334 9.66668 11.3334 5.66668C11.3334 4.25219 10.7715 2.89563 9.77132 1.89544C8.77112 0.895247 7.41457 0.333344 6.00008 0.333344ZM6.00008 7.00001C5.67177 7.00133 5.35044 6.90526 5.07672 6.72395C4.80301 6.54264 4.58921 6.28424 4.46235 5.98143C4.33549 5.67861 4.30128 5.34497 4.36404 5.02271C4.4268 4.70045 4.58371 4.40403 4.81493 4.17095C5.04615 3.93786 5.34129 3.77858 5.66304 3.71323C5.98479 3.64789 6.31869 3.67942 6.62251 3.80384C6.92634 3.92826 7.18645 4.13998 7.36995 4.41223C7.55345 4.68448 7.65209 5.00503 7.65341 5.33334C7.65517 5.55158 7.61371 5.76801 7.53141 5.97014C7.44911 6.17228 7.32761 6.35611 7.1739 6.51106C7.0202 6.666 6.83734 6.78897 6.63588 6.87289C6.43441 6.95681 6.21833 7.00002 6.00008 7.00001Z" fill="#D3875F" />
                                </svg>
                                <div className="container__main__main__banner__location-country">{elem.country},</div>
                                <div className="container__main__main__banner__location-city">{elem.city}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
