import React from 'react'
import Category from '../../Layout/Home/Category/Category'
import Navbar from '../../Components/Navbar/Navbar'
import Ad from '../../Layout/Home/Ad/Ad'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Category />
            <Ad />
        </>
    )
}

export default Home