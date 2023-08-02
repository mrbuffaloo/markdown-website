import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './index.css';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import NotFound from "./pages/notfound"
import Post from './pages/post'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/blog" element={<Blog />} />
        <Route  path="/404" element={<NotFound />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);





