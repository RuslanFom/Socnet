import Loader from "../../../assets/images/Loader.svg"
import React from "react"

type PropsType = {
}

let Preloader: React.FC<PropsType> = () => {
    return <div><img src={Loader} alt={'loader'}/></div>
}

export default Preloader