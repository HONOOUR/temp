import React from 'react';
import { navigationProps } from "../types";
import { View, Text } from "react-native";

const Home: React.FC<navigationProps> = ({ navigation }) => {

  return (
    <View>
      <Text>지은앙 모행</Text>
    </View>
  )
}

export default Home;