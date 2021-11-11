import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="Loading wheel"/>
        </div>
    )
}

export default Preloader;