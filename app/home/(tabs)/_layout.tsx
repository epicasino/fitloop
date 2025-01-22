import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#222222',
          borderColor: '#222222',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: () => <FontAwesome name="home" size={24} color="#fff" />,
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          headerShown: false,
          title: 'Meals',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="food-apple" size={24} color="#fff" />
          ),
        }}
      />
    </Tabs>
  );
}
