import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['Pikachu'])

    return (
        <>
            <div>GifExpertApp</div>
            <hr />
            
            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {categorias.map((categoria) => ( 
                <GifGrid 
                    key={categoria}
                    categoria={categoria} />                
                ))}
            </ol>
        </>
    )
}

AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}