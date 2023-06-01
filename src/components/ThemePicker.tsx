import { useEffect, useState } from 'react'
import './ThemePicker.css'
import Cookies from 'js-cookie';

export function ThemePicker () {
    const [theme, setTheme] = useState<string>(Cookies.get('theme') === undefined ? "first" : Cookies.get('theme') as string)

    // selecting theme from cookie on first render
    useEffect(() => {
        if(Cookies.get('theme') === "first") {
            document.body.style.backgroundColor = "#815BA4"
        }

        if(Cookies.get('theme') === "second") {
            document.body.style.backgroundColor = "grey"
        }

        if(Cookies.get('theme') === "third") {
            document.body.style.backgroundColor = "rgb(135, 239, 255)"
        }
    }, [])

    function onValueChange(event : string) {
        setTheme(event)

        if(event === "first") {
            Cookies.set('theme', 'first');
            document.body.style.backgroundColor = "#815BA4"
        }

        if(event === "second") {
            Cookies.set('theme', 'second');
            document.body.style.backgroundColor = "grey"
        }

        if(event === "third") {
            Cookies.set('theme', 'third');
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