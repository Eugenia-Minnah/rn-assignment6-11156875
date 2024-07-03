import { View, Text, Image, StyleSheet } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Image source={require('../assets/Logo.png')} style={{ marginRight: 100, marginLeft: 150 }} />
        <Image source={require('../assets/Search.png')} style={{ left: 30 }} />
      </View>
      <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22, fontFamily:'Times New Roman', textDecorationLine: 'underline'  }}>CHECKOUT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});