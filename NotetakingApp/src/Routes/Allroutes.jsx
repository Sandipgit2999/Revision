import React from 'react'
import { Routes, Route } from "react-router-dom"
import Bookmark from '../Pages/Bookmark'
import Home from '../Pages/Home'




const AllRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookmarks" element={<Bookmark />} />

            </Routes>

        </div>
    )
}

export default AllRoutes
