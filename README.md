# @fantasticfiasco/expect

[![Build Status](https://travis-ci.org/FantasticFiasco/expect.svg?branch=master)](https://travis-ci.org/FantasticFiasco/expect)
[![Coverage Status](https://coveralls.io/repos/github/FantasticFiasco/expect/badge.svg)](https://coveralls.io/github/FantasticFiasco/expect)
[![npm version](https://img.shields.io/npm/v/expect.svg)](https://www.npmjs.com/package/expect)
[![Greenkeeper badge](https://badges.greenkeeper.io/FantasticFiasco/expect.svg)](https://greenkeeper.io/)
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

    // Here comes your code...
}

```

## Installation

```sh
npm install @fantasticfiasco/expect
```

## API

### `toBeTrue(condition[, errorMessage])`

- `condition: boolean` The condition expected to be true
- `errorMessage: string` The optional error message displayed if expectation fails

Expect that a condition is true.

### `toBeFalse(condition[, errorMessage])`

- `condition: boolean` The condition expected to be false
- `errorMessage: string` The optional error message displayed if expectation fails

Expect that a condition is false.

### `toExist<T>(value[, errorMessage])`

- `value: T` The value expected to exist
- `errorMessage: string` The optional error message displayed if expectation fails

Expect that a value exists.

### `toNotExist<T>(value[, errorMessage])`

- `value: T` The value expected not to exist
- `errorMessage: string` The optional error message displayed if expectation fails

Expect that a value doesn't exist.

## Credit

Thank you [JetBrains](https://www.jetbrains.com/) for your important initiative to support the open source community with free licenses to your products.

![JetBrains](./doc/resources/jetbrains.png)
