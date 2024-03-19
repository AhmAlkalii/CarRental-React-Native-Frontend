import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safecontainer: {
    backgroundColor: "#2B292D",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  searchinput: {
    alignSelf: "center",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  border: {
    backgroundColor: "#f5f5f5",
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    margin: 14,
    marginHorizontal: 23,
    flexBasis: 60,
    width: 330,
    flexDirection: "row",
  },
  accessoriesContainer: {
    padding: 22,
  },
  dateContainer: {
    flexDirection: "row",
    // padding: 20,
    // paddingHorizontal: 8,
  },
  dateBorder: {
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 1,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 15,
    marginRight: 15,
    height: 80,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  dateIcon: {
    flexDirection: "row",
  },
  datePicker: {
    width: 100,
    marginTop: 4,
    backgroundColor: "white",
  },
  datePickerLabel: {
    marginHorizontal: 4,
    color: "#2B292D",
  },
  dateTimeContainer: { flexDirection: "row" },
  dateTimeBorder: {
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 1,
    paddingBottom: 20,
    paddingRight: 15,
    paddingTop: 15,
    marginRight: 15,
    height: 80,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeIcon: { flexDirection: "row" },
  calenderTimeContainer: { flexDirection: "row" },
  calenderTimeBorder: {
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 1,
    paddingBottom: 20,
    paddingRight: 15,
    paddingTop: 15,
    marginRight: 15,
    height: 80,
    marginTop: 15,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  calenderTimeIcon: { flexDirection: "row" },
  calenderContainer: {
    flexDirection: "row",
    // padding: 20,
    // paddingHorizontal: 8,
  },
  calenderBorder: {
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 1,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 15,
    marginRight: 15,
    height: 80,
    width: 160,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  calenderIcon: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#90EE90",
    borderRadius: 26,
    borderWidth: 1,
    flexBasis: 60,
    width: 337,
  },
  button2: {
    backgroundColor: "#BED1CF",
    borderRadius: 15,
    borderWidth: 1,
    flexBasis: 36,
    width: 120,
    marginTop:12
  },
  buttonContainer: {
    alignItems: "center",
    margin: 9,
  },
  carContainer: {
    margin: 9,
  },
  cardIntro: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    padding: 19,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    width: 335,
  },
  secondcard: {
    backgroundColor: "#9DBC98",
    padding: 19,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    width: 350,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imageCard: {
    flexDirection: "row",
  },
  cardCars: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "96%",
    height: 120,
    marginBottom: 16,
    marginLeft: -10,
  },
  secondimage: {
    width: "96%",
    height: 170,
    marginBottom: 16,
    marginLeft: -10,
  },
  tabcontainer: {
    backgroundColor: "red",
  },
  landingButton: {
    backgroundColor: "#A2A8A5",
    marginTop: 200,
    marginBottom: 30,
    padding: 10,
    borderRadius: 40,
    width: 324,
    marginLeft: 20,
  },
  safecontainer2: {
    flex: 1,
    backgroundColor: "#E3E1D9",
  },
  firstbackground: {
    flex: 1,
    marginTop: 36,
    backgroundColor: "#9AD0C2",
  },
  profileborder: {
    width: 166,
    height: 166,
    borderRadius: 100,
    backgroundColor: "#A2A8A5",
    alignItems: "center",
    marginLeft: 110,
    top: 20,
  },
  profileborder2: {
    width: 155,
    height: 155,
    borderRadius: 100,
    backgroundColor: "#CCD3CA",
    alignItems: "center",
    marginLeft: 1,
    top: 6,
  },
  hrLine: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  textborder: {
    marginTop: 80,
  },
  modalContainer:{
    flex:1,
    backgroundColor: "#FFF6E9",
    padding:60
  },
  placeholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
  },
  placeholderText: {
    fontSize: 16,
    color: '#555', // Adjust the color to match your design
  },
  
});

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2A8A5",
    padding: 15,
  },

  header: {
    backgroundColor: "#fff",
    paddingTop: 20,
    marginTop: 60,
  },

  text: {
    color: "#2B292D",
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 10,
  },

  text2: {
    marginBottom: 30,
  },

  inputContainer: {
    borderColor: "white",
  },

  inputText: {
    paddingTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 15,
  },

  input: {
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
    // width: 370,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  button: {
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: "#2B292D",
    marginTop: 30,
    padding: 15,
    borderRadius: 40,
  },

  privacyContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },

  checkbox: {
    margin: 10,
  },
  searchButtonContainer: {
    backgroundColor: "#2B292D",
    marginTop: 10,
    padding: 10,
    borderRadius: 40,
    width: 340,
    marginLeft: 20,
  },

  settingContainer: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  profileName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  profileLocation: {
    marginTop: 5,
  },
  profileAvatar: {
    height: 80,
    width: 80,
    borderRadius: 9999,
    marginTop: 10,
  },
  profileAction: {
    backgroundColor: "gray",
    width: 26,
    height: 26,
    justifyContent: "center",
    borderRadius: 9999,
    position: "absolute",
    right: -7,
    bottom: -12,
    alignItems: "center",
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: "600",
    // transform: "uppercase",
    letterSpacing: 1.3,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#D4D1D8",
    paddingHorizontal: 8,
    marginBottom: 8,
    marginTop: 10,
    borderRadius: 10,
  },
  rowLabel: {},
});

export const supportStyles = StyleSheet.create({
  safecontainer2: {
    flex: 1,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1, 
    borderTopColor: 'black',
    backgroundColor:'lightgrey'
  },
  inputField: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor:'#CAA6A6',
    width:260,
    bottom:8
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    bottom:8
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  chatContainer: {
    padding: 16,
  },
  userMessage: {
    backgroundColor: '#4CAF50', 
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-end', 
    marginBottom: 8,
    maxWidth: '70%',
  },
  aiMessage: {
    backgroundColor: '#2196F3', 
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
    maxWidth: '70%', 
  },
  messageText: {
    color: '#fff', 
    fontSize: 16,
  },
  textcont:{
    
  }
});
