import React, {useState} from 'react'

export const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setCategorias(categorias => [inputValue, ...categorias])   
            setInputValue('')         
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id="entrada"
                    type="text"
                    name="entrada"
                    required
                    onChange={handleInputChange}/>
            </form>
        </>
    )
}

