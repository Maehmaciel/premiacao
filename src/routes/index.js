import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext, AuthProvider} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import SignedRoutes from './signed.routes';

function App() {
  const {signed, token} = useContext(AuthContext);

  return token ? <SignedRoutes /> : <AuthRoutes />;
}

export default App;
