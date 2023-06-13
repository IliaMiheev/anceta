//ok
import './App.css'
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import MainPage from "./Component/MainPage/MainPage";
import RegPage from "./Component/RegPage/RegPage";
import { useState } from "react";
import Projects from "./Component/Projects/Projects"
import About from "./Component/About/About"

function App() {
    const [user, setUser] = useState('')
    return (
        <div className="one">
            {user.name ? <NavBar /> : null}
            <Routes>
                <Route path="/" element={<MainPage user={user} />} />
                <Route path="/reg" element={<RegPage setUser={setUser} />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}
export default App;