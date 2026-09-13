import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function PageLayout({ children }) {
  return (
    <div className="app">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Hero />
            </PageLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />

        <Route
          path="/skills"
          element={
            <PageLayout>
              <Skills />
            </PageLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <PageLayout>
              <Projects />
            </PageLayout>
          }
        />

        <Route
          path="/experience"
          element={
            <PageLayout>
              <Experience />
            </PageLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;