import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation"; 
import { storeTokens } from "@/utils/storeTokens";
const wellBeing = require("../../../assets/images/SuperFamily.png");
const superFamily = require("../../../assets/images/MentalWellBeing.png");
const apple = require("../../../assets/images/apple.png");
const facebook = require("../../../assets/images/facebook.png");
const google = require("../../../assets/images/Google.png");
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;
interface LoginScreenProps {
  onLogin: () => void;
}


const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [loading,setLoading]=useState<boolean>(false)
  const handleOTP = (email: string) => {
    onLogin(); 
    storeTokens("email",email)
    router.push({
      pathname: "/auth/Otp",
      params: { email },
    });
  };
  const generateOtp = async () => {
    setLoading(true);
    
    try {
      const result = await axios.post("http://10.0.2.2:5000/api/auth/login", {
        email: input,
      });
      console.log("Login successful:", result);
      setLoading(false);
      handleOTP(input);
    } catch (error: any) {
      setLoading(false);
      alert("Please enter a valid phone number or email");
      console.error("Error during OTP generation:", error.message);
    }
  };
  const handleOpenGoogleAuth = () => {
    Linking.openURL("https://da35-183-82-107-109.ngrok-free.app/api/auth/google")
      .then(() => console.log("Google Auth URL opened"))
      .catch((err) => console.error("An error occurred", err));

  };
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image source={wellBeing} style={styles.wellBeingImg} />
      </View>
      <Image source={superFamily} style={styles.superFamilyImage} />
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>LOGIN WITH</Text>
      </View>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabelText}>Phone Number or Email ID</Text>
      </View>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter your phone or email"
        placeholderTextColor="#A9A9A9"
      />
      {/* todo: need to add loading */}
      <TouchableOpacity style={[styles.otpButton,{backgroundColor: loading ? "#A1C88E":"#228B22"}]} 
      disabled={loading}
      onPress={generateOtp}
      >
        <Text style={[styles.otpButtonText]}>
          Verify with OTP
        </Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>Sign In With</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleOpenGoogleAuth}>
          <Image source={google} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={apple} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  wellBeingImg: {
    width: 250,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  superFamilyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  dividerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  dividerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C7EF5",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
    color: "#000",
  },
  inputLabelContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  inputLabelText: {
    fontSize: 16,
    color: "#A9A9A9",
  },
  otpButton: {
    width: "90%",
    backgroundColor: "#228B22",
    paddingVertical: 19,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",          
    shadowOffset: { width: 0, height: 4 },  
    shadowOpacity: 0.05,          
    shadowRadius: 4, 
    elevation: 4, 
  },
  otpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
  },
  signInText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconButton: {
    marginHorizontal: 10,
  },
});
export default LoginScreen;
 