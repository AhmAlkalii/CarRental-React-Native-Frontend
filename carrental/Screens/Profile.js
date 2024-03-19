import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Modal, Pressable, Image } from 'react-native'
import { globalStyles } from "../components/styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';


const Profile = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <SafeAreaView style={globalStyles.safecontainer2}>
        
        <TouchableOpacity onPress={pickImage}>
            <View style={globalStyles.profileborder}>
                <View style={globalStyles.profileborder2}>
                    {image ? (
                        <Image
                        source={{ uri: image }}
                        style={{ width: 155, height: 155, borderRadius: 100 }}
                        />
                    ) : (
                        <View style={globalStyles.placeholderContainer}>
                            <Text style={globalStyles.placeholderText}>Add Profile Picture</Text>
                            <Icon name="camera" size={17} color="black" style={{ paddingTop: 5 }} />
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>

        <View style={globalStyles.firstbackground}>
            <View style={globalStyles.textborder}>
               <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
               <    View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>Log Out</Text>
                        <MaterialIcons name="logout" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
               </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>Edit Profile</Text>
                        <Icon name="edit" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity onPress={() => navigation.navigate("Support")}>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>App Support</Text>
                        <MaterialIcons name="contact-support" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity  onPress={toggleModal}>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>About us</Text>
                        <Icon name="info-circle" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <Modal visible={isModalVisible} animationType="slide"  presentationStyle="pageSheet">
            <View style={globalStyles.modalContainer}>
                <Text>Hello! This is the About Us Page.</Text>
                <View style={globalStyles.hrLine} />
                
                <Text>
                    The car rental application provides a seamless and efficient solution for individuals seeking convenient and 
                    flexible transportation options. With user-friendly interfaces and advanced features, the app allows users to
                    effortlessly browse through a diverse fleet of vehicles, ranging from compact cars to spacious SUVs. 
                    Offering a hassle-free booking process, users can quickly reserve their desired vehicle, specify pickup 
                    and drop-off locations, and choose rental durations that suit their needs. The application also incorporates 
                    real-time availability updates and transparent pricing, ensuring users have all the information needed to make informed decisions. 
                    Additionally, the app may include features such as GPS navigation, fuel tracking, and digital documentation,
                    enhancing the overall rental experience. Whether for business trips, vacations, or daily commuting,
                    the car rental app simplifies the process of securing reliable and comfortable transportation,
                    contributing to a more convenient and enjoyable travel experience for users
                </Text>
                <Pressable
                    style={globalStyles.button2}
                    onPress={toggleModal}
                >
                    <Text
                        style={{
                        color: "black",
                        fontSize: 20,
                        alignSelf: "center",
                        paddingTop: 3,
                        }}
                    >
                        Close Page
                    </Text>
                </Pressable>
            </View>
        </Modal>
    </SafeAreaView>
  )
}



export default Profile