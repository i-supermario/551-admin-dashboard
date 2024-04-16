import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

export default function Medicine({ item, methods }) {

    const [updatePopup,setUpdatePopup] = useState(false) 
    const [name,setName] = useState(item.name)
    const [price,setPrice] = useState(item.price)
    const [description,setDescription] = useState(item.description)
    const [quantity,setQuantity] = useState(item.quantity)
    const [company,setCompany] = useState(item.company)
    const [imageURL,setImageURL] = useState(item.image_URL)
    
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
                            <TextField
                                label="Company"
                                variant="outlined"
                                value={imageURL}
                                onChange={(e)=>setImageURL(e.target.value)}
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
                            <Typography paragraph textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" width="300px" >Description: {description}</Typography>
                            <Typography paragraph>Price: {price}</Typography>
                            <Typography paragraph>Quantity: {quantity}</Typography>
                            <Typography paragraph>Company: {company}</Typography>
                            <Box display='flex' columnGap='20px' > 
                                <Typography>ImageURL:</Typography>
                                <img height={'100px'} src={imageURL} target="_blank" />
                            </Box> 
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