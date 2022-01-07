import { Platform } from "react-native";

export const CONFIG = {
    API_URL: Platform.OS === "ios" ? "http://localhost:1337" : "http://10.0.2.2:1337"
}