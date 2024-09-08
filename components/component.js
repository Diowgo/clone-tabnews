'use client'
import { useState } from 'react'

export default function Mensagem() {
    const [state, changeState] = useState(0);
    if (state == 0) {
        return <button onClick={() => changeState(1)}>Clique Aqui</button>
    } 
    return <h1>Full speed ahead, meu mano! Bora continuar estudando pelos nossos sonhos! ❤️</h1>

}