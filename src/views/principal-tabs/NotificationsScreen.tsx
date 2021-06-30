import React, { useContext } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { colores } from '../../theme/appTheme';

export const NotificationsScreen = () => {

	const { authState , logout } = useContext(AuthContext);

	

	return (
		<View style={{flex: 1, backgroundColor: colores.dark}}>
			<Text style={{color: 'white', margin: 10}}>{JSON.stringify(authState, null, 3)}</Text>
			
			<View style={{margin: 10}}>

				<Button
					title='Logout'
					color='red'
					onPress={logout}
				></Button>
			</View>
			
		</View>
	);
}
