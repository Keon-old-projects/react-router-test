import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const access = import.meta.env.VITE_APP_UNSPLASH_ACCESS;
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
                    {list.map((item) => (
                        <li key={item.id}>{item.id}</li>
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
