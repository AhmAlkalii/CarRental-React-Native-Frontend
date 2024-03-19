import React, { useState,useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  SectionList,
  Pressable,
  Image,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import fetchData from "../Servicefiles/authservice";
import { globalStyles } from "../components/styles/globalStyles";
import { registerStyles } from "../components/styles/globalStyles";

export default function DisplayPage({ navigation }) {
  const [value, setSearchValue] = useState("");
  const [pickupdate, setPickupDate] = useState(new Date());
  const [returndate, setReturnDate] = useState(new Date());
  const [isLiked, setLiked] = useState(false);
  const [carData, setCarData] = useState([]); 

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData(); // Use the imported function

        // Ensure the received data has the correct structure
        setCarData(data);
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      }
    };

    fetchDataFromApi();
  }, []);


  if (error) {
    return <Text>Error fetching data: {error}</Text>;
  }

  if (!carData.length) {
    return <Text>Loading...</Text>;
  }


  console.log(value);

  const onChangepickup = (e, selectedDate) => {
    setPickupDate(selectedDate);
  };

  const onChangereturn = (e, selectedDate) => {
    setReturnDate(selectedDate);
  };

  console.log(pickupdate);
  console.log(returndate);

  const filteredCarData = carData.map((item) => ({
    ...item,
  })).slice(0, 1);
  

  const handlePress = () => {
    setLiked(!isLiked);
  };

  const handleSecondPress = (item) => {
    navigation.navigate("Car Details", { carData: item });
  };

 


  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle={"dark-content"} />

        <View style={globalStyles.header}>
          <Text style={globalStyles.text}>Rentals</Text>
        </View>
        <View style={globalStyles.border}>
          <Icon
            name="search"
            size={22}
            style={{ paddingHorizontal: 7 }}
            color="black"
          />
          <TextInput
            style={globalStyles.searchinput}
            placeholder="Pick-up and Return locations"
            value={value}
            onChangeText={setSearchValue}
          />
        </View>
        <View style={globalStyles.accessoriesContainer}>
          <View style={globalStyles.dateContainer}>
            <View style={globalStyles.dateBorder}>
              <View style={globalStyles.dateIcon}>
                <Icon name="calendar" size={14} color="#2B292D" />
                <Text style={globalStyles.datePickerLabel}>Pick-up Date:</Text>
              </View>
              <View>
                <DateTimePicker
                  style={globalStyles.datePicker}
                  value={pickupdate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChangepickup}
                />
              </View>
            </View>
            <View style={globalStyles.dateTimeContainer}>
              <View style={globalStyles.dateTimeBorder}>
                <View style={globalStyles.dateTimeIcon}>
                  <Icon name="clock-o" size={18} color="#2B292D" />
                  <Text style={globalStyles.datePickerLabel}>Time:</Text>
                </View>
                <View style={globalStyles.timeContainer}>
                  <DateTimePicker
                    style={globalStyles.datePicker}
                    value={pickupdate}
                    mode={"time"}
                    is24Hour={true}
                    onChange={onChangepickup}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={globalStyles.calenderContainer}>
            <View style={globalStyles.calenderBorder}>
              <View style={globalStyles.calenderIcon}>
                <Icon name="calendar" size={14} color="#2B292D" />
                <Text style={globalStyles.datePickerLabel}>Return Date:</Text>
              </View>
              <View>
                <DateTimePicker
                  style={globalStyles.datePicker}
                  value={returndate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChangereturn}
                />
              </View>
            </View>
            <View style={globalStyles.calenderTimeContainer}>
              <View style={globalStyles.calenderTimeBorder}>
                <View style={globalStyles.calenderTimeIcon}>
                  <Icon name="clock-o" size={16} color="#2B292D" />
                  <Text style={globalStyles.datePickerLabel}>Time:</Text>
                </View>
                <View>
                  <DateTimePicker
                    style={globalStyles.datePicker}
                    value={returndate}
                    mode={"time"}
                    is24Hour={true}
                    onChange={onChangereturn}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={registerStyles.searchButtonContainer}>
          <Button
            title="Sign Up"
            color="white"
            onPress={() => navigation.navigate("TabBar")}
          />
        </View>

        {/* <View style={globalStyles.buttonContainer}>
        <Pressable
          style={globalStyles.button}
          onPress={() => navigation.navigate("Landing")}
        >
          <Text
            style={{
              color: "black",
              fontSize: 35,
              alignSelf: "center",
              paddingTop: 3,
            }}
          >
            Search
          </Text>
        </Pressable>
      </View> */}

        <View style={globalStyles.carContainer}>
          <View style={globalStyles.cardIntro}>
            <Text style={globalStyles.text}>Most Popular Cars</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AvailableCars", { isLiked: true })
              }
            >
              <Icon
                name="arrow-right"
                size={20}
                color="black"
                style={{ paddingTop: 6, paddingHorizontal: 18 }}
              />
            </TouchableOpacity>
          </View>
          <SectionList
            sections={[{ data: filteredCarData }]}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSecondPress(item)}>
                <View style={globalStyles.card}>
                  <View style={globalStyles.imageCard}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={globalStyles.image}
                      resizeMode="contain"
                    />

                    <TouchableOpacity onPress={handlePress}>
                      <Icon
                        name={isLiked ? "heart" : "heart"}
                        size={24}
                        color={isLiked ? "red" : "#EAECCC"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={globalStyles.cardCars}>
                    <Text style={globalStyles.cardText}>{item.name}</Text>
                    <Text style={globalStyles.cardText}>
                      <Icon name="star" size={16} color="#FF9800" />
                      {item.stars}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 10,
                }}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}