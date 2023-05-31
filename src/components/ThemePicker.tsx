import { useState } from 'react'
import './ThemePicker.css'

export function ThemePicker () {
    const [theme, setTheme] = useState("first")

    function onValueChange(event : string) {
        setTheme(event)

        if(event === "first") {
            document.body.style.backgroundColor = "#815BA4"
        }

        if(event === "second") {
            document.body.style.backgroundColor = "grey"
        }

        if(event === "third") {
            document.body.style.backgroundColor = "rgb(135, 239, 255)"
        }
    }
    
    return(
        <div className="flex-container">
            <div className="item" onClick={() => onValueChange("first")}>
                <div className='theme-circle first' />
                <div>Purple Phantom</div>
                <input type="radio" value="first"  checked={theme === "first"} />
            </div>
            <div className="item" onClick={() => onValueChange("second")}>
                <div className='theme-circle second' />
                <div>Dark Castle</div>
                <input type="radio" value="second"  checked={theme === "second"} />
            </div>
            <div className="item" onClick={() => onValueChange("third")}>
                <div className='theme-circle third' />
                <div>Light Sky</div>
                <input type="radio" value="third"  checked={theme === "third"} />
            </div>
        </div>
    )
}