import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayerGallery from "./pages/PlayerGallery";
import { WhatsAppFab } from "./components/ui/WhatsAppFab";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-vizora-black flex flex-col font-sans selection:bg-vizora-green selection:text-vizora-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player/:id" element={<PlayerGallery />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </HashRouter>
  );
}
