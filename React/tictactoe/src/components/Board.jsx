import React from 'react'
import Square from './Square'
import '../App.css'

export default function Board({squares,onClick}) {
    return (
        <div className="board">
            {squares.map((square,i)=>(
                <Square key={i} value={square} onClick={()=>onClick(i)}/>
            ))}
            
        </div>
    );
}
