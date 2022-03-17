import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={{  }}>
        <Text
          style={{
            fontFamily: "Cochin",
            fontSize: 18,
            fontWeight: "bold",
            color: "#6B818C",
            paddingLeft:10,
            paddingBottom:5
          }}
        >
          Payment Methods
        </Text>
        <View style={{paddingLeft:10,paddingTop:5}}>
          <Text style={{ color: "#80949D" }}> Choose at least one option</Text>
        </View>
      </View>
      <View
        style={{
          flex:2,
          alignContent: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent:"center",
          // borderWidth: 1,
          alignItems: "center",
          padding:10
        }}
      >
        <View></View>
        <TouchableOpacity style={styles.Cash}>
          <Text style={{ fontSize: 16 }}>Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BankTransfer}>
          <Text style={{fontSize:16}}>Bank Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  Cash: {
    alignItems: "center",
    padding: 10,
    width: "45%",
    height: 42,
    justifyContent: "center",
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor:"black",why not working
    backgroundColor: "#DBF2FB",
  },
  BankTransfer: {
    borderColor: "black",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft:0,
    width: "45%",
    height: 42,
    padding: 10,
    // borderWidth: 1,
    marginLeft:18,
    backgroundColor: "#F3F5F6",
  },
});

export default App;
