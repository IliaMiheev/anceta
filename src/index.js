import ReactDOM from 'react-dom/client';
import './index.scss'
import App from "./App"
import { BrowserRouter} from "react-router-dom";


const root = document.getElementById('root');
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);