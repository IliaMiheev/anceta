import ReactDOM from 'react-dom/client';
import Res from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Res />
    </BrowserRouter>
);