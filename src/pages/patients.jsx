import { useState } from "react"
import Box from '@mui/material/Box';
import { Typography, Button, TextField, Container, Modal } from '@mui/material';
import useAPI from "../hooks/UseAPI";
import Patient from "../components/Patient";

export default function Patients(){

    const { remove,update,add,data } = useAPI('patients')
    const [popup,setPopup] = useState(false)
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')

    console.log(data)

    return(
        <>
        <Container
            sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'center'
            }}
        >
            <Container sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:"5px",
                width: "60%"
            }}>
                <Box 
                    sx={{
                        display:"flex",
                        width: "500px",
                        columnGap: "30px",
                        alignItems: "center"
                    }} 
                >
                    <Typography variant="h3" color="darkred" >Patients</Typography>
                </Box>
                <Button 
                    sx={{
                            width: "60px",
                            height: "30px"
                        }} 
                    size="small" 
                    variant="outlined" 
                    color="success"
                    onClick={()=>setPopup(!popup)}
                >
                    Add
                </Button>
                {
                    data ? 
                    data.map(val => 
                        <Patient key={val._id} item = {val} methods={{
                            update: update,
                            delete: remove
                        }} />
                    )
                    :
                    <Box sx={{
                        display:"flex",
                        columnGap:"5px",
                        border:"solid 2px",
                        margin: '50px',
                        padding:"10px",
                        width:"500px",
                        borderRadius:"10px",
                        justifyContent: "space-between",
                        alignItems: "start"
                    }}>
                        No data
                    </Box>
                }
            </Container>
            {
                popup && 
                <Modal

                    open={popup}
                    sx={{
                        alignSelf:'center',
                        backgroundColor:'white',
                        display:"flex",
                        columnGap:"5px",
                        border:"solid 2px",
                        padding:"10px",
                        width:"400px",
                        borderRadius:"10px",
                        justifyContent: "space-between",
                        alignItems: "start",
                        left:'1000px'
                    }}
                    hideBackdrop
                    disableScrollLock={false}
                >
                    <>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "10px"
                        }}>
                            <TextField
                                label="Name"
                                variant="outlined"
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
                                    add({
                                        name,
                                        age,
                                        gender,
                                    }).then(()=>{
                                        setPopup(false)
                                        setAge('')
                                        setName('')
                                        setGender('')
                                    } )
                                    
                                }} 
                            >
                                add
                            </Button>
                            <Button size="small" variant="outlined" color="error" 
                                onClick={()=>setPopup(false) } 
                            >
                                close
                            </Button>
                        </Box>
                    </>
                    
                </Modal>
        }   
        </Container>
    </>
)
}


