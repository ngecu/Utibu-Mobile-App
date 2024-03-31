import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
     >
      <Tabs.Screen
        name="one"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
          ,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Medication',
          tabBarIcon: ({ color }) => <TabBarIcon name="medkit" color={color} />
          ,
           headerShown: false
        }}
      />

<Tabs.Screen
        name="three"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />
          ,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <TabBarIcon name="credit-card" color={color} />
          ,
        }}
      />

<Tabs.Screen
        name="five"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
          ,
        }}
      />



    </Tabs>
  );
}
