import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Home } from "./views/home";
import { Bands } from "./views/bands";

const AppNavigator = createStackNavigator({
  HomeView: Home,
  BandsView: Bands
});

export default createAppContainer(AppNavigator);
