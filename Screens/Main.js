import * as React from 'react';
import { Text, View } from 'react-native';
import Complain from './Complain';
import Chat from './Chat';
import NewsFeed from './Newsfeed';
import Notification from './Notification';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Newsfeed') {
            iconName = 'home';
          } else if (route.name === 'Complain') {
            iconName ='report';
          } else if (route.name == 'Notifications') {
            iconName ='notifications-none';
          } else if (route.name == 'Messages') {
            iconName ='message';
          }


          return <MaterialIcon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0084FF',
        inactiveTintColor: 'gray',
      }}
      
      >
        <Tab.Screen name="Newsfeed" component={NewsFeed} />
        <Tab.Screen name="Complain" component={Complain} />
        <Tab.Screen name="Notifications" component={Notification} />
        <Tab.Screen name="Messages" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}