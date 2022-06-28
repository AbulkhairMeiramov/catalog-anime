import { Grid } from '@mui/material'
import { Box, Container } from "@mui/material"
import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { LinkBase } from './styles/LinkBase'

export const  Footer = ()=> {
  return (
   <footer>
     <Box px={{xs: 3, sm: 5 }} 
          py={{xs: 5, sm: 10}}
          sx={{bgcolor: "success.main",  color: "white", mt: "16px"}}
          textAlign="center">
       <Container maxWidth="md">
         <Grid container spacing={5}>
           <Grid item xs={12} sm={6} md={4}>
             <Box borderBottom={1}>
               <LinkBase to="/home" >
               FAQs
               </LinkBase>
             </Box>
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
             <Box borderBottom={1}>
               <LinkBase to="/home">
               Contact Us
               </LinkBase>
             </Box>
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
             <Box borderBottom={1}>
               <LinkBase to="/home" >
               Copyright for Films
               </LinkBase>
             </Box>
            </Grid> 
         </Grid>
         <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm:0}}>
           Studio Ghibli &reg; {new Date().getFullYear()}
         </Box>
       </Container>
     </Box>
   </footer>
  )
}

