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

## References

- [React Native documentation](https://reactnative.dev/docs)