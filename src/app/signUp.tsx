import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function SignUp() {
    const router = useRouter();

  const handleSignUp = () => {
    router.push("./auth/Login");
  };

  return (
    <LinearGradient
      colors={["#1269D5", "#228B86"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.imageContainer1}>
        <Image source={require("../../assets/images/Group_features.png")} />
      </View>

      <View style={styles.imageContainer2}>
        <Image source={require("../../assets/images/MindWellness.png")} />
        <Text style={styles.text}>One app for all things wellness</Text>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  imageContainer1: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  imageContainer2: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 55,
    gap: 65,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "League Spartan",
    fontWeight: 500,
    fontSize: 32,
    lineHeight: 44.8,
    textAlign: "center",
    width: "78%",
  },
  button: {
    backgroundColor: "#DFE2E6",
    width: 269,
    height: 41,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
