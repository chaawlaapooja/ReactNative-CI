import React, { Component } from "react";
import { SafeAreaView, Platform, StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Provider from "./src/components/Provider";
import CardList from "./src/components/CardList";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Header title="ReactNativeCI" />
        <Provider>
          <CardList />
        </Provider>
      </SafeAreaView>
    );
  }
}
