import {StyleSheet} from 'react-native';

export const colores = {
	primary: '#00acee',
	dark: '#141d26',
	gray: '#243447'
}

export const styles = StyleSheet.create({
	bottomBar:{
		color: 'white'
	},
	iconBar:{
		color:'white'
	},
	homeScreenView:{
		flex: 1,
		backgroundColor: colores.dark
	},
	topHomeMenu: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		marginHorizontal: 6,
		paddingBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: colores.gray
	},

	// ---- DRAWER STYLES ----

	drawerContainer:{
		flex: 1,
	},
	drawerProfile:{
		marginVertical: 10,
		marginHorizontal: 15
	},
	drawerContainerImage:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	drawerAvatar:{
		width: 70,
		height: 70,
		borderRadius: 100,
		marginBottom: 15	
	},
	drawerAvatarText:{
		color: 'white',
		marginVertical: 5,
		fontSize: 18
	},
	drawerUserText:{
		color: 'gray',
		fontSize: 14
	},
	drawerFollowersContainer:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	},
	drawerFollowingText:{
		color: 'white',
		paddingRight: 5
	},
	drawerFollowersText:{
		color: 'white',
		paddingLeft: 15,
		paddingRight: 5
	},
	drawerRoutesContainer:{
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	drawerRoutesIcon:{
		fontSize: 30,
		marginRight: 20
	},
	draweRoutesText:{
		color: 'white',
		fontSize: 16
	},

	// ---- FOR YOU ----

	forYouContainer:{
		flex: 1
	},
	forYouImage:{
		position: 'absolute',
		width: '100%',
		height: '40%',
		
	},
	forYouTextContainer:{
		display: 'flex',
		height: '40%',
		justifyContent: 'flex-end',
		marginLeft: 30,
		paddingBottom: 20
	},
	forYouContainerAlignment:{
		display: 'flex',
		flexDirection: 'row'
	},
	forYouTitle:{
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold'
	},
	forYouSubtitle:{
		color: 'white',
		fontSize: 15
	},
	forYouTrendingContainer:{
		// backgroundColor: 'red',
		padding: 10,
		borderWidth: 0.5,
		borderTopColor: 'gray',
		borderBottomColor: 'gray',
		paddingLeft: 15
	},
	forYouTrendingInText:{
		color:'gray',
		fontWeight: 'bold',
		fontSize: 13
	},
	forYouTrendingTitle:{
		color: 'white',
		marginVertical: 2,
		fontSize: 15
	},

	// ---- LOGIN -----

	loginView:{
		flex: 1,
		backgroundColor: colores.dark,
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginContainer:{	
		height: 500,
		width: 300,
	},

	loginLogoAlignment:{
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 5
	},

	loginLabel:{
		color: colores.primary,
		fontSize: 15
	},

	loginTextInput:{
		// backgroundColor: 'black'
		borderBottomWidth: 2,
		borderColor: colores.primary,
		marginBottom: 20,
		color: colores.primary
	},

	loginButton:{
		borderRadius: 100,
		backgroundColor: colores.primary,
		padding: 10,
		// width: '6'
	},

	// --- MESSAGES ---


	messagesContainer:{
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: colores.gray 
	},

	messagesInput:{
		backgroundColor: colores.gray,
		width: '60%',
		height: '70%',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},

	messageIcon:{
		backgroundColor: colores.gray,
		height: '70%',
		paddingTop: 7,
		paddingLeft: 7,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},

	//Message card

	messageContentContainer:{
		height: 100,
		// marginTop: 5,
		display: 'flex',
		flexDirection: 'row',
		// borderTopWidth: 2,
		borderBottomWidth: 2,
		borderColor: colores.gray
	},

	messageContentImage:{
		display: 'flex',
		alignItems: 'center',
		paddingTop: 10,
		paddingHorizontal: 10

	},

	messageContentText:{
		width: '74%',
		
	},

	messageContentHeader:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// justifyContent:'space-between',
	}
});