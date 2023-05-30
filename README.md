# 1. Project Introduce

<aside>
💡 대구 생활권의 실제 이용자들의 맛집을 데이터를 수집해서 리뷰와 사진제공하는 맛집 앱 입니다.

</aside>

`@lastest-update readme post: 2023-05-30`

---

This project is Created React Native

Design Pattern : `Atomic Design Pattern`

## Use Tech Stacks Version

- React Native : `0.71.8`
- React : `18.2.0`
- Typescript : `4.9.5`
- react-responsive : `9.0.2`
- styled-components : `5.3.11`
- @react-navigation/native : `6.1.6`

## Client State Management

- recoil : `0.7.7`

## Server State Management

- @tanstack/react-query : `4.29.12`

---

# **2. Package.json**

```json
{
  "name": "DaeguRestaurantSearchApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@react-navigation/stack": "^6.3.16",
    "@tanstack/react-query": "^4.29.12",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-safe-area-context": "^4.5.3",
    "react-native-screens": "^3.20.0",
    "recoil": "^0.7.7",
    "styled-components": "^5.3.11"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/runtime": "^7.20.0",
    "@react-native-community/eslint-config": "^3.2.0",
    "@tsconfig/react-native": "^2.0.2",
    "@types/jest": "^29.2.1",
    "@types/react": "^18.0.24",
    "@types/react-test-renderer": "^18.0.0",
    "babel-jest": "^29.2.1",
    "eslint": "^8.19.0",
    "jest": "^29.2.1",
    "metro-react-native-babel-preset": "0.73.9",
    "prettier": "^2.4.1",
    "react-test-renderer": "18.2.0",
    "typescript": "4.8.4"
  },
  "jest": {
    "preset": "react-native"
  }
}
```

---

# **3. Directories (Source Tree)**

```tsx
.
├── 📁 assets
│   └── 📁 images
│       └── index.ts
├── 📁 components
│   ├── 📁 Atoms
│   │   └── index.ts
│   ├── 📁 Molecules
│   │   └── index.ts
│   ├── 📁 Organisms
│   │   └── index.ts
│   ├── 📁 Screen
│   │   ├── HomeScreen.tsx
│   │   └── index.ts
│   └── 📁 Templates
│       └── index.ts
├── 📁 hooks
│   └── index.ts
├── 📁 queries
│   └── index.ts
└── 📁 states
    └── index.ts

12 directories, 10 files
```

`📁assets`

`📁components`

- `📁Atoms`
- `📁Molecules`
- `📁Organisms`
- `📁Templates`
- `📁Screen`

`📁hooks`

`📁queries`

`📁states`