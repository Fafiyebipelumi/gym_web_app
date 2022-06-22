import { Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
