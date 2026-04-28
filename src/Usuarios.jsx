import { useState } from "react";
import './Usuarios.css'

export default function Usuarios(){
    return(
        <>
        <div>
         <input type="text" placeholder="Nome"   className="nome"/>
         <input type="text" placeholder="Email"  className="email"/>
         <input type="password" placeholder="Senha2"  className="senha1"/>
         <input type="password" placeholder="senha2"  className="senha2"/>
         </div>
        </>
    )
};