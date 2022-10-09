# ReactNative Questions and Answers 
 ### Resources 
 

 ## Table of Contents

- [1 What is a Hybrid App?](#what-is-a-hybrid-app)
- [2 How React Native is different from React?](#how-react-native-is-different-from-react)
- [3 What are the advantages of using React Native](#what-are-the-advantages-of-using-react-native)
- [4 What is native module in react native ?](#what-is-native-module-in-react-native)
- [5 What is the difference between React Native and Expo?](#what-is-the-difference-between-react-native-and-expo)
- [6 What is Expo CLI in React Native?](#what-is-expo-cli-in-react-native)
- [7 What SDK means?](#what-sdk-means)
- [8 What are native components in react native?](#what-are-native-components-in-react-native)
- [9 What are most useful core components in react native](#what-are-most-useful-core-components-in-react-native)
- [10 How to write platform-specific code in react native](#how-to-write-platform-specific-code-in-react-native)
- [11 How can you check the device OS version in React Native?](#how-can-you-check-the-device-os-version-in-react-native)
- [12 What is a Hybrid App?](#what-is-a-hybrid-app)
- [13 What is Gradle and why it is used?](#what-is-gradle-and-why-it-is-used)
- [14 What is the AndroidManifest XML?](#what-is-the-androidmanifest-xml)
- [15 What is Fast Refresh](#what-is-fast-refresh)
- [16 What is library linking in react native](#what-is-library-linking-in-react-native)
- [17 Why Test](#why-test)
- [18 What is Hermes in react native](#what-is-hermes-in-react-native)
- [19 Difference between is React-native from ReactJS ?.md](#difference-between-is-react-native-from-reactjs-md)
- [20 What is Flexbox ?](#what-is-flexbox)
- [21 What are the advantages of using React Native?](#what-are-the-advantages-of-using-react-native)
- [22 How is user Input Handled in React Native?](#how-is-user-input-handled-in-react-native)
- [23 What is cross-platform mobile app development?](#what-is-cross-platform-mobile-app-development)
- [24 What is a bridge in React Native ?](#what-is-a-bridge-in-react-native)
- [25 What is ListView in react-native?](#what-is-listview-in-react-native)
- [26 When to Consider Building a Cross-platform App?](#when-to-consider-building-a-cross-platform-app)
- [27 What is React Native and why it is used?](#what-is-react-native-and-why-it-is-used)
- [28 How react native works internally](#how-react-native-works-internally)
- [29 What is React Native Threading Model ?](#what-is-react-native-threading-model)
- [30 What does React Native use to allow JavaScript to be executed on iOS and Android natively?](#what-does-react-native-use-to-allow-javascript-to-be-executed-on-ios-and-android-natively)
- [31 Does React Native use a WebView?](#does-react-native-use-a-webview)
<br/><br/><br/><br/>

1. ### What is a Hybrid App?

Hybrid app is a combination of both native and web apps. Where need to embed the code written in JavaScript into the native app, and the web app is used to display the content.

2. ### How React Native is different from React?

React is an open-source JS library for building the UIs for web applications; besides, React Native is used to building rich mobile UI from declarative components using only JavaScript.

3. ### What are the advantages of using React Native

- Large community
- Reuseable components
- Live reload
- Additional libraries

4. ### What is native module in react native ?

Native Module is a way to communicate between React Native and native code. It is a bridge between React Native and Platform native code. Native modules are used to access platform capabilities, such as accessing the phone camera, accessing the phone storage, accessing the user’s location, etc.

5. ### What is the difference between React Native and Expo?

6. ### What is Expo CLI in React Native?

Expo CLI is a command line interface for developing Expo apps. It is a tool for creating, building, and publishing react-native apps. It provides a development server that allows us to easily run our app on our device. It also provides a way to publish our app to the Expo app store.

7. ### What SDK means?

SDK stands for Software Development Kit. It is a set of tools and libraries that allow you to build applications for a specific platform. For example, Android SDK allows you to build Android apps, iOS SDK allows you to build iOS apps.

8. ### What are native components in react native?

At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components.

9. ### What are most useful core components in react native

The core components are the building blocks of a React Native app. Here is a list of some of the most commonly used core components:

- [View](https://reactnative.dev/docs/view)
- [Text](https://reactnative.dev/docs/text)
- [Image](https://reactnative.dev/docs/image)
- [ScrollView](https://reactnative.dev/docs/scrollview)
- [TextInput](https://reactnative.dev/docs/textinput)
- [StyleSheet](https://reactnative.dev/docs/stylesheet)
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
- [FlatList](https://reactnative.dev/docs/flatlist)
- [SectionList](https://reactnative.dev/docs/sectionlist)

10. ### How to write platform-specific code in react native

In React-Native there are two ways to write platform-specific code:

- Using Platform module
- Using Platform-specific extensions

**Using Platform module**

For Android

```js
import { Platform } from 'react-native'

if (Platform.OS === 'android') {
	// do something
}
```

For iOS

```js
import { Platform } from 'react-native'

if (Platform.OS === 'ios') {
	// do something
}
```

**Using Platform-specific extensions**

For Android

```js
button.android.js
button.ios.js
```

```js
import button from './button'
```

11. ### How can you check the device OS version in React Native?

For Android

```js
import { Platform } from 'react-native'

if (Platform.Version === 28) {
	// do something
}
```

For iOS

```js
import { Platform } from 'react-native'
if (Platform.Version === '14.0') {
	// do something
}
```

12. ### What is a Hybrid App?

Hybrid apps are essentially web apps that have been put in a native app shell. Once they are downloaded from an app store and installed locally, the shell is able to connect to whatever capabilities the mobile platform provides through a browser that's embedded in the app.

13. ### What is Gradle and why it is used?

Gradle is a build automation tool that is used to build and manage any Java-based project. It is used to build Android applications. It is open-source.

In Android, Gradle is used to build the project and manage the dependencies. It is used to compile the code, run unit tests, and generate the final APK file. It is also used to manage the dependencies of the project.

14. ### What is the AndroidManifest XML?

AndroidManifest.xml is an XML file that contains information about the application. It is used to declare the components of the application, permissions, and other information about the application.

15. ### What is Fast Refresh

Fast Refresh is a new feature in React Native that allows us to get direct feedback for changes in our React components. It is enabled by default in the React Native CLI.

It works for example if we change the text in the App.js file from "Hello World" to "Hello World!". it will update this component without reloading the entire application. An alterant if we have a util file and we change the file those changes will be re-render in the other files that are using that util file.

16. ### What is library linking in react native

When a library has native module implementations. Then we have to link the library to the platform-specific native code. This is called library linking.  Linking can be done automatically or manually.

17. ### Why Test

Testing is an important part of software development. It is a way to ensure that the code is working as expected. It is also a way to ensure that the code is not broken when new features are added or when existing features are modified.

18. ### What is Hermes in react native

Hermes is a JavaScript engine optimized for running React Native apps on Android. It improves app performance and decreases app size. Hermes is enabled by default in the latest version of React Native.
19. ### Difference between is React-native from ReactJS ?.md

Difference between ReactJS and React-native in Tabular form

| ReactJS                                                       | React-native                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ReactJS is a JavaScript library for building user interfaces. | React Native is a JavaScript framework for building native apps for Android and iOS. |
| It is used for development of web applications.               | It is used for developement of mobile applications.                                  |
| It uses React-Router for routing.                             | It uses React-Navigation for routing.                                                |
| It uses HTML tag for UI.                                      | It uses View tag for UI.                                                             |
| In this the virtual DOM renders the browser code.             | In this the native uses it's API to render code for mobile applications.             |
20. ### What is Flexbox ?


It is a layout model that allows elements to be laid out in a flexible manner. It is a one-dimensional layout model, meaning that it can only handle elements that are laid out either horizontally or vertically. It is a very powerful layout model that can be used to create complex layouts.
21. ### What are the advantages of using React Native?

- Large community: React Native has a large community of developers who are constantly working on improving the framework. This means that we can get help from the community if we run into any issues while developing our app.
- Reusable code: React Native allows us to reuse our code across different platforms. This means that we can write our code once and use it on both Android and iOS.
- Additional Third-Party Libraries: React Native has a large number of third-party libraries that we can use to add additional functionality to our app. This means that we don't have to write all the code from scratch.

22. ### How is user Input Handled in React Native?

TextInput is a core component of React Native that allows the user to enter text. It has an API that is very similar to that of the HTML input element, with support for auto-correction, auto-capitalization, placeholder text, and more.

```jsx
import React, { useState } from 'react'

import { TextInput, View, StyleSheet } from 'react-native'

const App = () => {
	const [value, onChangeText] = useState('Useless Placeholder')

	return (
		<View>
			<TextInput onChangeText={(text) => onChangeText(text)} value={value} />
		</View>
	)
}
```

23. ### What is cross-platform mobile app development?

Cross platform framework operate to develop shareable and reusable code across multiple platforms. "Write once, run everywhere" is the motto of cross platform framework.
Writing once and reuse the same on multiple platforms helps in minimizing the development time and cost and also ensure hassle-free implementation.
**Note:** Cross-platform applications are popular in today’s times, all credits to React Native, Xamarin, and Flutter frameworks.

24. ### What is a bridge in React Native ?

React Native uses a bridge to communicate between the JavaScript code and the native code. The bridge is a native module that is responsible for sending messages between the JavaScript code and the native code. It is a very important part of React Native because it allows us to communicate between the JavaScript code and the native code.

25. ### What is ListView in react-native?

React Native ListView is a view that renders a list of items. It is a core component of React Native and is used to render a list of data. It is similar to the HTML list element.

```jsx
import React, { useState } from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'

const App = () => {
	const [data, setData] = useState([
		{ id: 1, name: 'John Doe' },
		{ id: 2, name: 'Brad Traversy' },
		{ id: 3, name: 'Steve Smith' },
		{ id: 4, name: 'Janet Williams' },
		{ id: 5, name: 'David Doe' },
		{ id: 6, name: 'John Doe' },
		{ id: 7, name: 'Brad Traversy' },
		{ id: 8, name: 'Steve Smith' },
		{ id: 9, name: 'Janet Williams' },
		{ id: 10, name: 'David Doe' },
		{ id: 11, name: 'John Doe' },
		{ id: 12, name: 'Brad Traversy' },
		{ id: 13, name: 'Steve Smith' },
		{ id: 14, name: 'Janet Williams' },
		{ id: 15, name: 'David Doe' },
	])

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
			/>
		</View>
	)
}
```

26. ### When to Consider Building a Cross-platform App?

- We have to release a mobile app for both Android and iOS in limited time ,resources and budget.
- Need to target both Android and iOS platforms.
- Need faster development.
- The app isn’t complex and doesn’t need functionalities which vary much between the platforms.

27. ### What is React Native and why it is used?

React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

28. ### How react native works internally

React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component’s hierarchy to the mobile devices view.

For instance, if the user presses a button, this case is translated into an event that JavaScript can handle. After that, by relaying messages between native platforms and JS code, the React Native bridges translates native events into something that React components can understand and work with.

29. ### What is React Native Threading Model ?

There are 3 main threads in React Native:

1. Main thread
2. JS Thread
3. Native Modules Thread

**Main thread**
The Main thread listens to the UI events like 'press', 'touch', etc. These events are then passed to the JS thread via the RN Bridge. Once the Javascript loads, the JS thread sends the information on what needs to be rendered onto the screen.

**JS Thread**
The Javascript Queue is the thread queue where the main bundled JS thread runs. The JS thread runs all the business logic, i.e., the code we write in React Native.

**Native Modules Thread**
If an app needs access to platform API, this is where the magic happens.

30. ### What does React Native use to allow JavaScript to be executed on iOS and Android natively?

On iOS simulators and devices, Android emulators and devices React Native uses JavaScriptCore which is the JavaScript engine that powers Safari. Our bundle contains the JS code. And it runs on the JavaScriptCore engine. And communicates with the native code through a bridge.

31. ### Does React Native use a WebView?

React Native uses a JavaScript runtime, but the UI is not HTML and it doesn't use a WebView. We use JSX and React Native-specific components to define the UI. It provides a native-level performance and looks and feels but some UI parts have to be configured separately for iOS and Android.

