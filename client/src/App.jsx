import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConnectWalletPage from './pages/ConnectWallet';
import CreatAccountPage from './pages/CreatAccount';
import NoPage from './pages/NoPage';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateAccount" element={<CreatAccountPage />} />
          <Route path="/ConnectWallet" element={<ConnectWalletPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}