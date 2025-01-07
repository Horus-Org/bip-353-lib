# BIP 353 React Native ⚡

[![NPM version](https://img.shields.io/npm/v/bip-353-lib.svg)](https://npmjs.org/package/bip-353-lib)
[![Bitcoin-only](https://img.shields.io/badge/bitcoin-only-FF9900?logo=bitcoin)](https://twentyone.world)
[![LN](https://img.shields.io/badge/lightning-792EE5?logo=lightning)](https://mempool.space/lightning)

⚠️**Alpha Software**

>React Native for BIP-353 (DNS Payments)

### About

### BIP-353 React Native

BIP-353 introduces a new standard for Bitcoin addresses that enhances privacy and usability by enabling native support for Address Reuse. This project is a React Native implementation aimed at providing developers with an easy-to-use library for integrating BIP-353 functionality into mobile applications.

### Key Features

- **Native Support**: Seamlessly integrate BIP-353 address generation and management within your React Native application.
- **Privacy Focused**: Leverage the address reuse functionality to enhance user privacy while interacting with the Bitcoin network.
- **Easy Integration**: Designed for simplicity, allowing developers to quickly set up and start using BIP-353 without extensive modifications to their existing codebase.
- **Cross-Platform Compatibility**: Fully compatible with both iOS and Android, ensuring a consistent user experience across platforms.
- **Comprehensive Documentation**: Detailed guides and examples to help you get started and make the most of the BIP-353 implementation.

### Installation

To install the BIP-353 library, use npm or yarn:

```bash
npm install bip-353-react-native
```
or

```bash
yarn add bip-353-react-native
```

### Usage

Here's a simple example of how to use the BIP-353 library in your React Native application:

```javascript
import { generateAddress } from 'bip-353-react-native';

// Generate a new BIP-353 address
const newAddress = generateAddress();
console.log(`New BIP-353 Address: ${newAddress}`);
```

### Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write tests for your changes.
4. Submit a pull request with a description of your changes.

### License

This project is licensed under the MIT License.

---

## Roamdmap

- [ ] Beta software