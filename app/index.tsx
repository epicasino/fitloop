import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Hello.</Text>
      <Link replace href="/home" style={styles.text}>
        To Tabs
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
});
