import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../components/darkMode/themeContext";

export default function Settings() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background }]}>
      <View style={styles.container}>
        <View style={[styles.profile, { backgroundColor: theme.background }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            // style={{ backgroundColor: theme.background }}
          >
            <View
              style={[
                styles.profileAvatarWrapper,
                // { backgroundColor: theme.background },
              ]}
            >
              <Image
                alt=""
                source={{
                  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1a692fe-284f-43f5-aebf-d7200e926f79/d8dl679-e92efb56-c459-4251-9f83-5220e33e5433.png/v1/fit/w_828,h_998/sanji_by_phantomred17_d8dl679-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcL2YxYTY5MmZlLTI4NGYtNDNmNS1hZWJmLWQ3MjAwZTkyNmY3OVwvZDhkbDY3OS1lOTJlZmI1Ni1jNDU5LTQyNTEtOWY4My01MjIwZTMzZTU0MzMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3GysdA2ii3V1ivQzchnG__oxiE3ehlijwJ6qoWVPxrI",
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={[styles.profileName, { color: theme.color }]}>
              Atiku Kantama
            </Text>

            <Text style={styles.profileAddress}>
              21 sapele crescent ladoke Akintola Boulevard
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={[styles.row, { backgroundColor: theme.background }]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Language
              </Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <View style={[styles.row, { backgroundColor: theme.background }]}>
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon color="#fff" name="moon" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Dark Mode
              </Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={(value) => {
                  setMode(value);
                  EventRegister.emit("changeTheme", value);
                }}
                value={mode}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={[styles.row, { backgroundColor: theme.background }]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
                <FeatherIcon color="#fff" name="navigation" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Location
              </Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <View style={[styles.row, { backgroundColor: theme.background }]}>
              <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
                <FeatherIcon color="#fff" name="at-sign" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Email Notifications
              </Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={(emailNotifications) =>
                  setForm({ ...form, emailNotifications })
                }
                value={form.emailNotifications}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={[styles.row, { backgroundColor: theme.background }]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#8e8d91" }]}>
                <FeatherIcon color="#fff" name="flag" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Report Bug
              </Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon color="#fff" name="mail" size={20} />
              </View>

              <Text style={styles.rowLabel}>Contact Us</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={[styles.row, { backgroundColor: theme.background }]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>

              <Text style={[styles.rowLabel, { color: theme.color }]}>
                Rate in App Store
              </Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "gray",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "#414d63",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "#989898",
    textAlign: "center",
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#9e9e9e",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
    color: "#0c0c0c",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
