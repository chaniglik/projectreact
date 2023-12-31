import { useContext } from "react";
import { ThemeContext } from "./Contexts";

const ChooseColor = () => {
    let color = useContext(ThemeContext);

    return (<input type="color" onChange={(e) => { color.changeColorValue(e.target.value) }}/>);
}

export default ChooseColor;
