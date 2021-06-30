import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TrendingTab } from '../top-Tab-Views/TrendingTab';
import { ForYouTab } from '../top-Tab-Views/ForYouTab';
import { Covid19Tab } from '../top-Tab-Views/Covid19Tab';
import { NewsTab } from '../top-Tab-Views/NewsTab';
import { colores, styles } from '../../theme/appTheme';

const Tab = createMaterialTopTabNavigator();


export const SearchScreen = () => {
	return (
			<Tab.Navigator
				sceneContainerStyle={{backgroundColor: colores.dark}}
				tabBarOptions={{
					pressColor: colores.primary,
					style:{
						backgroundColor: colores.dark,
						padding: 3						
					},
					activeTintColor: 'white',
					inactiveTintColor: 'white'
					
					
				}}
			>
				<Tab.Screen name="ForYouTab" options={{title: 'For you'}} component={ForYouTab} />
				<Tab.Screen name="TrendingTab" options={{title: 'COVID-19'}} component={TrendingTab} />
				<Tab.Screen name="Covid19Tab" options={{title: 'Trending'}} component={Covid19Tab} />
				<Tab.Screen name="NewsTab" options={{title: 'News'}} component={NewsTab} />
			</Tab.Navigator>
	);
}