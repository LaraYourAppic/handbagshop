import React from "react";

const Tile = ({title, children,image,description}) =>{
    return(
        <section>
            <h2>{title}</h2>
            {children}
            <img src={image} alt={description}/>
        </section>
    );
};

export default Tile;