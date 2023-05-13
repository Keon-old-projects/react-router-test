import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <section className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </section>
        </>
    );
}

export default App;
