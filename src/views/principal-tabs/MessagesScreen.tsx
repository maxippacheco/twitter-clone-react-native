import React from 'react';
import {TextInput, View, Image, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserMessage} from './user-messages/UserMessage';
import {colores, styles} from '../../theme/appTheme';
import {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';

export const MessagesScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MessageView}
        name="MessageView"
        options={{
          headerStyle: {
            backgroundColor: colores.dark,
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerTintColor: 'white',
          title: 'Messages',
          headerTitleAlign: 'center',
        }}></Stack.Screen>

      <Stack.Screen  
        component={UserMessage} 
        name="UserMessage"
        options={{
          headerStyle: {
            backgroundColor: colores.dark,
            shadowColor: 'transparent'
          
          },
          headerTintColor: 'white',
          title: '@jameschols',
          headerTitleAlign: 'center'
        }}  
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

/**
	 //RUTAS Y ARGUMENTOS QUE RECIBEN
		export type RootStackParams = {
		  Pagina1Screen: undefined,
		  Pagina2Screen: undefined,
		  Pagina3Screen: undefined,
		  PersonaScreen: { id: number, nombre: string }
		}

 */

interface Props extends DrawerScreenProps<any, any> {}

const MessageView = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
            style={{marginLeft: 10}}
            name="menu-outline"
            size={25}
            color={colores.primary}
          />
        </TouchableOpacity>
      ),
    });

    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="settings-outline"
          size={22}
          style={{marginRight: 10}}
          color={colores.primary}
        />
      ),
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colores.dark}}>
      <View style={styles.messagesContainer}>
        <View style={styles.messageIcon}>
          <Icon name="search" size={20} color="#ccc" />
        </View>

        <TextInput style={styles.messagesInput} />
      </View>

      <ScrollView>
        {/* CARD */}

        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>

        {/* CARD */}

        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>

        {/* CARD */}


        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>

        {/* CARD */}
        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>
      
  
        {/* CARD */}
        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>

          {/* CARD */}
        <TouchableOpacity
          style={styles.messageContentContainer}
          onPress={() => navigation.navigate('UserMessage')}>
          <View style={styles.messageContentImage}>
            <Image
              source={{
                uri: 'https://imgix.datadoghq.com/img/products/rum/tomhayman.png?mask=ellipse&auto=format',
              }}
              style={{height: 80, width: 80}}
            />
          </View>

          <View style={styles.messageContentText}>
            <View style={styles.messageContentHeader}>
              <View style={{paddingLeft: 5, marginTop: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>@jameschols</Text>
              </View>

              <View style={{paddingRight: 5, marginTop: 10}}>
                <Text style={{color: '#ccc'}}>19/02/2021</Text>
              </View>
            </View>
            <Text style={{marginTop: 10, color: '#ccc'}}>
              You sent a tweet from @tesla
            </Text>
          </View>
        </TouchableOpacity>

        
      </ScrollView>
    </View>
  );
};
