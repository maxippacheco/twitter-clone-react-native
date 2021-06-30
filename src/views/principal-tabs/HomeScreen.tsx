import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any>{};

export const HomeScreen = ({ navigation }: Props) => {
	
	
	return (
		<View style={styles.homeScreenView}>

			<View style={styles.topHomeMenu}>
				<TouchableOpacity
					onPress={() => navigation.toggleDrawer()}
				>
					<Icon name='menu' size={30} color={colores.primary} />
				</TouchableOpacity>
				<Icon name='logo-twitter' size={30} color={colores.primary} />
				<Icon name='cafe-outline' size={30} color={colores.primary} />
			</View>
		</View>
	);
}
