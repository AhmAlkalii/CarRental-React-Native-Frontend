import React,{useState} from 'react';
import { SafeAreaView,View, Text, StatusBar,Image, StyleSheet,TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

export default function DescriptionPage({navigation}) {
 const route = useRoute();
 const { carData, isLiked } = route.params;
 const [localIsLiked, setLocalIsLiked] = useState(isLiked);

 const handleLikePress = () => {
   setLocalIsLiked(!localIsLiked);
 };
 
 
 return (
    <SafeAreaView style={styles.safecontainer}>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
                <View style={styles.imageCard}>
                    <Image source={{ uri: carData.imageUrl }} style={styles.image} resizeMode='contain' />

                    <TouchableOpacity onPress={handleLikePress}>
                        <Icon
                            name={localIsLiked ? 'heart' : 'heart'}
                            size={24}
                            color={localIsLiked ? 'red' : '#EAECCC'}
                        />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.cardCars}>
                    <Text style={styles.cardText}>{carData.name}</Text>
                    <Text style={styles.cardText}>
                        <Icon name="star" size={16} color="#FF9800" />
                        {carData.stars}
                    </Text>
                </View>
            </View>
      </View>


      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>

        <View style={styles.cardsmall}>
            <View style={styles.space}>
                <Text style={styles.title}>Seats</Text>
                <Text style={styles.value}>{carData.seats}</Text>
            </View>
            <View style={styles.hrLine} />
            <View style={styles.space}>
                <Text style={styles.title}>Transmission</Text>
                <Text style={styles.value}>{carData.transmission}</Text>
            </View>
        
        </View>

        <View style={styles.cardsmall}>
            <View style={styles.space}>
                <Text style={styles.title}>Fuel type</Text>
                <Text style={styles.value}>{carData.fueltype}</Text>
            </View>
            <View style={styles.hrLine} />
            <View style={styles.space}>
                <Text style={styles.title}>Fuel usage</Text>
                <Text style={styles.value}>{carData.fuelusage}</Text>
            </View>
        </View>

      </View>
      
      <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Landing")}
          >
            <View style={styles.smallcontainer}>
                <View style={styles.smallborder}>
                        <Text style={{ color: "white", fontSize: 30, alignSelf:'center', paddingTop:3 }}>{carData.price}</Text>
                </View>
                <Text style={{ color: "black", fontSize: 25, alignSelf:'center', paddingTop:3, marginLeft:10 }}>
                    Book Now
                </Text>
            </View>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer:{
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  cardsmall: {
    padding: 25,
    backgroundColor: '#fff',
    shadowColor: "#000",
    width:175,
    shadowOffset: {
	    width: 6,
	    height: 6,
    },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
    
	    elevation :5
    },
    title :{
	    fontWeight:'bold'
    },
    value:{
	    color:'grey'    
    },
    space:{
        paddingBottom:2
    },
    hrLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 8,
    },
    card:{
        backgroundColor: 'white',
        padding:16,
        alignSelf:'center',
        borderRadius:8,
        borderWidth:0,
        width:350,
        shadowColor: '#333333',
        shadowOffset:{
            width:6,
            height:6
        },
        shadowOpacity:3,
        shadowRadius: 4
    },
    cardContainer:{
        marginBottom:14,
        margin:9
    },
    cardText:{
        fontSize:15,
        fontWeight:'bold'
    },
    imageCard:{
          flexDirection:'row',
    },
    cardCars:{
          flexDirection:'row',
          justifyContent:'space-between'
    },
    image:{
        width:'100%',
        height: 170,
        marginBottom:16,
        marginLeft: -10 
    },
    button:{
        backgroundColor: '#90EE90',
        borderRadius: 26,
        borderWidth: 1,
        flexBasis:60,
        width:337
    },
    buttonContainer:{
        alignItems:"center",
        margin:18,
        marginTop:130
    },
    smallborder:{
        borderRadius:20,
        borderWidth:1,
        width:150,
        backgroundColor:'red',
        
    },
    smallcontainer:{
        margin:5,
        flexDirection:'row',
        justifyContent:'center',
    }
});
