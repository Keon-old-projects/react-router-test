import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Albumsearch = () => {
    const [searchText, setSearchText] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const searchSumbit = (e) => {
        e.preventDefault();
        let targetValue = e.target.children[1].value;
        setSearchText(targetValue);
        setSearchParams({ query: targetValue });
    };

    // useEffect(() => {
    //     // if (searchText !== "") {
    //     //     console.log(`============`, searchText);
    //     //     console.log(`************`, searchParams.get(`query`));
    //     // }
    // }, [searchText]);

    return (
        <form onSubmit={searchSumbit}>
            <label htmlFor="search" className="h2 mt-5">
                搜尋頁面
            </label>
            <input type="text" className="form-control" id="search" />
        </form>
    );
};

export default Albumsearch;
