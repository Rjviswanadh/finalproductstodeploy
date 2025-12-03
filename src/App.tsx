import React from "react";
/* import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
//import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer"; */
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import  ProductsPage  from "./components/ProductsPage";
import { Home } from "./components/Home";
import Allpageslayout from "./components/Allpageslayout";
import emailjs from "@emailjs/browser";

function HashScroller() {
const { hash } = useLocation();

  React.useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [hash]);

  return null;
}

function App() {
   React.useEffect(() => {
    const pub = "qNzL68jnA-5mggGqR"; //process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (pub) {
      emailjs.init(pub);
    } else {
      console.warn("EmailJS public key not set (REACT_APP_EMAILJS_PUBLIC_KEY)");
    }
  }, []);

  return (
    <BrowserRouter>
    <HashScroller />
      <Routes> 
           <Route path="/" element={<Allpageslayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductsPage />} />
           </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
