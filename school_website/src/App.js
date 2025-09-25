import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Academics from "./pages/Academics";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hello/")
      .then((res) => setApiMessage(res.data.message))
      .catch((err) => console.error("Error fetching API:", err));
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="admission">
          <Admission />
        </section>

        <section id="academics">
          <Academics />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* 🔹 Displaying Django API Message */}
        <section id="api">
          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <h2>Message from Backend</h2>
            <p style={{ fontSize: "18px", color: "#02282D" }}>
              {apiMessage ? apiMessage : "Loading..."}
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
