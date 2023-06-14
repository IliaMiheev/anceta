//ok
import ReactDOM from 'react-dom/client';
import App from './Components/Reg/Reg';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);