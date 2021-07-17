# Core components

## Views

- A **view** is the basic building block of a UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input.

## Native Components

- At runtime, React Native creates the corresponding Android and iOS views for those components.
- Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. These platform-backed components are called **Native Components**.
- React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

## Handling Text Input

- **TextInput** is a Core Component that allows the user to enter text. It has an **onChangeText** prop that takes a function to be called every time the text changed, and an **onSubmitEditing** prop that takes a function to be called when the text is submitted.

## Using a ScrollView

- The **ScrollView** is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally.
- ScrollViews can be configured to allow paging through views using swiping gestures by using the **pagingEnabled** props. Swiping horizontally between views can also be implemented on Android using **ViewPager** component.
- On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the **maximumZoomScale** and **minimumZoomScale** props and your user will be able to use pinch and expand gestures to zoom in and out.

## Using a List Views

- The `FlatList` component displays a scrolling list of changing, but similarly structured, data. `FlatList` works well for long lists of data, where the number of items might change over time. Unlike the more generic `ScrollView`, the `FlatList` only renders elements that are currently showing on the screen, not all the elements at once.
- The `FlatList` component requires two props: `data` and `renderItem`. `data` is the source of information for the list. `renderItem` takes one item from the source and returns a formatted component to render.

## TouchableOpacity

- A wrapper for making views respond properly to touches.

```tsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default App;
```

## References

- [React Native documentation](https://reactnative.dev/docs)
