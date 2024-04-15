import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router"
import { useState } from "react"

export default function Login(){

    const LoginList = ["sarang1699@gmail.com"]
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

    return(
        <>
            <Container disableGutters sx={{
              paddingX: "200px"
            }} >
                <Typography variant="h2" color="initial">Admin Login</Typography>
                <TextField
                  label="email"
                  variant="outlined"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  color="warning"
                  size="small"
                  sx={{
                    input:{
                        color:"orange"
                    }
                  }}
                  InputLabelProps={{style : {color : 'orange'}}}
                />
                <Button onClick={()=>{
                    LoginList.find(value => value==email) ? navigate("/medicine") : console.log("Try another email")
                }} variant="text" color="primary">
                  Submit
                </Button>
            </Container>
        </>
    )
}