[![Build Status](https://travis-ci.org/zrrrzzt/lix-cli.svg?branch=master)](https://travis-ci.org/zrrrzzt/lix-cli)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/lix-cli/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/lix-cli?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# lix-cli

CLI for lix calculator
Measure the readability of your text using [LIX-index](https://en.wikipedia.org/wiki/LIX)

## Installation

```sh
$ npm i -g lix-cli
```

## usage

```sh
$ lix --text <text-to-analyze>
```

## Example

```sh
$ lix --text "Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon."

=> 18.79
```

## Related

- [lix-index](https://github.com/zrrrzzt/lix-index) API for this module

## License

[MIT](LICENSE)

![Robohash image of lix-cli](https://robots.kebabstudios.party/lix-cli.png "Robohash image of lix-cli")