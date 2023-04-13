import React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
// import AuthProvider from '../../auth';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
 
  return (
    <>
      {/* <AuthProvider></AuthProvider> */}
      <Grid container spacing={12}>
        {[darkTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <Outlet/>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </>
  );
}