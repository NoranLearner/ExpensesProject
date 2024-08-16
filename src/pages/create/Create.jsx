import React from 'react'
import { TextField, InputAdornment, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    // backgroundColor: purple[500],
    // @ts-ignore
    backgroundColor: theme.palette.favColor.main,
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const Create = () => {

    const navigate = useNavigate();

    const onSubmit = ({ title, price }) => {
        price = Number(price);
        fetch("http://localhost:3100/myData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
        }).then(() => {
            navigate("/");
        });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Box component="form" sx={{ width: "380px" }} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            <TextField
                label="Transaction Title"
                sx={{ mt: 3, display: "block" }}
                InputProps={{
                    // https://www.w3schools.com/charsets/ref_emoji_hands.asp
                    startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
                }}
                variant="filled"
                fullWidth
                {...register("title", {
                    required: { value: true, message: "Requires field" },
                    minLength: { value: 3, message: "minimum length is 3" },
                })}
                error={Boolean(errors.title)}
                helperText={
                    Boolean(errors.title) ? errors.title?.message.toString() : null
                }
            />

            <TextField
                type="number"
                label="Amount"
                sx={{ mt: 3, display: "block" }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="filled"
                fullWidth
                {...register("price", {
                    required: { value: true, message: "Required field" },
                })}
                error={Boolean(errors.price)}
                helperText={
                    Boolean(errors.price) ? errors.price?.message.toString() : null
                }
            />

            <ColorButton
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ marginTop: '22px' }}
            >Submit</ColorButton>

        </Box>
    )
}

export default Create;