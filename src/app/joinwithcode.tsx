import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function JoinFamilyScreen() {
  const [code, setCode] = useState("");
  const router = useRouter();
  const handleCreateFamilyCode = () => {
    router.push("/(tabs)");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/wavesBgImg2.png")}
      style={styles.container}
    >
      <View style={styles.leftContent}>
        <Text style={styles.title}>Family Plan</Text>
        <Text style={styles.description}>
          Type family code to join an existing family
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter family code"
          value={code}
          onChangeText={setCode}
        />
        <TouchableOpacity
          style={styles.joinButton}
          onPress={handleCreateFamilyCode}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftContent: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
  },
  description: {
    fontSize: 21,
    color: "#000",
    marginVertical: 10,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "90%",
    borderColor: "#1778F24F", 
    borderWidth: 2, 
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 30,
    alignSelf: "center", 
  },
  joinButton: {
    marginTop: 40, 
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: "center", 
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
