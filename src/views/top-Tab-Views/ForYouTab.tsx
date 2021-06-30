import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { styles, colores } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

export const ForYouTab = () => {
	return (
		<View style={styles.forYouContainer}>
			<Image 
				source={{
					uri: 'https://images.lavoz.com.ar/resizer/lxiuLWmYIUyXQ9ju-egTJ3nmQwQ=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LX7C4SNLOJFPBM7G2BG2KTVKTM.jpg'
				}}
				style={styles.forYouImage}
			/>


			<View style={styles.forYouTextContainer}>
				
				<View style={styles.forYouContainerAlignment}>
					<Text style={{
						...styles.forYouSubtitle,
						fontWeight: 'bold',
						marginRight: 10
					}}>Football</Text>

					
					<Text style={styles.forYouSubtitle}>Last Night</Text>
				</View>


					<Text style={ styles.forYouTitle } >Brazil vs Colombia</Text>
					
					<Text style={{color: 'white'}}>Trending with Pitana</Text>
			
			</View>

			<ScrollView>
				<View style={styles.forYouTrendingContainer}>
					<Text style={styles.forYouTrendingInText}>Trending in Argentina</Text>
					<Text style={styles.forYouTrendingTitle}>Bitcoin</Text>
					<Text style={{color: 'white'}}>93.1K Tweets</Text>
				</View>

				<View style={styles.forYouTrendingContainer}>
					{/* <Text style={styles.forYouTrendingInText}>Trending in Argentina</Text> */}
					<Text style={styles.forYouTrendingTitle}>Doge to the moon</Text>
					<Text style={{color: 'white'}}>67.1K Tweets</Text>
				</View>


				<View style={styles.forYouTrendingContainer}>
					<Text style={styles.forYouTrendingInText}>Trending</Text>
					<Text style={styles.forYouTrendingTitle}>Bitcoin</Text>
					<Text style={{color: 'white'}}>43.7K Tweets</Text>
				</View>

				<View style={styles.forYouTrendingContainer}>
					<Text style={styles.forYouTrendingInText}>Trending in Brasil</Text>
					<Text style={styles.forYouTrendingTitle}>Varsil vs Colombia</Text>
					<Text style={{color: 'white'}}>23.1K Tweets</Text>
				</View>
				
				<View style={styles.forYouTrendingContainer}>
					<Text style={styles.forYouTrendingInText}>Pache did it</Text>
					<Text style={styles.forYouTrendingTitle}>What are you looking for?</Text>
					<Text style={{color: 'white'}}>13M Tweets</Text>
				</View>

				<View style={styles.forYouTrendingContainer}>
					<Text style={styles.forYouTrendingInText}>Trending in EEUU</Text>
					<Text style={styles.forYouTrendingTitle}>Miss the rage literally broke internet</Text>
					<Text style={{color: 'white'}}>13.1K Tweets</Text>
				</View>

			</ScrollView>


		</View>
	);
}
