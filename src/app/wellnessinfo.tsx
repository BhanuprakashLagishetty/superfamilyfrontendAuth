import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function WellnessInfoScreen() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  const handleOptionPress = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handlePressNext = () => {
    router.push("/labreports");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/wavesBgImg1.png")}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/Step 2.png")}
        style={styles.stepImage}
      />
      <View style={styles.leftColumn}>
        <Text style={styles.headerTitle}>Wellness Info</Text>
        <Text style={styles.questionTitle}>Choose Your Personal Goal</Text>
        <ScrollView contentContainerStyle={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Muscle Building") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("Muscle Building")}
            >
              <Text style={styles.optionText}>Muscle Building</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Mental Wellness") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("Mental Wellness")}
            >
              <Text style={styles.optionText}>Mental Wellness</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Weight Loss") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("Weight Loss")}
            >
              <Text style={styles.optionText}>Weight Loss</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Sleep Improvement") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("Sleep Improvement")}
            >
              <Text style={styles.optionText}>Sleep Improvement</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("General Fitness") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("General Fitness")}
            >
              <Text style={styles.optionText}>General Fitness</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Weight Gain") &&
                  styles.optionSelected,
              ]}
              onPress={() => handleOptionPress("Weight Gain")}
            >
              <Text style={styles.optionText}>Weight Gain</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionBox,
                selectedOptions.includes("Healthy Eating") &&
                  styles.optionSelected,
                styles.smallBox,
              ]}
              onPress={() => handleOptionPress("Healthy Eating")}
            >
              <Text style={styles.optionText}>Healthy Eating</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handlePressNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  leftColumn: {
    flex: 1,
    paddingHorizontal: 20,
    marginRight: 90,
    justifyContent: "flex-start",
  },
  stepImage: {
    position: "absolute",
    right: -400,
    top: "25%",
    width: 550,
    height: 550,
    resizeMode: "contain",
    overflow: "hidden",
  },
  headerTitle: {
    paddingTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
    marginBottom: 60,
  },
  questionTitle: {
    fontSize: 20,
    color: "#000",
    marginBottom: 20,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionBox: {
    flex: 1,
    margin: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#4A90E2",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  smallBox: {
    flex: 0.48,
  },
  optionSelected: {
    backgroundColor: "#4A90E2",
  },
  optionText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "bold",
  },
  nextButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
  },

  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
