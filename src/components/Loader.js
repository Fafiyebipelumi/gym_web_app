import React from 'react';
import { Stack } from '@mui/material';
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
            <ReactLoading type='spin' color='black' delay={5000} width={'4%'} />
        </Stack>
    )
}

export default Loader;
