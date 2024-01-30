import Header from "./layout/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
