import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <h1>
          Minha Primeira Aula - Pietro
        </h1>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          A contagem de clicks é {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR <br />
          Edite <code>src/App.jsx</code> e salve para testar HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br />
        Clique nas logos do Vite e React para ler mais!
      </p>
    </>
  )
}

export default App
