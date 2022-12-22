import { Box, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from "./Notes.module.css"
import { PhoneIcon, DeleteIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)


const Notes = ({ notes, getNotes }) => {

    const url = "https://mock4-json-server.onrender.com/users"


    let NotesBookmarkData = JSON.parse(localStorage.getItem("BookmarkNotes")) || [];



    const AddtoBookmark = (id) => {

        let find = NotesBookmarkData.find(el => el.id == id);


        if (find) {
            alert("note already bookmarked")
        }

        else {
            axios.get(`${url}/${id}`)
                .then((res) => {


                    let newNoteBookmarkData = [...NotesBookmarkData, res.data];
                    localStorage.setItem("BookmarkNotes", JSON.stringify(newNoteBookmarkData));
                    NotesBookmarkData = JSON.parse(localStorage.getItem("BookmarkNotes"))
                    alert("added to bookmarks")


                })
                .catch((err) => {
                    console.log(err)
                })
        }


    }


    const deleteNote = (id) => {

        axios.delete(`${url}/${id}`)
            .then((res) => {

                getNotes()

            })
            .catch((err) => {
                console.log(err)
            })
    }




    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className={Styles.container}>


            {
                notes.length > 0 && notes.map((el) => (
                    <div key={el.id}>

                        <h3 className={Styles.title}>{el.note}</h3>
                        <p>{el.description}</p>
                        <p>{`Created At: ${el.date}`}</p>

                        <Flex justifyContent={"center"} ml="20px">
                            <Button bgColor={"#eb6969"} color="white" onClick={() => deleteNote(el.id)} ><DeleteIcon /></Button>
                            <Button bgColor={"#eb6969"} color="white" onClick={() => AddtoBookmark(el.id)} >Bookmark</Button>
                        </Flex>


                    </div>
                ))
            }


        </div>
    )
}

export default Notes
