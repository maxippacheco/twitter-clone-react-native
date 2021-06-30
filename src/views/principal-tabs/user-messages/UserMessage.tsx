import React from 'react';
import {Image, View} from 'react-native';
import { colores } from '../../../theme/appTheme';

export const UserMessage = () => {

	// const navigation = useNavigation()


	return (
		<View style={{flex: 1, backgroundColor: colores.dark}}>
			<View style={{display: 'flex', width: '100%', alignItems: 'center'}}>
				<Image 
					source={{
						uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format'
					}}

					style={{width: 50, height: 50}}
				/>
			</View>
		</View>
	);
}
