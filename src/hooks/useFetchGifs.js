import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categoria) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {

        const newImages = await getGifs(categoria);
        setimages(newImages);
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}
