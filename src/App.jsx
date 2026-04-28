import { useState } from 'react'
// import './assets/fotocs2.jpg'
import './App.css'

function App() {
  return (
    <>
      <main>
        <div className='fotocs2'>
          <img src="./assets/fotocs2.jpg" alt="" />
        </div>

        <div className='login'>
          <div className='borda'>
          <h1>Counter-Strike 2</h1>
          <input type="text" className="usua" placeholder="Usuario"/>
          <input type="password" className="senha" placeholder="Senha" />
          <input type="submit" className="entrar" placeholder="Entrar"/>
          <a href="#" className='duvida'>Não tem conta?</a>
          </div>
        </div>
        
        
      </main>
    </>
  )
}

export default App
