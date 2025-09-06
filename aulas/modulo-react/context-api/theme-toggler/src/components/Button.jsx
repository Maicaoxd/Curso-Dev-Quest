import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export default function Button(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <button {...props}
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }} 
        />
    )
};
