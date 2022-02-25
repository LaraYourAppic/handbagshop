import React from 'react';

const Button = ({typeOfButton, clickHandler, toggleDisabled, buttonName}) => {
    return (
        <button
        type={typeOfButton}
        onClick={clickHandler}
        disabled={toggleDisabled}
        >{buttonName}</button>
    );
};

export default Button;

