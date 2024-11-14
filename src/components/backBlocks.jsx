import React from 'react';
import { Link } from 'react-router-dom';
import "./backBlocks.scss"

const BackBlocks = () => {
    return (
        <div className="container__back">
            <svg className="container__back-svg" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.45177 0.591522L9.29177 1.32152C9.32841 1.35891 9.34894 1.40917 9.34894 1.46152C9.34894 1.51387 9.32841 1.56414 9.29177 1.60152L2.86177 8.98152L9.30177 16.3515C9.33906 16.3906 9.35986 16.4425 9.35986 16.4965C9.35986 16.5505 9.33906 16.6025 9.30177 16.6415L8.48177 17.3615C8.4427 17.3988 8.39077 17.4196 8.33677 17.4196C8.28276 17.4196 8.23083 17.3988 8.19177 17.3615L0.861768 8.98152L8.22177 0.611521C8.25259 0.583395 8.29181 0.566196 8.33338 0.562582C8.37495 0.558968 8.41656 0.569137 8.45177 0.591522Z" fill="#1A1A1A" />
            </svg>
            <Link to={'/'} className="container__back-text">Назад</Link>
        </div>
    );
};
export default BackBlocks;
