import { useEffect, useState } from "react";
import { getContactsList } from "./api/api";
import { useFetch } from "./hooks/useFetch";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SingleContact from "./pages/singleContact/SingleContact";
import NotFoundPage from "./pages/not-found";
import Layout from "./Layout/Layout";

axios.defaults.baseURL = "http://localhost:3030/";

const MainComponent = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<SingleContact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default MainComponent;
