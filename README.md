# Browsefy

![npm](https://img.shields.io/npm/v/browsefy)
![bundlephobia](https://badgen.net/bundlephobia/minzip/browsefy)
![npm](https://img.shields.io/npm/dt/browsefy)
![Travis (.org)](https://img.shields.io/travis/suyalcinkaya/browsefy)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![NPM](https://img.shields.io/npm/l/browsefy)

## About

Browsefy is a lightweight browser detector with the size of 770B.

## Install

With package manager:

```sh
$ npm install browsefy

# OR

$ yarn add browsefy
```

With CDN:

```html
<script src="https://unpkg.com/browsefy@1.0.0/dist/browsefy.umd.js"></script>
```

## Usage

```js
const result = browsefy();

// Example output for result:
{
  browser: 'Chrome',
  os: 'iOS',
  platform: 'mobile',
  model: 'iPhone'
}
```

Also see the [example](example/index.html).

## Contributing

Contributions are welcome!

1.  Fork it.
2.  Create your feature branch: `git checkout -b my-new-feature`.
3.  Commit your changes: `git commit -am 'Adds some feature'`.
4.  Push to the branch: `git push origin my-new-feature`.
5.  Submit a pull request.

Or open [an issue](https://github.com/suyalcinkaya/browsefy/issues).

## License

Licensed under the MIT License.
