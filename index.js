/**
 * @format
 */

import { AppRegistry } from "react-native";
import Routes from "./src/routes/";
import App from "./src/App";
import "react-native-gesture-handler";
import { name as appName } from "./app.json";

AppRegistry.registerComponent("main", () => App);
