import { Stack } from "expo-router";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
  ThemeProvider,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import useTheme from "../hooks/useTheme";

import { Colors } from "../constants/Colors";

// Custom Themes
const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

// Navigation Themes
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

// Combined Themes
const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export default function RootLayout() {
  const { colorScheme } = useTheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
      <Stack>
      {/* Set login as the first screen */}
      <Stack.Screen name="auth/Otp" options={{ headerShown: false }} /> 
            <Stack.Screen name="auth/Login" options={{ headerShown: false }} /> 

      <Stack.Screen name="Otp" options={{ headerShown: false }} /> 
      <Stack.Screen name="personalinfo" options={{ headerShown: false }} /> 
      <Stack.Screen name="wellnessinfo" options={{ headerShown: false }} /> 
      <Stack.Screen name="labreports" options={{ headerShown: false }} /> 
      <Stack.Screen name="familyplan" options={{ headerShown: false }} /> 
      <Stack.Screen name="familyjoin" options={{ headerShown: false }} /> 
      <Stack.Screen name="joinyourfamily" options={{ headerShown: false }} /> 
      <Stack.Screen name="joinwithcode" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      <Stack.Screen name="404" options={{ title: 'Page Not Found' }} /> 
    </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
