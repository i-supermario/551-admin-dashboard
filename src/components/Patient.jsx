import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

export default function Patient({ item, methods }) {

    const [updatePopup,setUpdatePopup] = useState(false) 
    const [name,setName] = useState(item.name)
    const [age,setAge] = useState(item.age)
    const [gender,setGender] = useState(item.gender)
    
    return(
        <>
            <Box sx={{
                display:"flex",
                columnGap:"5px",
                border:"solid 2px",
                padding:"10px",
                width:"500px",
                borderRadius:"10px",
                justifyContent: "space-between",
                alignItems: "start"
            }}>
                {
                    updatePopup ?
                    <>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "10px"
                        }}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                disabled
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                color="info"
                                size="small"
                                sx={{
                                    input:{
                                        color:"orange"
                                    }
                                }}
                                InputLabelProps={{style : {color : 'green'}}}
                            />
                            <TextField
                                label="Age"
                                variant="outlined"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                                color="info"
                                size="small"
                                sx={{
                                    input:{
                                        color:"orange"
                                    }
                                }}
                                InputLabelProps={{style : {color : 'green'}}}
                            />
                            <TextField
                                label="Gender"
                                variant="outlined"
                                value={gender}
                                onChange={(e)=>setGender(e.target.value)}
                                color="info"
                                size="small"
                                sx={{
                                    input:{
                                        color:"orange"
                                    }
                                }}
                                InputLabelProps={{style : {color : 'green'}}}
                            />
                        </Box>
                        <Box display="flex" columnGap="10px">
                            <Button size="small" variant="outlined" color="info" 
                                onClick={()=>{
                                    methods.update({
                                        name,
                                        age,
                                        gender
                                    }).then(()=>setUpdatePopup(false) )
                                    
                                }} 
                            >
                                Submit
                            </Button>
                            <Button size="small" variant="outlined" color="error" 
                                onClick={()=>setUpdatePopup(false)} 
                            >
                                Close
                            </Button>
                        </Box>
                    </>
                    :
                    <>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Typography paragraph>Name: {name}</Typography>
                            <Typography paragraph textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" width="300px" >Age: {age}</Typography>
                            <Typography paragraph>Gender: {gender}</Typography>
                        </Box>
                        <Box display="flex" columnGap="10px">
                            <Button size="small" variant="outlined" color="info" 
                                onClick={()=>setUpdatePopup(true)} 
                            >
                                Update
                            </Button>
                            <Button size="small" variant="outlined" color="error" 
                                onClick={()=>methods.delete({name})} 
                            >
                                Remove
                            </Button>
                        </Box>
                    </>
                }
            </Box>
            </>
        )
    }