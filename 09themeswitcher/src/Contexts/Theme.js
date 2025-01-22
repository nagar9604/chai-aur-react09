import { useContext,createContext } from "react";
import UserContetx from "../../../minicontext/src/Context/Usercontext";

export const ThemeContext= createContext({
    themeMode:"light",
    darkTheme :()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}