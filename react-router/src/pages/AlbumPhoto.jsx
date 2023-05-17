import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const api = "https://api.unsplash.com/photos";
const access = import.meta.env.VITE_UNSPLASH_ACCESS;

const AlbumPhoto = () => {
    const { id } = useParams();
    const [photo, setphoto] = useState({});
    useEffect(() => {
        (async () => {
            const getPhoto = await axios.get(`${api}/${id}?client_id=${access}`);
            setphoto(getPhoto.data);
        })();
    }, [id]);
    return (
        <>
            <img src={photo?.urls?.regular} alt={photo.description} className="img-fluid" />
            <div>描述：{photo.description}</div>
        </>
    );
};

export default AlbumPhoto;
