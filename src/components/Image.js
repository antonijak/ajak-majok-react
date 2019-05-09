import React from 'react';
import Img from 'gatsby-image';

const Image = ({alt, image, color}) => {
    
    const jsx = (
        <Img 
        alt={alt} 
        fluid={image.fluid}
        className={`Image Image___${color}Shadow`}
        ></Img>
    );

    return jsx;
};

export default Image;