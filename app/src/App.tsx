import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InitFirebase } from './config';
import { AuthProvider } from './middlewares';
import { LoginScreen, MypageScreen } from './pages'

InitFirebase()

function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthProvider />}>
        <Route index element={<MypageScreen />} />
      </Route>
      <Route path='login' element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
