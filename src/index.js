import { createRoot } from 'react-dom/client'
import './index.css';
import AppContainer from './AppContainer';

// TODO - Do I want to install 'serviceWorker'?
createRoot(document.getElementById('root')).render(<AppContainer />);