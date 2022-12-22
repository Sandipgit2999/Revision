import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Nav.module.css"

const Nav = () => {
    return (
        <Box mb={"50px"}>
            <nav>
                <ul className={Styles.nav}>
                    <li>Navbar</li>
                    <Link className={Styles.search} to={"/"} ><Text fontWeight={"bold"}  >Home</Text> </Link>
                    <Link className={Styles.search} to={"/bookmarks"} ><Text fontWeight={"bold"}  >Bookmark</Text> </Link>
                </ul>
            </nav>
        </Box>
    )
}

export default Nav
