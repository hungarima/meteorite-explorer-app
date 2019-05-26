import React from "react";
const Form = (props) => {
    const {getMeteors} = props;
    
    return(
    <form className="form" onSubmit={getMeteors}>
        <input className="form__input" type="text" name="meteorName"/>
        <button className="form__button">Search</button>
    </form>
)};

export default Form;