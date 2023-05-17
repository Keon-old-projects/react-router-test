import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import Albumsearch from "./pages/Albumsearch";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar />
            <section className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/album" element={<AlbumLayout />}>
                        <Route index element={<AlbumIndex />} />
                        <Route path="search" element={<Albumsearch />} />
                        <Route path=":id" element={<AlbumPhoto />} />
                    </Route>
                </Routes>
            </section>
        </>
    );
}

export default App;
