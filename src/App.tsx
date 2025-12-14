import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { appRouter } from './app/router';

function App() {

  const router = useRoutes(appRouter);

  return (
    <React.Fragment>
      {router}
    </React.Fragment>
  )
}

export default App
