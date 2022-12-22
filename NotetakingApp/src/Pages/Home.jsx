import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


import Styles from "./Home.module.css"
import Notes from './Notes';

const Home = () => {


    const url = "https://mock4-json-server.onrender.com/users"


    const [note, setNote] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");




    const [data, setData] = useState([]);

    const getNotes = () => {

        axios.get(url)
            .then((res) => {
                
                setData(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }




    const Addnote = () => {
        let noteObj = {
            note: note, description: description, date: date
        }
        axios.post(url, noteObj)
            .then((res) => {
              
                setDate("");
                setDescription("");
                setNote("")
                alert("Note successfully added")
                getNotes()
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (

        <>
            <div className={Styles.container}>



                <Box >
                    <Heading>Take Note</Heading>
                    <Box>
                        <Input placeholder=" Take Note..." value={note} onChange={(e) => setNote(e.target.value)} />
                    </Box>

                    <Box>
                        <Textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
                    </Box>

                    <Box>
                        <Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
                    </Box>
                    <Box>
                        <Button bgColor={"#eb6969"} color="white" onClick={Addnote}>ADD NOTE</Button>
                    </Box>

                </Box>





            </div>

            <Notes notes={data} getNotes={getNotes} />

        </>
    )
}

export default Home
