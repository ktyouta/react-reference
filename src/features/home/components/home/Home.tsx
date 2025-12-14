import { Box } from '@mui/material';
import React from 'react';
import '../../../../App.css';
import reactLogo from '../../../../assets/react.svg';
import viteLogo from '/vite.svg';

type Props = {
    count: number,
    click: () => void,
}

export const Home = (props: Props) => {

    return (
        <React.Fragment>
            <Box>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </Box>
            <h1>Vite + React</h1>
            <Box className="card">
                <button onClick={props.click}>
                    count is {props.count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </Box>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </React.Fragment>
    )
};