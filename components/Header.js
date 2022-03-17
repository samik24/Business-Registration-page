import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <View>
        <Text style={styles.headerTitle}> {props.title}</Text>
      </View>
      <View style={styles.mybiz}>
        {/* <Image
          style={{ height: 45, width: 45 }}
          // source={require("../mybiz.png")}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    height: 100,
    paddingTop: 36,
    paddingLeft: 30,
    backgroundColor: "#F26F21",
    // flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,

    lineHeight: 24,
  },
  mybiz: {
    height: 20,
    alignItems: "flex-end",
    width: 20,
    // alignItems:"flex-end"
  },
});

export default Header;
