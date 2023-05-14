import React from "react";
import { useOutletContext } from "react-router-dom";

const AlbumIndex = () => {
    const list = useOutletContext();
    console.log(`AlbumIndex---`, list);
    return <div>index</div>;
};

export default AlbumIndex;
