import { Box, Paper, Typography, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const myTheme = useTheme();

    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3100/myData")
            .then((response) => response.json())
            .then((data) => setMyData(data));
    }, []);

    let totalPrice = 0;

    return (
        <Box sx={{ marginTop: '60px' }}>

            {myData.map((item) => {

                totalPrice += item.price;

                return (
                    <Paper key={item.id} sx={{ width: "366px", display: "flex", justifyContent: "space-between", marginTop: "22px", padding: "32px 16px 8px 16px", position: "relative" }}>
                        <Typography variant="h6" color={myTheme.palette
                            // @ts-ignore
                            .favColor.main}>{item.title}</Typography>
                        <Typography variant="h6" sx={{ fontWeight: "500", opacity: "0.6" }}>${item.price}</Typography>
                        <IconButton size='small' sx={{ position: "absolute", top: "0", right: "0" }} onClick={() => {
                            fetch(`http://localhost:3100/myData/${item.id}`, { method: "DELETE" });
                            const newArr = myData.filter((myObject) => {
                                return myObject.id !== item.id;
                            });
                            setMyData(newArr);
                        }}>
                            <CloseIcon />
                        </IconButton>
                    </Paper>
                );

            })}

            <Typography mt="55px" textAlign="center" variant="h6">
                👉 You Spend ${totalPrice}
            </Typography>

        </Box>
    )
}

export default Home;