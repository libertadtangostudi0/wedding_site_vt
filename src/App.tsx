// src/App.tsx
// Router-agnostic on purpose: the Router itself lives in main.tsx (real
// BrowserRouter) so tests can wrap this same component in a MemoryRouter.
import { AppRoutes } from './routes/AppRoutes';
import './index.css';

function App() {
  return <AppRoutes />;
}

export default App;
