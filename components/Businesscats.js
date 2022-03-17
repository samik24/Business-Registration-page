import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  //   const [count, setCount] = useState(0);
  //   const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <View style={{padding:10}}>
        <View style={{ padding:10, }}>
          <Text style={{color:"#6B818C", fontWeight:"bold", fontSize:20}}>Business Category</Text>
        </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              // borderWidth: 1,
              justifyContent:"space-evenly",
              width:"50%",
              paddingTop:15

            }}
          >
            <TouchableOpacity style={styles.button}>
              <Text>Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Cafe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Services</Text>
            </TouchableOpacity>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    // flexDirection: "row",
    alignItems: "center",
    padding: 20,
    // marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: "#DBF2FB",
    borderRadius: 20,
    // borderWidth: 1,
    borderColor: "#fff",
  },
  countContainer: {
    alignItems: "center",
    padding: 40,
  },
  btcontainer: {
    flexDirection: "row",
  },
});

export default App;
