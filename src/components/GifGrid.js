import React from 'react'

import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ categoria }) => {

  const { data: images, loading } = useFetchGifs(categoria)

  return (
    <>
      <h3>{categoria}</h3>
      {loading && 'cargando...'}
      <div className="card-grid">
        {
          images.map(image => (
            <GifGridItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}
