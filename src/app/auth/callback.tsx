import React, { useEffect } from "react";
import { Linking } from "react-native";
import { storeTokens } from "../../../utils/storeTokens";
import { Redirect, useRouter } from "expo-router";
import PersonalInfoScreen from "../personalinfo";
import { useNavigation } from "@react-navigation/native";

const Callback: React.FC = () => {
  const router=useRouter()
  const navigation=useNavigation();
  useEffect(() => {
    const handleDeepLink = async () => {
      try {

        const url = await Linking.getInitialURL();
        if (url) {
          const queryParams = url.split("?")[1];
          const params = new URLSearchParams(queryParams);
          const accessToken = params.get("accessToken");
          const refreshToken = params.get("refreshToken");
          if (accessToken && refreshToken) {
            storeTokens("accessToken", accessToken);
            storeTokens("refreshToken", refreshToken);
            router.push("/personalinfo")

          } else {
            console.log("Access or refresh token missing in URL");
          }
        } else {
          console.log("No URL provided");
        }
      } catch (error) {
        console.error("Error handling deep link:", error);
      }
    };
    handleDeepLink();
    const linkingListener = Linking.addEventListener("url", handleDeepLink);
    return () => {
      linkingListener.remove();
    };
  }, []);

  return <>
  </>;
};

export default Callback;
