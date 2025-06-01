import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </SessionContextProvider>
  </StrictMode>
);