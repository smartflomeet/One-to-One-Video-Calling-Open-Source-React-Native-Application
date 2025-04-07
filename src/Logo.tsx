import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// Import the logo image
import logoImg from "./image_asset/logofront.png";

// Define the Logo component
export default class Logo extends Component {
  // Create a ref for the container
  containerRef = React.createRef();

  // Method to focus on the component
  focusOnComponent() {
    // Accessing the container through the ref
    if (this.containerRef.current) {
      this.containerRef.current.focus();
    }
  }

  // Render method
  render() {
    return (
      <View ref={this.containerRef} style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Welcome!</Text>
      </View>
    );
  }
}

// Styles for the Logo component
const styles = StyleSheet.create({
  container: {
    alignSelf: "center"
  },
  image: {
    height: 50,
    width: 230,
    marginTop: 100
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontSize: 28,
    marginTop: 75
  }
});
