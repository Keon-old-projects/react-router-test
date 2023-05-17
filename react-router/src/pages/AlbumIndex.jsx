import React from "react";
import { useOutletContext } from "react-router-dom";

const AlbumIndex = () => {
    const list = useOutletContext();
    return <div>index</div>;
};

export default AlbumIndex;
