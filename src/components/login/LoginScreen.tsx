
import React from 'react';
import { View, Button, TextInput, Text, NativeSyntheticEvent, TextInputChangeEventData, Alert } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { colores, styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

export const LoginScreen = () => {

	const { signIn } = useContext(AuthContext);

	const [username, onChangeUsername] = useState('');
	const [password, onChangePassword] = useState('');
	



	return (
		<View style={styles.loginView}>

			<View style={styles.loginContainer}>


				<View style={{...styles.loginLogoAlignment, marginBottom: 30}}>
					<Icon name='logo-twitter' size={40} color={colores.primary} />
				</View>

				<View>
					<Text style={styles.loginLabel}>Put your Username</Text>

					   <TextInput
						style={styles.loginTextInput}
						onChangeText={(text: any) => onChangeUsername(text)}
						value={username}
						// placeholder="Email or username"
					/>
				</View>

				<View style={{marginVertical: 10}}>
					<Text style={styles.loginLabel}>Put your Password</Text>

					   <TextInput
						style={styles.loginTextInput}
						onChangeText={(text: any) => onChangePassword(text)}
						value={password}
						// placeholder="Password"
						secureTextEntry={true}
						selectionColor = {colores.primary}
						// placeholderTextColor={colores.primary}
					/>
				</View>


					<Pressable
						onPress={() => {
						
							(username !== '' || password !== '') 
								? signIn(username, password)
								: null;
						
						}}
						style={styles.loginButton}	
					>
						<Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>Login</Text>
					</Pressable>
				
	

			</View>



		</View>
	);
}

