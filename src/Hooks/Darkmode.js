import React, { useEffect, useState } from "react";

function useDarkmode(){
    const [theme, settheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    
    }, [theme, colorTheme])
    

    return[colorTheme, settheme]
}

export default useDarkmode