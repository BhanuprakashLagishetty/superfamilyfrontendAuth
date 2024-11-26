import { useState, useEffect } from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";

interface useThemeReturn {
  toggleTheme: () => void;
  colorScheme: Object;
}

export default function useTheme(): useThemeReturn {
  const router = useRouter();
  const { colorScheme: globalColorScheme } = useGlobalSearchParams();
  const [localColorScheme, setLocalColorScheme] = useState(
    globalColorScheme || "dark"
  );

  useEffect(() => {
    if (globalColorScheme !== localColorScheme) {
      setLocalColorScheme(globalColorScheme);
    }
  }, [globalColorScheme]);

  const toggleTheme = () => {
    const newScheme = localColorScheme === "light" ? "dark" : "light";
    setLocalColorScheme(newScheme);
    router.setParams({ colorScheme: newScheme });
  };

  return { toggleTheme, colorScheme: localColorScheme };
}
