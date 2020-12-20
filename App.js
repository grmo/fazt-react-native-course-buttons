import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert} from "react-native";
import image from "./assets/diamond-red.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello World!! </Text>
      <Image
        source={
          //image
          {uri: "https://picsum.photos/200/200"}
        }
        style={styles.image}
      />
      <Button 
      color="red" 
      title="Press Me" 
      onPress={() => Alert.alert("I Said Hello World!")} 
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
});

export default App;
