import { lazy, Suspense, useEffect, useState } from "react";
import { getContactsList } from "./api/api";
import { useFetch } from "./hooks/useFetch";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import SingleContact from "./pages/singleContact/SingleContact";
// import NotFoundPage from "./pages/not-found";
// import Layout from "./Layout/Layout";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const SingleContact = lazy(() => import("./pages/singleContact/SingleContact"));
const NotFoundPage = lazy(() => import("./pages/not-found"));
const Layout = lazy(() => import("./Layout/Layout"));

const MainComponent = () => {
  const testProvider = "test Auth Context Provider";
  return (
    <AuthContext.Provider value={{ testProvider }}>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<SingleContact />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthContext.Provider>
  );
};

export default MainComponent;
