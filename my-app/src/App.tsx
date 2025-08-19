import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
            const Page = route.component
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
