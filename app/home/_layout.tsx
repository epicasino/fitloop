import { Tabs } from 'expo-router';

const example = false;

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="about" options={{ headerShown: false }} />
    </Tabs>
  );
}
