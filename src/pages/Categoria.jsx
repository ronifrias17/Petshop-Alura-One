import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../api/api'
import ListPosts from '../Components/ListPosts'
import ListCategories from '../Components/ListCategories'
import { useParams, Routes, Route, useResolvedPath } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SubCategoria from './SubCategorias'


const Categoria = () => {
    const [subcategorias, setSubcategorias] = useState([])
    const { id } = useParams()

    const url = useResolvedPath("").pathname


    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias);
        })

    }, [id])

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
                <Route path='/:subcategoria' element={<SubCategoria />} />
            </Routes>

        </>
    )
}

export default Categoria