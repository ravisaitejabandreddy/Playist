import { createRoot } from 'react-dom/client';
import { App } from './App';
const con = document.getElementById('root');
const root = createRoot(con!); 
root.render(<App />);