import React from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import { useLenis } from './hooks/useLenis';

function App() {
    useLenis();

    return (
        <>
            <Loader />
            <CustomCursor />
            <Home />
        </>
    );
}

export default App;
