import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoria }) => {

    const { images, isLoading } = useFetchGifs(categoria);

    return (
        <>
            <h1>{categoria}</h1>
            {
                isLoading && (<h2 className="">Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
