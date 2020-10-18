# @fantasticfiasco/expect

[![Build Status](https://travis-ci.com/FantasticFiasco/expect.svg?branch=master)](https://travis-ci.com/FantasticFiasco/expect)
[![Coverage Status](https://coveralls.io/repos/github/FantasticFiasco/expect/badge.svg)](https://coveralls.io/github/FantasticFiasco/expect)
[![npm version](https://img.shields.io/npm/v/@fantasticfiasco/expect.svg)](https://www.npmjs.com/package/@fantasticfiasco/expect)
[![SemVer compatible](https://img.shields.io/badge/%E2%9C%85-SemVer%20compatible-blue)](https://semver.org/)
[![dependencies Status](https://david-dm.org/FantasticFiasco/expect/status.svg)](https://david-dm.org/FantasticFiasco/expect)
[![devDependencies Status](https://david-dm.org/FantasticFiasco/expect/dev-status.svg)](https://david-dm.org/FantasticFiasco/expect?type=dev)

A Node.js library written in TypeScript providing argument validation.

## Table of contents

- [Super simple to use](#super-simple-to-use)
- [Installation](#installation)
- [API](#api)
- [Credit](#credit)

## Super simple to use

```javascript
import * as expect from '@fantasticfiasco/expect';

function update(person) {
    expect.toExist(person.name);
    expect.toBeTrue(person.age >= 0, 'existential theories are not up for discussion');

    // Squint your eyes and imagine your code here...
}

```

## Installation

```sh
npm install @fantasticfiasco/expect
# or
yarn add @fantasticfiasco/expect
```

## API

### `toBeTrue(condition[, errorMessage])`

- `condition: boolean` The condition expected to be true
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a condition to be true.

### `toBeFalse(condition[, errorMessage])`

- `condition: boolean` The condition expected to be false
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a condition to be false.

### `toExist<T>(value[, errorMessage])`

- `value: T` The value expected to exist
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a value to exist.

### `toNotExist<T>(value[, errorMessage])`

- `value: T` The value expected not to exist
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a value not to exist.

### `toBeAlphanumeric(value[, errorMessage])`

- `value: string` The value expected to be alphanumeric
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a value to be alphanumeric.

### `toBeCharCodes(value, minCharCode, maxCharCode[, errorMessage])`

- `value: string` The value expected to have characters from a range of character codes
- `minCharCode: number` The expected minimum character code
- `maxCharCode: number` The expected maximum character code
- `errorMessage: string` The optional error message displayed if expectation fails

Expect a value to only contain characters from a range of character codes.

## Credit

Thank you [JetBrains](https://www.jetbrains.com/) for your important initiative to support the open source community with free licenses to your products.

![JetBrains](./doc/resources/jetbrains.png)
