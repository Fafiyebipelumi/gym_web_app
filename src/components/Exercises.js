import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material'

const Exercises = ({ setExercises, bodyPart, exercises }) => {
    console.log(exercises);
    return (
        <Box id='#exercises'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'
        >
            <Typography variant='h3' fontWeight='bold' sx={{ fontSize: { lg: '44px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
                Showing Results
            </Typography>
            <Stack direction='row' sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
                {exercises.map((exercise, index) => {
                    <p>{exercise.name}</p>
                })}
            </Stack>
        </Box>
    )
}

export default Exercises