import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSummary from "./components/ServiceSummary";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
}

export default App;
