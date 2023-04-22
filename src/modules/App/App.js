import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTableList } from '../../store/actions/tablesActions';
// import AuthProvider from '../../auth';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableList('tables'));
  }, [dispatch])  
 
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