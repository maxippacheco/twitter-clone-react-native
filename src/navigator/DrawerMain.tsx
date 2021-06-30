import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { Profile } from '../views/draver-views/Profile';
import { List } from '../views/draver-views/List';
import { Topics } from '../views/draver-views/Topics';
import { BookMarks } from '../views/draver-views/BookMarks';
import { Moments } from '../views/draver-views/Moments';
import { BottomTab } from './BottomTab';
import { Text } from 'react-native-paper';
import { colores, styles } from '../theme/appTheme';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();



export const DrawerMain = () => {
	return (
		<Drawer.Navigator
			drawerContent={DrawerContent}
			drawerStyle={{backgroundColor: colores.dark}}
		>
			<Drawer.Screen name='Tabs' component={BottomTab} />
			<Drawer.Screen name='Profile' component={Profile} />
			<Drawer.Screen name='Lists' component={List} />
			<Drawer.Screen name='Topics' component={Topics} />
			<Drawer.Screen name='Bookmarks' component={BookMarks} />
			<Drawer.Screen name='Moments' component={Moments} />

		</Drawer.Navigator>
	)
}


const DrawerContent = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
	return (
		<DrawerContentScrollView style={styles.drawerContainer}>
			<View style={styles.drawerProfile}>
				
				<View style={styles.drawerContainerImage}>
					<Image 
						source={{
							uri: 'https://res.cloudinary.com/dvsjqkxip/image/upload/v1624545984/userProfile_bmmpsd.jpg'
						}}

						style={styles.drawerAvatar}
					/>
					<Icon 
						name='people'
						size={30}
						color={colores.primary}
					/>
				</View>
				
				<Text style={styles.drawerAvatarText}>maxi</Text>
				<Text style={styles.drawerUserText}>@pachelife</Text>
					
				<View style={styles.drawerFollowersContainer}>
					<Text style={styles.drawerFollowingText}>299</Text>
					<Text style={{color: 'gray'}}>Following</Text>
					<Text style={styles.drawerFollowersText}>19k</Text>
					<Text style={{color: 'gray'}}>Followers</Text>
				</View>


					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Profile') }
							style={styles.drawerRoutesContainer}
						>
							<Icon  name='person-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Profile</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Lists') }
							style={styles.drawerRoutesContainer}

						>
							<Icon  name='reader-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Lists</Text> 
						</TouchableOpacity>
					</View>

						<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Topics') }
							style={styles.drawerRoutesContainer}
						>
							<Icon  name='chatbubble-ellipses-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Topics</Text>
						</TouchableOpacity>
					</View>
					
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Bookmarks') }
							style={styles.drawerRoutesContainer}
						>
							<Icon  name='bookmark-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Bookmark</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Moments') }
							style={styles.drawerRoutesContainer}
						>
							<Icon  name='flash-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Moments</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Tabs') }
							style={styles.drawerRoutesContainer}
						>
							<Icon  name='home-outline' color='gray' size={30} style={styles.drawerRoutesIcon} />
							<Text style={styles.draweRoutesText}>Home</Text>
						</TouchableOpacity>
					</View>


				</View>


		</DrawerContentScrollView>
	)
}