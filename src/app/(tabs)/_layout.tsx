import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CoachScreen from "./coachScreen";
import ProfileScreen from "./profile";
import NutritionScreen from "./fooddata";
import LoginScreen from "../auth/Login";
import HealthCheckTab from "./healthcheck";
import CommunityScreen from "./communityScreen";
import { Image, Linking, StyleSheet, View } from "react-native";
import superPage from "./superPage";
import MorePage from "./morePage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OverView from "./overview";
import activity from "./activity";
import biomarkers from "./biomarkers";
import nutrition from "./nutrition";
import SignUp from "../signUp";

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function TabsLayout() {
  interface LoginScreenProps {
    onLogin: () => void;
  }
  const [authPage,setAuthPage]=useState<String>();
  useEffect(() => {
    
    const handleDeepLink = (event: any) => {
      const { url } = event;
      console.log(url,"url")

      if (url) {
        const parsedUrl = new URL(url);
        console.log(parsedUrl,"parsedIUrl")
        const accessToken = parsedUrl.searchParams.get("accessToken");
        if (accessToken) {
          console.log("Access Token:", accessToken);
        }
      }
    };
    const subscription = Linking.addEventListener("url", handleDeepLink);
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);
  const [showLoginScreen, setShowLoginScreen] = useState(true);

  const handleLogin = () => {
    // Simulate login success or navigation from Login screen
    setShowLoginScreen(false);
  };

  // Show the LoginScreen initially
  if (showLoginScreen) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#888",
      }}
      detachInactiveScreens={false}
    >

      <Tab.Screen
        name="Wellness"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="head-side-virus" size={26} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CoachScreen"
        component={CoachScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="chalkboard-user" size={26} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SuperScreen"
        component={TopTabs}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View style={styles.iconStyles}>
              <View style={styles.superImage}>
                <Image source={require("../../../assets/images/super.png")} />
              </View>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="people-group" size={26} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="more"
        component={MorePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="more-horizontal" size={26} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function TopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
          textTransform: "none",
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#1778F2",
          height: 4,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        },
        tabBarIndicatorContainerStyle: {
          justifyContent: "center",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          elevation: 3,
          shadowOpacity: 0.1,
        },
        tabBarActiveTintColor: "#1778F2",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <TopTab.Screen name="OverView" component={OverView} />
      <TopTab.Screen name="Activity" component={activity} />
      <TopTab.Screen name="Nutrition" component={biomarkers} />
      <TopTab.Screen name="Biomarkers" component={nutrition} />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    height: 90,
    padding: 30,
    justifyContent: "center",
    position: "relative",
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    paddingBottom: 20,
  },
  superImage: {
    width: 62,
    height: 62,
    backgroundColor: "#E2EDE2",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(245,247,250,1.00)",
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 200,
    position: "relative",
    top: -30,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  iconStyles: {
    width: 90,
    height: 57,
    backgroundColor: "rgb(239, 241, 241)",
    display: "flex",
    alignItems: "center",
    borderBottomRightRadius: "60px",
    borderBottomLeftRadius: "60px",
    // paddingTop: "10px",
  },
});
