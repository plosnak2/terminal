import { KeyboardEvent , SyntheticEvent, useState } from 'react'
import './Terminal.css'
import { myCommands } from '../data/data'
import React from 'react';

export function Terminal () {
    const [input, setInput] = useState<String>("")
    const [commands, setCommands] = useState<any>([])

    function handlePress (event : KeyboardEvent <HTMLInputElement>): void {
        if (event.key === 'Enter'){
            if(input === "clear"){
                setCommands([])
                setInput("")
                return
            }
            let found = false
            myCommands.map(command => {
                if(command.name === input){
                    let elem1 = <p><span className='root-user'>root@user</span><span className='path'>/dev/null$</span> <span className="command">{input}</span></p>
                    let elem2 = <p><span className="command">{command.value}</span></p>
                    setCommands((oldCommands : String[]) => [...oldCommands, elem1, elem2])
                    setInput("")
                    found = true
                }
            })

            if (found) {
                return
            } else {
                let elem1 = <p><span className='command'>{input}: command not found type 'help'</span></p>
                let elem2 = <p><span className='root-user'>root@user</span><span className='path'>/dev/null$</span> <span className="command">{input}</span></p>
                setCommands((oldCommands : String[]) => [...oldCommands, elem2, elem1])
                setInput("")
            }
        }
    }

    return(
        <div className='terminal-inner-body'>
            {
            commands.map((component: any, index: any) => (
                <React.Fragment key={index}>
                    { component }
                </React.Fragment>))
            }
            <p><span className='root-user'>root@user</span><span className='path'>/dev/null$</span></p>
            <input className='input' type="text" value={input as string} onChange={(e) => setInput(e.target.value)}
            tabIndex={0} onKeyDown={handlePress}/>
        </div>
    )
}