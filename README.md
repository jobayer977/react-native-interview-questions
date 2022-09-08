# ReactNative Questions and Answers 
 ### Resources 
 

 ## Table of Contents

- [1 What is a Hybrid App?](#what-is-a-hybrid-app)
- [2 How React Native is different from React?](#how-react-native-is-different-from-react)
- [3 What are the advantages of using React Native](#what-are-the-advantages-of-using-react-native)
- [4 What is native module in react native ?](#what-is-native-module-in-react-native)
- [5 What is a Hybrid App?](#what-is-a-hybrid-app)
- [6 What is cross-platform mobile app development?](#what-is-cross-platform-mobile-app-development)
- [7 When to Consider Building a Cross-platform App?](#when-to-consider-building-a-cross-platform-app)
- [8 What is React Native and why it is used?](#what-is-react-native-and-why-it-is-used)
- [9 How react native works internally](#how-react-native-works-internally)
- [10 What is React Native Threading Model ?](#what-is-react-native-threading-model)
- [11 What does React Native use to allow JavaScript to be executed on iOS and Android natively?](#what-does-react-native-use-to-allow-javascript-to-be-executed-on-ios-and-android-natively)
- [12 Does React Native use a WebView?](#does-react-native-use-a-webview)
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

5. ### What is a Hybrid App?

Hybrid apps are essentially web apps that have been put in a native app shell. Once they are downloaded from an app store and installed locally, the shell is able to connect to whatever capabilities the mobile platform provides through a browser that's embedded in the app.

6. ### What is cross-platform mobile app development?

Cross platform framework operate to develop shareable and reusable code across multiple platforms. "Write once, run everywhere" is the motto of cross platform framework.
Writing once and reuse the same on multiple platforms helps in minimizing the development time and cost and also ensure hassle-free implementation.
**Note:** Cross-platform applications are popular in today’s times, all credits to React Native, Xamarin, and Flutter frameworks.

7. ### When to Consider Building a Cross-platform App?

- We have to release a mobile app for both Android and iOS in limited time ,resources and budget.
- Need to target both Android and iOS platforms.
- Need faster development.
- The app isn’t complex and doesn’t need functionalities which vary much between the platforms.

8. ### What is React Native and why it is used?

React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

9. ### How react native works internally

React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component’s hierarchy to the mobile devices view.

For instance, if the user presses a button, this case is translated into an event that JavaScript can handle. After that, by relaying messages between native platforms and JS code, the React Native bridges translates native events into something that React components can understand and work with.

10. ### What is React Native Threading Model ?

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

11. ### What does React Native use to allow JavaScript to be executed on iOS and Android natively?

On iOS simulators and devices, Android emulators and devices React Native uses JavaScriptCore which is the JavaScript engine that powers Safari. Our bundle contains the JS code. And it runs on the JavaScriptCore engine. And communicates with the native code through a bridge.

12. ### Does React Native use a WebView?

React Native uses a JavaScript runtime, but the UI is not HTML and it doesn't use a WebView. We use JSX and React Native-specific components to define the UI. It provides a native-level performance and looks and feels but some UI parts have to be configured separately for iOS and Android.

