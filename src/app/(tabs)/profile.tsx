import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  faUser,
  faLock,
  faCheck,
  faCartShopping,
  faArrowRightFromBracket,
  faCircleQuestion,
  faPlus,
  faHandDots,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(
    require("../../../assets/images/image1.jpeg")
  );

  const router = useRouter();

  const handleNavigation = (path:any) => {
    router.push(path);
  };

  const openImagePicker = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    };

    try {
      const result = await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImage = { uri: result.assets[0].uri };
        setProfileImage(selectedImage);
      } else {
        console.log("User cancelled image picker");
      }
    } catch (error) {
      console.log(`ImagePicker Error: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.pencilIcon}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome name="pencil" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.nameText}>Rounak Tikde</Text>
          <View style={styles.subTextContainer}>
            <View style={styles.subTextColumn}>
              <Text style={styles.subText}>Male</Text>
              <Text style={styles.subTextLabel}>Gender</Text>
            </View>
            <View style={styles.subTextColumn}>
              <Text style={styles.subText}>32</Text>
              <Text style={styles.subTextLabel}>Age</Text>
            </View>
            <View style={styles.subTextColumn}>
              <Text style={styles.subText}>11/0/92</Text>
              <Text style={styles.subTextLabel}>D.O.B</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/profiledetails")}
        >
          <FontAwesomeIcon
            icon={faUser}
            size={24}
            style={[styles.iconStyle, { backgroundColor: "#FFE37A" }]}
          />
          <Text style={styles.buttonText}>My Profile</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/goals")}
        >
          <FontAwesomeIcon
            icon={faLock}
            size={24}
            style={[styles.iconStyle, { backgroundColor: "#9BE7DB" }]}
          />
          <Text style={styles.buttonText}>Privacy</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/orders")}
        >
          <FontAwesomeIcon
            icon={faCheck}
            size={24}
            style={[styles.iconStyle, { backgroundColor: "#FFE37A" }]}
          />
          <Text style={styles.buttonText}>My Goals</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/support")}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#9BE7DB" }]}
          />
          <Text style={styles.buttonText}>My Orders</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/support")}
        >
          <FontAwesomeIcon
            icon={faCircleQuestion}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#FFE37A" }]}
          />
          <Text style={styles.buttonText}>Support & Feedback</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/logout")}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#9BE7DB" }]}
          />
          <Text style={styles.buttonText}>Log Out</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Clinical Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Clinical Profile</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/history")}
        >
          <FontAwesomeIcon
            icon={faPlus}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#9BE7DB" }]}
          />
          <Text style={styles.buttonText}>Health Profile</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/allergies")}
        >
          <FontAwesomeIcon
            icon={faHandDots}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#FFE37A" }]}
          />
          <Text style={styles.buttonText}>Allergies</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation("/(tabs)/documents")}
        >
          <FontAwesomeIcon
            icon={faFileArrowDown}
            size={20}
            style={[styles.iconStyle, { backgroundColor: "#9BE7DB" }]}
          />
          <Text style={styles.buttonText}>Lab Tests</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Members Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Members</Text>
        <View style={styles.membersList}>
          <View style={styles.memberCard}>
            <Image
              source={require("../../../assets/images/image1.jpeg")}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Seema</Text>
          </View>
          <View style={styles.memberCard}>
            <Image
              source={require("../../../assets/images/image1.jpeg")}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Aniket</Text>
          </View>
          <View style={styles.memberCard}>
            <Image
              source={require("../../../assets/images/image1.jpeg")}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Riya</Text>
          </View>
          <TouchableOpacity style={styles.addMemberButton}>
            <FontAwesomeIcon icon={faPlus} size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Family code container */}
        <View style={styles.familyCodeContainer}>
          <Text style={styles.familyCodeText}>Your unique family code:</Text>
          <Text style={styles.familyCode}>#4Y67T</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Image Picker */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Change Profile Picture</Text>
            <Button
              title="Choose from Gallery"
              onPress={() => {
                openImagePicker();
                setModalVisible(false);
              }}
              color="#007BFF" 
              // style={styles.buttons}
            />
            <Button
              title="Cancel"
              color="red"
              onPress={() => setModalVisible(false)}
              // style={styles.cancelButton}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    overflow: "scroll",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    position: "relative",
  },
  buttons:{
    borderRadius:8
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  pencilIcon: {
    position: "absolute",
    top: -10,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  subTextColumn: {
    alignItems: "center",
  },
  subText: {
    fontSize: 16,
    color: "#333",
  },
  subTextLabel: {
    fontSize: 12,
    color: "#666",
  },
  section: {
    marginVertical: 8,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding:5
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // button: {
  //   width: '100%',
  //   padding: 10,
  //   backgroundColor: '#007BFF', // Blue color for "Choose from Gallery"
  //   marginBottom: 10,
  //   borderRadius: 5,
  // },
  cancelButton: {
    width: '100%',
    padding: 10,
    backgroundColor: 'red', 
    marginBottom: 10,
    borderRadius: 5,
  },
  iconStyle: {
    padding: 3,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
  },
  membersList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  memberCard: {
    alignItems: "center",
    margin: 10,
  },
  memberImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
    backgroundColor: "#e0e0e0",
  },
  memberName: {
    fontSize: 14,
    color: "#333",
  },
  addMemberButton: {
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  familyCodeContainer: {
    backgroundColor: "#E8F2FE",
    alignItems: "center",
    marginTop: 20,
    padding: 25,
  },
  familyCodeText: {
    fontSize: 16,
    color: "#333",
    padding: 2,
  },
  familyCode: {
    fontWeight: "bold",
    color: "#000",
  },
  shareButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#1778F2",
    borderRadius: 5,
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
