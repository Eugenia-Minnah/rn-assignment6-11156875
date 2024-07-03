import { View, Text, StyleSheet, Image, Pressable, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
{ id: '1', name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
{ id: '2', name: 'Black', price: 120, image: require('../assets/dress2.png') },
{ id: '3', name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
{ id: '4', name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
{ id: '5', name: '21WN', price: 120, image: require('../assets/dress5.png') },
{ id: '6', name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
{ id: '7', name: '21WN', price: 120, image: require('../assets/dress7.png') },
{ id: '8', name: 'Lame', price: 120, image: require('../assets/dress3.png') },
];
const { width } = Dimensions.get('window');
export default function HomeScreen({ navigation }) {
    const [cart, setCart] = useState([]);
    const [numColumns, setNumColumns] = useState(2);

    useEffect(() => {
        const loadCart = async () => {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
        };
        loadCart();
    }, []);

    const addToCart = async (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const renderProduct = ({ item }) => (
        <View style={styles.product}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.cartItemDescription}>reversible angora cardigan</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Image source={require('../assets/add_circle.png')} style={styles.addButton} />
        </TouchableOpacity>
        </View>
    );

    const handlePress = (action) => {
    if (action === 'ShoppingBag') {
        navigation.navigate('Cart', { Shoppingbag: cart });
    } else {
        console.log(`${action} pressed`);
    }
    };

return(
<View style={styles.container}>
<View style={styles.home}>
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
    <Text style={{fontSize:25 , fontFamily: 'Didot'}}>OUR STORY</Text>
</View>

<Pressable style={styles.ListViewBorder} onPress={() => handlePress('ListView')}>
        <Image source={require('../assets/ListView.png')} style={styles.ListView} />
    </Pressable>

    <Pressable style={styles.FilterBorder} onPress={() => handlePress('Filter')}>
        <Image source={require('../assets/Filter.png')} style={styles.Filter} />
    </Pressable>
    </View>
    <FlatList
        data={products}
        key={(numColumns)}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 && styles.row}
    />
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#ffffff',
    },
    home:{
            height:180,
            width: '100%'
    },
    MenuIcon: {
        top: 40,
        width: 33,
        height: 33,
        left:10
    },
    Logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 45,
        left:70,
    },
    SearchIcon: {
        top: -40,
        left: 320,
        width: 30,
        height: 30,
    },
    ShoppingBagIcon: {
        width: 30,
        height: 30,
        top:-70,
        left: 370,
    },
    title: {
        fontSize: 26,
        fontFamily: 'Didot',
        top: -20,
        left:10
    },
    ListViewBorder: {
        backgroundColor: '#F0F0F0',
        borderRadius: 50,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        top: -55,
        left: 310,
    },
    ListView: {
        height: 25,
        width: 25,
    },
    FilterBorder: {
        backgroundColor: '#F0F0F0',
        borderRadius: 50,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        top:-100,
        left:360,
    },
    Filter: {
        height: 25,
        width: 25,
    },

product: {
    flex: 1,
    margin: 8,
    height:330,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingBottom: 10,
},
productImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
},
productName: {
    fontSize: 18,
    fontWeight:20,
    marginVertical: 8,
    textAlign: 'left',
},
productPrice: {
    fontSize: 18,
    color: '#FF8000',
    textAlign: 'left',
    marginVertical:15,

},
addButton: {
    borderRadius: 50,
    padding: 8,
    marginTop: -75,
    marginLeft:70,
},
addButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
},
cartItemDescription: {
    fontSize: 15,
    color: '#888',
    marginVertical: -8,
},
});
