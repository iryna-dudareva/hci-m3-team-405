StudyBuddy - Mobile Study App for Matching with byour future Study Buddies

---

StudyBuddy is an mobile application built on React Native, designed to help students find their study partners, schedule study sessions, and communicate efficiently.

The app structure is based off of famous matching-making apps combined with a structude study planer and integrated chat.

---

### Features

# Overview/Home

-Overview of current system state,
-including upcoming sessions and recent chats
-direct buttons leading to Discover or Study Plan(Create Session) for quick access

# Discover/Matching

-Swipe-based interface for discovering study partners
-Match system with saved connections
-Instant access to chatting after a match

# Chat

-Basic messaging UI for exchange between matched users

# Study Plan

-Add and manage study sessions
-View upcoming events in a structured list
-Filter sessions by subject

# Profile

-personalisation of experience
-visible progress data for motivation
-settings and log out(when logged in)

### Stack

-Expo https://docs.expo.dev/
(+Expo Status Bar ( https://docs.expo.dev/versions/latest/sdk/status-bar/))
-Expo Router https://docs.expo.dev/router/introduction/
-TypeScript https://www.typescriptlang.org/docs/
-React Native https://reactnative.dev/docs/getting-started
(+ libraries including: Deck Swiper (https://github.com/alexbrillant/react-native-deck-swiper), datetimepicker (https://github.com/react-native-datetimepicker/datetimepicker))
-React Navigation https://reactnavigation.org/docs/getting-started

The project is built on component-based architecture usinf Expo for scalable navigation and modular design.

### Installation & Setup

## 1. Reccomended prerequisites

    -Node.js(LTS version)
    -npm or yarn (comes with Node)
    -Git
    -Expo CLI(optional)

## 2. Dependencies

    -in mobile-app folder "npm install"

## 3. Start the dev server

    -"npx expo start" / "npx expo start --tunnel"

## 4. Run the app

    -On device:
        -Expo Go app -> access through QR Code
    -On emulator:
        -Android Studio or Xcode Simulator

### Data Handling

    -Note that current version od StudyBuddy is only for demo perposes therefore only mock data in mobile-app/data is in use.

### Design Decisions

    -Clean minimal UI
    -Card-based layout
    -Mobile-first responsive design
    -Emphasis on fast interactions

### Future impovemets

    -Backend integration
    -Push-notifications
    -Calendar view(tabular layout instead of list)
    -Filtering system for matches and events
