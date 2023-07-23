import { Button, StyleSheet, View } from "react-native";
import React from "react";
import routes from "../common/routes";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Button
        title="Users"
        onPress={() => {
          navigate(routes.users);
        }}
      ></Button>
      <Button
        title="Phone Book"
        onPress={() => {
          navigate(routes.phoneBook);
        }}
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
