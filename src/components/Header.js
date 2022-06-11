import React from "react";
import {
    AppBar,
    Container,
    createTheme,
    MenuItem, 
    Select, 
    Toolbar, 
    Typography
} from '@mui/material';
 
 
//import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CryptoState } from "../CryptoContext";


const darkTheme = createTheme({
    palette: {
        primary:{
            main:"#fff",
        },
        type:"dark",
    },
  });

const Header = () =>{
    const { currency, setCurrency } = CryptoState() ;

   // let history = useHistory();

    return(
        <ThemeProvider theme={darkTheme}> 
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography
                    //    onClick={()=>history.push("/")}
                    variant="h"
                        style={{
                                flex:1,
                                color:"gold",
                                fontFamily:"Montserrat",
                                fontWeight:"bold",
                                cursor:"pointer",
                            }}
                    >Crypto Hunter</Typography>

                    <Select 
                        variant="outlined"
                        style={{
                            width:100,
                            height:40,
                            marginRight:15,
                            color:"white",
                        }}
                        value={currency}
                        onChange={(e)=> setCurrency(e.target.value)}
                        >
                        <MenuItem  value={"USD"}>USD</MenuItem>
                        <MenuItem  value={"EUR"}>EUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )

}

export default Header;
 