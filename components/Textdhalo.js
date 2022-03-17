import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
// import { ScrollView } from "react-native-web";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  //   const [number, onChangeNumber] = React.useState(null);

  return (
    // <ScrollView>  </ScrollView>
    <View
      style={{
        // borderWidth:1,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
      // keyboardShouldPersistTaps="always"
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardShouldPersistTaps={true}
        placeholder="Business Name"
        // keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    // width: 300,
    margin: 12,
    // borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    width: "90%",
    backgroundColor: "#F5F7F9",
    fontSize: 18,
  },
});

export default UselessTextInput;
