import React from "react";

const Product= ({category, image, description,price}) =>{

    return (
        <article>
            <span>{category}</span>
            <img src={image} alt={description}/>
                <p>{description}</p>
            <h4>{price}</h4>
       </article>
    );
};
export default Product;


