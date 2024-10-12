import { useState } from "react";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Manager />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
