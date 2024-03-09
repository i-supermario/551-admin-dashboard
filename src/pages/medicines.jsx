import { useEffect, useState } from "react"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';


const mockData = [
    {
        "Id": 1,
        "Name": "Paracetamol",
        "Quantity": 100,
        "Description": "Pain reliever and fever reducer",
        "Price": 10.99,
        "Company": "ABC Pharmaceuticals"
    },
    {
        "Id": 2,
        "Name": "Ibuprofen",
        "Quantity": 50,
        "Description": "Nonsteroidal anti-inflammatory drug (NSAID)",
        "Price": 8.99,
        "Company": "XYZ Pharmaceuticals"
    },
    {
        "Id": 3,
        "Name": "Aspirin",
        "Quantity": 75,
        "Description": "Analgesic and antipyretic",
        "Price": 7.99,
        "Company": "DEF Pharmaceuticals"
    },
    {
        "Id": 4,
        "Name": "Loratadine",
        "Quantity": 30,
        "Description": "Antihistamine",
        "Price": 6.99,
        "Company": "GHI Pharmaceuticals"
    },
    {
        "Id": 5,
        "Name": "Ciprofloxacin",
        "Quantity": 20,
        "Description": "Antibiotic",
        "Price": 15.99,
        "Company": "JKL Pharmaceuticals"
    },
    {
        "Id": 6,
        "Name": "Omeprazole",
        "Quantity": 45,
        "Description": "Proton pump inhibitor",
        "Price": 9.99,
        "Company": "MNO Pharmaceuticals"
    },
    {
        "Id": 7,
        "Name": "Metformin",
        "Quantity": 60,
        "Description": "Antidiabetic medication",
        "Price": 11.99,
        "Company": "PQR Pharmaceuticals"
    },
    {
        "Id": 8,
        "Name": "Simvastatin",
        "Quantity": 25,
        "Description": "Cholesterol-lowering medication",
        "Price": 12.99,
        "Company": "STU Pharmaceuticals"
    },
    {
        "Id": 9,
        "Name": "Amlodipine",
        "Quantity": 35,
        "Description": "Calcium channel blocker",
        "Price": 10.49,
        "Company": "VWX Pharmaceuticals"
    },
    {
        "Id": 10,
        "Name": "Levothyroxine",
        "Quantity": 40,
        "Description": "Thyroid hormone replacement",
        "Price": 7.49,
        "Company": "YZA Pharmaceuticals"
    }
]



export default function Medicines(){

    const [medicines,setMedicines] = useState([])

    useEffect(()=>{
        setMedicines(mockData)
    },[])

    console.log(medicines)

    return(
        <>
            <Container sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:"5px"
            }}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3" color="green" >Medicine List</Typography>
                    <Button variant="text" color="primary">
                      Add
                    </Button>
                </Box>
                {
                    medicines.map(val => 
                        <Medicine key={val.Id} name={val.Name} company={val.Company} description={val.Description} price={val.Price} quantity={val.Quantity} />
                    ) 
                }
            </Container>
        </>
    )
}


function Medicine({ name, description, price, quantity, company }) {

    return(
        <>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:"5px",
                border:"solid 2px",
                padding:"10px"
            }}>
                <Typography paragraph>Name: {name}</Typography>
                <Typography paragraph>Description: {description}</Typography>
                <Typography paragraph>Price: {price}</Typography>
                <Typography paragraph>Quantity: {quantity}</Typography>
                <Typography paragraph>Company: {company}</Typography>
            </Box>
        </>
    )
}