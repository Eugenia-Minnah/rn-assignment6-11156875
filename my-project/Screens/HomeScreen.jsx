import { View, Text, StyleSheet, Image, Pressable, } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen({ navigation }) {
    const [cart, setCart] = useState([]);

    const handlePress = (action) => {
    if (action === 'ShoppingBag') {
        navigation.navigate('Cart', { Shoppingbag: cart });
    } else {
        console.log(`${action} pressed`);
    }
    };

    const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added to cart: ${item.title}`);
    };
return(
<View style={styles.container}>
<View style={styles.home}></View>
<Pressable onPress={() => handlePress('Menu')}>
<Image
source={require('../assets/Menu.png')}style={styles.MenuIcon}/>
</Pressable>

<View style={styles.Logo}>
<Image
source={require('../assets/Logo.png')} style={styles.Logo}/>
</View>

<Pressable onPress={() => handlePress('Search')}>
<Image
source={require('../assets/Search.png')}style={styles.SearchIcon}/>
</Pressable>

<Pressable onPress={() => handlePress('ShoppingBag')}>
<Image
source={require('../assets/shoppingBag.png')}style={styles.ShoppingBagIcon}/>
</Pressable>
<View style={styles.title}>
    <Text style={{fontSize:24 , fontFamily: 'Didot'}}>OUR STORY</Text>
</View>

<Pressable style={styles.ListViewBorder} onPress={() => handlePress('ListView')}>
        <Image source={require('../assets/ListView.png')} style={styles.ListView} />
    </Pressable>

    <Pressable style={styles.FilterBorder} onPress={() => handlePress('Filter')}>
        <Image source={require('../assets/Filter.png')} style={styles.Filter} />
    </Pressable>
    
    </View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection:'row',
backgroundColor: '#ffffff',
},
home: {
width: 50,
height: 70,
},
MenuIcon:{
top:45,
left:-40,
width:33,
height: 35,
},
Logo:{
    top:22,
    left:30,
    height:47,
    width: 118,
},
SearchIcon:{
    top:50,
    left: 130,
    height: 30,
    width:30,
},
ShoppingBagIcon:{
    top:50,
    left: 140,
    height: 30,
    width:30,
},
title:{
    top:120,
    right:250
},
ListViewBorder:{
    top:110,
    right: 100,
    backgroundColor: '#F0F0F0',
    borderRadius:50,
    height: 45,
    width: 45,
},
ListView:{
    top:10,
    left:10,
    height: 25,
    width:25,
},
FilterBorder:{
    top:110,
    right: 90,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    height: 45,
    width: 45,
},
Filter:{
    top:10,
    left:10,
    height: 25,
    width:25,
},
});
