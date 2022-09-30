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
- [17 What is cross-platform mobile app development?](#what-is-cross-platform-mobile-app-development)
- [18 When to Consider Building a Cross-platform App?](#when-to-consider-building-a-cross-platform-app)
- [19 What is React Native and why it is used?](#what-is-react-native-and-why-it-is-used)
- [20 How react native works internally](#how-react-native-works-internally)
- [21 What is React Native Threading Model ?](#what-is-react-native-threading-model)
- [22 What does React Native use to allow JavaScript to be executed on iOS and Android natively?](#what-does-react-native-use-to-allow-javascript-to-be-executed-on-ios-and-android-natively)
- [23 Does React Native use a WebView?](#does-react-native-use-a-webview)
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

17. ### What is cross-platform mobile app development?

Cross platform framework operate to develop shareable and reusable code across multiple platforms. "Write once, run everywhere" is the motto of cross platform framework.
Writing once and reuse the same on multiple platforms helps in minimizing the development time and cost and also ensure hassle-free implementation.
**Note:** Cross-platform applications are popular in today’s times, all credits to React Native, Xamarin, and Flutter frameworks.

18. ### When to Consider Building a Cross-platform App?

- We have to release a mobile app for both Android and iOS in limited time ,resources and budget.
- Need to target both Android and iOS platforms.
- Need faster development.
- The app isn’t complex and doesn’t need functionalities which vary much between the platforms.

19. ### What is React Native and why it is used?

React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

20. ### How react native works internally

React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component’s hierarchy to the mobile devices view.

For instance, if the user presses a button, this case is translated into an event that JavaScript can handle. After that, by relaying messages between native platforms and JS code, the React Native bridges translates native events into something that React components can understand and work with.

21. ### What is React Native Threading Model ?

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

22. ### What does React Native use to allow JavaScript to be executed on iOS and Android natively?

On iOS simulators and devices, Android emulators and devices React Native uses JavaScriptCore which is the JavaScript engine that powers Safari. Our bundle contains the JS code. And it runs on the JavaScriptCore engine. And communicates with the native code through a bridge.

23. ### Does React Native use a WebView?

React Native uses a JavaScript runtime, but the UI is not HTML and it doesn't use a WebView. We use JSX and React Native-specific components to define the UI. It provides a native-level performance and looks and feels but some UI parts have to be configured separately for iOS and Android.

