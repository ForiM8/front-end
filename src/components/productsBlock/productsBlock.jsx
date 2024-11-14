import React from 'react';
import { useCallback } from "react";


const ProductsBlock = (props) => {
  const { name, price, id, onRemove, onEdit } = props;

    const removeProduct = useCallback(() => {
        onRemove(id);
    }, [id, onRemove]);

    const editProduct = useCallback(() => {
        onEdit({ status: true, id });
    }, [id, onEdit]);
    return (
        <div className="container__products__products__banner">
            <div className="container__products__products__banner__header">
              <div className="container__products__products__banner__header-title">{name}</div>
            </div>

            <div className="container__products__products__banner__button">

              <button  className="container__products__products__banner__button-create">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7702 1.50999C18.056 0.828963 17.107 0.449036 16.1202 0.449036C15.1333 0.449036 14.1844 0.828963 13.4702 1.50999L1.27019 13.71L0.510187 18.76C0.480366 18.9004 0.485761 19.0461 0.525893 19.1839C0.566024 19.3217 0.639644 19.4475 0.740187 19.55C0.84316 19.6501 0.968606 19.7242 1.10604 19.7659C1.24348 19.8077 1.38891 19.8159 1.53019 19.79L6.53019 19.02L18.7302 6.81999C19.0798 6.47309 19.3571 6.06022 19.546 5.60531C19.7348 5.1504 19.8314 4.66253 19.8302 4.16999C19.8415 3.17822 19.4605 2.22215 18.7702 1.50999ZM5.86019 17.61L2.10019 18.18L2.68019 14.43L12.5902 4.51999L15.7702 7.69999L5.86019 17.61ZM17.7102 5.75999L16.8302 6.63999L13.6502 3.45999L14.5302 2.57999C14.9582 2.17046 15.5278 1.94189 16.1202 1.94189C16.7126 1.94189 17.2821 2.17046 17.7102 2.57999C17.9205 2.78772 18.0872 3.03537 18.2006 3.30841C18.3139 3.58145 18.3716 3.87437 18.3702 4.16999C18.3675 4.76609 18.1304 5.33721 17.7102 5.75999Z" fill="#1A1A1A" />
                </svg>
              </button>

              <button className="container__products__products__banner__button-delete">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.53 6H15.42C15.3696 6 15.3213 6.02002 15.2857 6.05565C15.25 6.09128 15.23 6.13961 15.23 6.19L14.45 15.93C14.4145 16.4358 14.1882 16.9092 13.8169 17.2545C13.4456 17.5999 12.957 17.7912 12.45 17.79H5.56C5.05296 17.7912 4.56436 17.5999 4.19307 17.2545C3.82177 16.9092 3.59549 16.4358 3.56 15.93L2.77 6.19C2.77 6.13961 2.74998 6.09128 2.71435 6.05565C2.67872 6.02002 2.63039 6 2.58 6H1.47C1.44196 5.99986 1.41421 6.00561 1.38855 6.01689C1.36288 6.02817 1.33987 6.04472 1.32101 6.06546C1.30215 6.08621 1.28786 6.11068 1.27908 6.13731C1.27029 6.16393 1.2672 6.1921 1.27 6.22L2.05 16C2.12253 16.8826 2.52322 17.7059 3.173 18.3076C3.82278 18.9092 4.67446 19.2455 5.56 19.25H12.44C13.3342 19.2581 14.1982 18.9274 14.8586 18.3245C15.519 17.7217 15.9268 16.8912 16 16L16.78 6.18C16.778 6.15064 16.7696 6.12209 16.7553 6.09637C16.741 6.07066 16.7212 6.04841 16.6973 6.03122C16.6734 6.01403 16.6461 6.00232 16.6171 5.99692C16.5882 5.99153 16.5585 5.99258 16.53 6Z" fill="#D6665C" />
                  <path d="M17.8 3.56H13.67C13.4973 2.71381 13.0378 1.95318 12.3691 1.4066C11.7005 0.860012 10.8636 0.560973 10 0.559998H8C7.13637 0.560973 6.29954 0.860012 5.63089 1.4066C4.96223 1.95318 4.50273 2.71381 4.33 3.56H0.2C0.146957 3.56 0.096086 3.58107 0.0585787 3.61858C0.0210715 3.65608 0 3.70695 0 3.76V4.86C0 4.91304 0.0210715 4.96391 0.0585787 5.00142C0.096086 5.03893 0.146957 5.06 0.2 5.06H17.8C17.853 5.06 17.9039 5.03893 17.9414 5.00142C17.9789 4.96391 18 4.91304 18 4.86V3.76C18 3.70695 17.9789 3.65608 17.9414 3.61858C17.9039 3.58107 17.853 3.56 17.8 3.56ZM5.88 3.56C6.03502 3.12153 6.3221 2.74188 6.70174 2.47326C7.08139 2.20465 7.53494 2.06027 8 2.06H10C10.4651 2.06027 10.9186 2.20465 11.2983 2.47326C11.6779 2.74188 11.965 3.12153 12.12 3.56H5.88Z" fill="#D6665C" />
                  <path d="M6.45 14.85H7.55C7.57673 14.8501 7.60318 14.8447 7.62764 14.8339C7.6521 14.8231 7.67402 14.8073 7.69195 14.7875C7.70988 14.7677 7.72343 14.7443 7.73171 14.7189C7.73999 14.6934 7.74281 14.6666 7.74 14.64L7.28 8.21C7.28004 8.18418 7.27481 8.15863 7.26464 8.1349C7.25447 8.11117 7.23958 8.08977 7.22086 8.07198C7.20215 8.0542 7.18 8.04042 7.15578 8.03149C7.13157 8.02255 7.10578 8.01864 7.08 8.02H6C5.97282 8.02122 5.94617 8.02797 5.92168 8.03985C5.8972 8.05173 5.8754 8.06848 5.85761 8.08907C5.83983 8.10967 5.82643 8.13367 5.81824 8.15963C5.81006 8.18558 5.80725 8.21292 5.81 8.24L6.27 14.67C6.27241 14.717 6.29215 14.7614 6.3254 14.7946C6.35865 14.8278 6.40304 14.8476 6.45 14.85Z" fill="#D6665C" />
                  <path d="M11.59 14.85C11.615 14.8513 11.6399 14.8478 11.6635 14.8394C11.6871 14.8311 11.7088 14.8182 11.7274 14.8015C11.7459 14.7848 11.761 14.7646 11.7718 14.742C11.7825 14.7194 11.7887 14.695 11.79 14.67L12.25 8.24C12.2527 8.21292 12.2499 8.18558 12.2418 8.15963C12.2336 8.13367 12.2202 8.10967 12.2024 8.08907C12.1846 8.06848 12.1628 8.05173 12.1383 8.03985C12.1138 8.02797 12.0872 8.02122 12.06 8.02H11C10.9742 8.01864 10.9484 8.02255 10.9242 8.03149C10.9 8.04042 10.8779 8.0542 10.8591 8.07198C10.8404 8.08977 10.8255 8.11117 10.8154 8.1349C10.8052 8.15863 10.8 8.18418 10.8 8.21L10.34 14.64C10.3372 14.6666 10.34 14.6934 10.3483 14.7189C10.3566 14.7443 10.3701 14.7677 10.3881 14.7875C10.406 14.8073 10.4279 14.8231 10.4524 14.8339C10.4768 14.8447 10.5033 14.8501 10.53 14.85H11.59Z" fill="#D6665C" />
                </svg>
              </button>

            </div>
            
          </div>
    );
};
export default ProductsBlock;