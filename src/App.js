import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './redux/store';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Product } from './components/views/Product/Product';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/products/:id" element={<Product />} />
              {/* <Route exact path="/login" component={Homepage} />
              <Route exact path="/post/add" component={PostAdd} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/post/:id/edit" component={PostEdit} />
              <Route exact path="/yourposts" component={YourPosts} /> */}
              {/* <Route path="*" component={NotFound} /> */}
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
