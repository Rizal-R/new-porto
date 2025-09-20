import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden bg-[#1c1f1f] text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade opacity-40"></div>
        <Navbar />
        <main className="container mx-auto px-6 lg:px-8 py-16">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
