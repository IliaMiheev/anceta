import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import './App.css'
import NavBar from "./Component/NavBar/NavBar";
import MainPage from "./Component/MainPage/MainPage";
import RegPage from "./RegPage/RegPage";
function App (){
    const [user, setUser] = useState('')
    return(
        <div className="one">
            {user.name ? <NavBar/>: null}
            <Routes>
                <Route path="/"
                element={
                    <MainPage user={user}/>
                }
                />
                <Route path="/reg"
                element={
                    <RegPage setUser={setUser}/>
                }
                />
                <Route path="/projects"
                element={
                    <Projects/>
                }
                />
                <Route path="/about"
                element={
                    <About/>
                }
                />
            </Routes>
        </div>
    )
}
export default App;