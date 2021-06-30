import * as React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { DrawerMain } from '../navigator/DrawerMain';
import { LoginScreen } from '../components/login/LoginScreen';

export const MainApp = () => {
	
	const { authState } = useContext( AuthContext );


	return (
		(!authState.isLoggedIn) ? <LoginScreen /> : <DrawerMain />
	)
}