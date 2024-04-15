import { useState } from "react"
import Box from '@mui/material/Box';
import { Typography, Button, TextField, Container, Modal } from '@mui/material';
import useAPI from "../hooks/UseAPI";

export default function Medicines(){

    const { remove,update,add,data } = useAPI('medicines')
    const [popup,setPopup] = useState(false)
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const [quantity,setQuantity] = useState('')
    const [company,setCompany] = useState('')

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
                    <Typography variant="h3" color="darkred" >Medicine</Typography>
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
                        <Medicine key={val._id} item = {val} methods={{
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
                                label="Description"
                                variant="outlined"
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
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
                                label="Price"
                                variant="outlined"
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
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
                                label="Quantity"
                                variant="outlined"
                                value={quantity}
                                onChange={(e)=>setQuantity(e.target.value)}
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
                                label="Company"
                                variant="outlined"
                                value={company}
                                onChange={(e)=>setCompany(e.target.value)}
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
                                        description,
                                        price,
                                        quantity,
                                        company
                                    }).then(()=>setPopup(false) )
                                    
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


function Medicine({ item, methods }) {

const [updatePopup,setUpdatePopup] = useState(false) 
const [name,setName] = useState(item.name)
const [price,setPrice] = useState(item.price)
const [description,setDescription] = useState(item.description)
const [quantity,setQuantity] = useState(item.quantity)
const [company,setCompany] = useState(item.company)

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
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
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
                            label="Price"
                            variant="outlined"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
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
                            label="Quantity"
                            variant="outlined"
                            value={quantity}
                            onChange={(e)=>setQuantity(e.target.value)}
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
                            label="Company"
                            variant="outlined"
                            value={company}
                            onChange={(e)=>setCompany(e.target.value)}
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
                                    description,
                                    price,
                                    quantity,
                                    company
                                }).then(()=>setUpdatePopup(false) )
                                
                            }} 
                        >
                            Update
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
                        <Typography paragraph textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" width="300px" >Description: {description}</Typography>
                        <Typography paragraph>Price: {price}</Typography>
                        <Typography paragraph>Quantity: {quantity}</Typography>
                        <Typography paragraph>Company: {company}</Typography>
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