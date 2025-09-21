"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default ThemeButton;
