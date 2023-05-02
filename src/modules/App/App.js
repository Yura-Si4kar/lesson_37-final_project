import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableList } from '../../store/actions/tablesActions';
import { selectLoading } from '../../store/selectors/selectors';
import Loading from '../../Components/Loading/Loading';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getTableList('tables'));
  }, [dispatch]);

  return (
    <>
      {loading && <Loading/>}
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