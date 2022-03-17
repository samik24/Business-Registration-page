import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import Textdhalo from "./components/Textdhalo";
import Businesscats from "./components/Businesscats";
import Paymentmethods from "./components/Paymentmethods";
// import { TouchableOpacity } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 100 }}>
        <Header title="Business Registration" />
      </View>
      <View
        style={{
          flex: 0.5,
          // borderWidth: 1,
          justifyContent: "center",
          // padding: 20,
          paddingLeft: 20,
          paddingTop:10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 30, color: "#04AC9C", fontWeight: "bold",  }}>
            {" "}
            30%{" "}
          </Text>

          <View>
            <Text style={{ color: "#80949D", paddingLeft:10 }}>#21123</Text>
            <Text style={{ fontWeight: "bold", fontSize:20, paddingLeft:7 }}> Business Profile</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          // borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Textdhalo />
      </View>
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Businesscats />
      </View>
      <View></View>
      <View style={{ flex: 0.8 }}>
        <Paymentmethods />
      </View>
      <View style={{ flex: 1.5, alignItems: "center" }}>
        <TouchableOpacity style={styles.next}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
            {" "}
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save}>
          <Text style={{ color: "#3A4348" }}> Save and Continue Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flexDirection: "column",
  },
  next: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#F26F21",
    padding: 20,
    borderRadius: 8,
    margin: 24,
    // position: static
  },
  save: {
    width: "90%",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#F3F5F6",
    padding: 20,
    // height: 22,
    borderRadius: 8,
  },
});
