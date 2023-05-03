import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/header/header'
import PostContainer from '../components/posts/postContainer'
import PostArticle from '../components/posts/postArticle'
import ListUser from '../components/users/listUser'
import ListProducts from '../components/products/listProducts'




function App() {

    const usuarios = [
        {
            id: 1,
            name: "Chidume Nnamdi",
            age: 54,
        },
        {
            id: 2,
            name: "Karim",
            age: 24,
        },
        {
            id: 3,
            name: "Bruno",
            age: 45,
        },
        {
            id: 4,
            name: "Ola Brown",
            age: 24,
        }
    ]

    const productos = [
        {
            id: 0,
            name: 'Jabón',
            precio: '200',
            cantidad: 3
        },
        {
            id: 1,
            name: 'Pasta',
            precio: '100',
            cantidad: 5
        },
        {
            id: 2,
            name: 'Papel',
            precio: '400',
            cantidad: 1
        },
        {
            id: 3,
            name: 'Huevo',
            precio: '400',
            cantidad: 1
        }
    ]

    return (

        <>
            <Header />
            <PostContainer propFake="container__post">
                <PostArticle title='Title 1' description='Title 1 desc' />
                <PostArticle title='Title 2' description='Title 2 desc' />
                <PostArticle title='Title 3' description='Title 3 desc' />
            </PostContainer>
            <ListUser users={usuarios} />
            <ListProducts products={productos}/>
        </>

    )
}

export default App
