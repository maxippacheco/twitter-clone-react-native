import * as React from 'react';
import {HomeScreen} from '../views/principal-tabs/HomeScreen';
import { MessagesScreen } from '../views/principal-tabs/MessagesScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colores } from '../theme/appTheme';
// import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchScreen } from '../views/principal-tabs/SearchScreen';
import { NotificationsScreen } from '../views/principal-tabs/NotificationsScreen';

const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => {
	return(
		<Tab.Navigator
		      sceneAnimationEnabled={ true }
			barStyle={{
				backgroundColor: '#141d26',
				borderTopWidth: 1,
				borderTopColor: '#243447'
			}}
			activeColor='#00acee'
			screenOptions={({route}) => ({
				tabBarIcon: ({color, focused}) => {
          
					let iconName:string = '';

					switch ( route.name ) {
					case 'HomeScreen':
						iconName = 'home-outline'
					break;
					
					case 'SearchScreen':
						iconName = 'search-outline'
					break;

					case 'NotificationsScreen':
						iconName = 'notifications-outline'
					break;
					
					case 'MessagesScreen':
						iconName = 'mail-outline'
					break;
					} 
					
					return <Icon name={iconName} color={colores.primary} size={25} />
					// return <Icon style={styles.iconBar}>{iconName} />
				}
				})}
			>
			<Tab.Screen name='HomeScreen' options={{title:''}} component={HomeScreen} />
			<Tab.Screen name='SearchScreen' options={{title:''}} component={SearchScreen} />
			<Tab.Screen name='NotificationsScreen' options={{title:''}} component={NotificationsScreen} />
			<Tab.Screen name='MessagesScreen' options={{title:''}} component={MessagesScreen} />
		</Tab.Navigator>
	)
}