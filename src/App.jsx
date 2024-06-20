import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Search from "./pages/Search";
import TopHeadlines from "./pages/TopHeadlines";
import CategoryDetails from "./pages/CategoryDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/top-headlines" element={<TopHeadlines/>}/>
          <Route path="/category/:category" element={<CategoryDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
