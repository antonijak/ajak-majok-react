import React from 'react';

import './ClickableLogo.css'

const ClickableLogo = ({ url, logo, logoHover, modifier, alt }) => {

    const jsx = (
        <a 
        href={url}
        className={`ClickableLogo ClickableLogo___${modifier}`}
        >

        <div
        className={`ClickableLogo_div ClickableLogo_div___${modifier}`}
        >
            <img
            alt={alt} 
            src={logo.fluid.src}
            className={`ClickableLogo_img`}
            />

            <img
            alt={alt} 
            src={logoHover.fluid.src}
            className={`ClickableLogo_img ClickableLogo_img___hover`}
            />

        
        </div>
            
        </a>
    );

    return jsx;

};

export default ClickableLogo;