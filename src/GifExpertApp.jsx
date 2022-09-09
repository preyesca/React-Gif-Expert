import { useState } from 'react'
import { AddCategory, GifGrid } from './components/index';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Messi']);

    const agregarCategoria = (NewCategoria) => {
        if (categories.includes(NewCategoria)) return;
        setCategories([NewCategoria, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategoria={agregarCategoria} />
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            key={category}
                            categoria={category}
                        />
                    })
                }
            </ol>
        </>
    )
}
