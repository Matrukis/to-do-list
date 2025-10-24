import { useState } from "react"
import Header from "./pages/header"
import Footer from "./pages/Footer"

function App() {
  const [message, setMessage] = useState("Olá, mundo!")

  function trocarMensagem() {
    setMessage("Olá, fui clicado!")
  }
  return(
    <div>
      <Header />
      <h1>{message}</h1>
      <button onClick={trocarMensagem}>
        Trocar mensagem
      </button>
      <Footer />
    </div>
  )
}
export default App