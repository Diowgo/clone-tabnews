'use client'
import { useState } from 'react'

export default function Mensagem() {
    const [state, changeState] = useState(0);
    if (state == 0) {
        return <button onClick={() => changeState(1)}>Clique Aqui</button>
    } 
    return <h1>Te amo, minha gatinha! ❤️</h1>

}