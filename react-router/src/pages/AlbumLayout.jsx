import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Albumsearch from "./Albumsearch";

const api = "https://api.unsplash.com/search/photos";
const access = import.meta.env.VITE_UNSPLASH_ACCESS;

const AlbumLayout = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        (async () => {
            const pageData = await axios.get(`${api}/?client_id=${access}&query=office`);
            const { results } = pageData.data;
            setList(results);
        })();
    }, []);
    return (
        <section>
            <div className="row">
                <menu className="col-4">
                    <p className="my-3">
                        <Link to="search">搜尋頁面</Link>
                    </p>
                    {list.map((item) => (
                        <li key={item.id}>
                            <Link to={item.id}>{item.id}</Link>
                        </li>
                    ))}
                </menu>
                <article className="col-8">
                    <Outlet context={list} />
                </article>
            </div>
        </section>
    );
};

export default AlbumLayout;
