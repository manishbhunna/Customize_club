import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ⬅️ Import Redux Provider
import { store } from './Redux/store.js';  // ⬅️ Import your Redux store
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>   {/* ⬅️ Wrap App in Provider */}
      <App />
    </Provider>
  </StrictMode>
);
