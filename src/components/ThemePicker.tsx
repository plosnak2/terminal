import { useState } from 'react'
import './ThemePicker.css'

export function ThemePicker () {
    const [theme, setTheme] = useState("first")

    function onValueChange(event : React.ChangeEvent<HTMLInputElement>) {
        setTheme(event.target.value)

        if(event.target.value === "first") {
            document.body.style.backgroundColor = "#815BA4"
        }

        if(event.target.value === "second") {
            document.body.style.backgroundColor = "grey"
        }

        if(event.target.value === "third") {
            document.body.style.backgroundColor = "rgb(135, 239, 255)"
        }
    }
    
    return(
        <div className="flex-container">
            <div className="item">
                <div className='theme-circle first'/>
                <div>Purple Phantom</div>
                <input type="radio" value="first" name="gender" checked={theme === "first"} onChange={onValueChange}/>
            </div>
            <div className="item">
                <div className='theme-circle second'/>
                <div>Dark Castle</div>
                <input type="radio" value="second" name="gender" checked={theme === "second"} onChange={onValueChange}/>
            </div>
            <div className="item">
                <div className='theme-circle third'/>
                <div>Light Sky</div>
                <input type="radio" value="third" name="gender" checked={theme === "third"} onChange={onValueChange}/>
            </div>
        </div>
    )
}