# Fast Food App Ui

## Preview Final Project

#### Home Screen

<img src="./preview/homescreen.jpg" style="width:350px;" alt=" Home" />

#### Food Details Screen

<img src="./preview/detailsscreen.jpg" style="width:350px;" alt="Details" />


## What did we use in the project?
### 1- [React Native Expo](https://reactnative.dev/)
### 2- [NativeWind](https://www.nativewind.dev/)
### 3- [React Navigation](https://reactnavigation.org/)
### 4- [npm react-native-heroicons](https://www.npmjs.com/package/react-native-heroicons)
### 5- [react-native-animatable](https://www.npmjs.com/package/react-native-animatable)

## Steps
- npx create-expo-app Fast-Food-App-Ui
- npm i twrnc * `First Method => Tailwind`
- npm i nativewind * `Second Method => Tailwind`
- npm i --dev tailwindcss@3.3.2
- npx tailwindcss init
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack
- npm i react-native-responsive-screen
- npm i react-native-heroicons
- npm i react-native-heroicons react-native-svg
- npm i react-native-animatable
```
// tailwind.config.js
module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Add the Babel plugin

Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

## Run The Project
- Download
- Open The Project
- Terminal
- npm i
- npx expo
- -w or Open Expo App On your Phone
