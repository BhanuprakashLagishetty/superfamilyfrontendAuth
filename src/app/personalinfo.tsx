import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

// Import images
const maleImage = require("../../assets/images/male.png");
const femaleImage = require("../../assets/images/female.png");
const nonBinaryImage = require("../../assets/images/non-binary.png");
const preferNotToSayImage = require("../../assets/images/not-to-say.png");

export default function PersonalInfoScreen() {
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [heightWhole, setHeightWhole] = useState("");
  const [heightFraction, setHeightFraction] = useState("");
  const [weightWhole, setWeightWhole] = useState("");
  const [weightFraction, setWeightFraction] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [gender, setGender] = useState(null);
  const router = useRouter();

  const handlePress = () => {
    router.push("/wellnessinfo");
  };

  const onChangeDate = (_, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setBirthday(selectedDate);
  };

  // Gender options mapping
  const genderImages = {
    male: maleImage,
    female: femaleImage,
    "non-binary": nonBinaryImage,
    "prefer not to say": preferNotToSayImage,
  };

  return (
    <ImageBackground
      source={require("../../assets/images/wavesBgImg1.png")}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/step1.png")}
        style={styles.stepImage}
      />

      <View style={styles.leftColumn}>
        <Text style={styles.headerTitle}>Personal Info</Text>

        <Text style={styles.sectionTitle}>When's your birthday?</Text>
        <View style={styles.dateInput}>
          <TextInput
            style={styles.inputText}
            value={birthday.toLocaleDateString()}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Image
              source={require("../../assets/images/calender.png")}
              style={styles.calendarIcon}
            />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={birthday}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Text style={styles.sectionTitle}>Weight</Text>
        <View style={styles.weightHeightInputContainer}>
          <View
            style={[
              styles.weightHeightInputBox,
              focusedInput === "weightWhole" && styles.inputFocus,
            ]}
          >
            <TextInput
              style={styles.manualInput}
              placeholder="00"
              keyboardType="numeric"
              value={weightWhole}
              onFocus={() => setFocusedInput("weightWhole")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setWeightWhole}
            />
          </View>
          <Text style={styles.dot}>.</Text>
          <View
            style={[
              styles.weightHeightInputBox,
              focusedInput === "weightFraction" && styles.inputFocus,
            ]}
          >
            <TextInput
              style={styles.manualInput}
              placeholder="0"
              keyboardType="numeric"
              value={weightFraction}
              onFocus={() => setFocusedInput("weightFraction")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setWeightFraction}
            />
          </View>
          <Text style={styles.unitText}>kg</Text>
        </View>

        <Text style={styles.sectionTitle}>Height</Text>
        <View style={styles.weightHeightInputContainer}>
          <View
            style={[
              styles.weightHeightInputBox,
              focusedInput === "heightWhole" && styles.inputFocus,
            ]}
          >
            <TextInput
              style={styles.manualInput}
              placeholder="00"
              keyboardType="numeric"
              value={heightWhole}
              onFocus={() => setFocusedInput("heightWhole")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setHeightWhole}
            />
          </View>
          <Text style={styles.dot}>.</Text>
          <View
            style={[
              styles.weightHeightInputBox,
              focusedInput === "heightFraction" && styles.inputFocus,
            ]}
          >
            <TextInput
              style={styles.manualInput}
              placeholder="0"
              keyboardType="numeric"
              value={heightFraction}
              onFocus={() => setFocusedInput("heightFraction")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setHeightFraction}
            />
          </View>
          <Text style={styles.unitText}>ft</Text>
        </View>

        <Text style={styles.sectionTitle}>Gender</Text>
        <View style={styles.genderContainer}>
          {["male", "female", "non-binary", "prefer not to say"].map(
            (option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setGender(option)}
                style={
                  gender === option ? styles.genderSelected : styles.genderIcon
                }
                accessibilityLabel={`Select gender as ${option}`}
                accessibilityRole="button"
              >
                <Image
                  source={genderImages[option]}
                  style={styles.genderImage}
                />
                <Text style={styles.genderText}>{option}</Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  dateInput: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputText: { fontSize: 16, color: "#000", flex: 1 },
  calendarIcon: { width: 30, height: 30, resizeMode: "contain" },
  weightHeightInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 55,
  },
  weightHeightInputBox: {
    width: 80,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  inputFocus: { borderColor: "transparent" },
  manualInput: {
    width: 80,
    height: 70,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  dot: { fontSize: 28 },
  unitText: { fontSize: 16, color: "#888", marginLeft: 10 },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30,
  },
  genderIcon: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: 85,
  },
  genderSelected: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4A90E2",
    padding: 10,
    borderRadius: 5,
    width: 85,
  },
  genderImage: { width: 65, height: 65, resizeMode: "contain" },
  genderText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    flexWrap: "wrap",
  },
  nextButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf:"center"
  },
  nextButtonText: { color: "#FFF", fontWeight: "bold" },
});
