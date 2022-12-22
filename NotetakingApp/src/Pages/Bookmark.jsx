import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Styles from "./Bookmark.module.css"

const Bookmark = () => {



    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        let NotesBookmarkData = JSON.parse(localStorage.getItem("BookmarkNotes")) || [];
       
        setBookmark(NotesBookmarkData)

    }, [])

    return (
        <div className={Styles.container}>


            {
                bookmark.length > 0 ? bookmark.map((el) => (
                    <div key={el.id}>

                        <h3 className={Styles.title}>{el.note}</h3>
                        <p>{el.description}</p>
                        <p>{`Created At: ${el.date}`}</p>

                    </div>
                )): <Box margin={"auto"} >No Bookmarks notes!</Box>
            }

            


        </div>
    )
}

export default Bookmark
