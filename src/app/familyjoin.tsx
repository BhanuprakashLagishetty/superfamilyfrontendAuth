import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function FamilyPlanScreen() {
  const router = useRouter();

  const handleJoinFamily = () => {
    router.push("/joinyourfamily");
  };

  const handleCreateFamilyCode = () => {
    router.push("/joinwithcode");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/wavesBgImg2.png")}
      style={styles.container}
    >
      <View style={styles.leftContent}>
        <Text style={styles.title}>Family Plan</Text>
      </View>
      <View style={styles.leftContent}>
        <Text style={styles.description}>
          Join An Existing Family Or Create A New Family Code. Easily Add
          Members To Your Wellness Plan Using The Code Stored In Your My Profile
          Section.
        </Text>
      </View>

      {/* Buttons centered in the screen */}
      <ImageBackground  style={styles.buttonContainer}>
        <TouchableOpacity style={styles.joinButton} onPress={handleJoinFamily}>
          <Text style={styles.buttonText}>Join Your Family</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateFamilyCode}
        >
          <Text style={styles.buttonText}>Create New Family Code</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 0,
  },
  leftContent: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  description: {
    fontSize: 19,
    textAlign: "left", // Align text to the left
    color: "#000",
    fontWeight: "bold",
    padding: 20,
  },
  buttonContainer: {
    alignItems: "center",
    padding: 10,
    flex: 1, // Take up the remaining space after the left content
  },
  joinButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 20,
    width: 300,
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
