# Soramitsu Vuetify Plugin

[![Storybook][github-storybok]](https://soramitsukhmer.github.io/soramitsu-vuetify-plugin/)

## Usage

```sh
# coming soon...
# npm install {placeholder}
```

## Development

Clone the project

```sh
git clone git@github.com:soramitsukhmer/soramitsu-vuetify-plugin.git
cd soramitsu-vuetify-plugin
```

**Build local package**

Run the following command will compile and bundle all components into `dist` folder and watch for changes.

```sh
yarn build:dev
```

**Start development server**

Run the following command will start up a developer server from `example` directory.

```sh
yarn serve
```

## Production

Run the following command will bundle all dependencies and components into `dist` folder.

```sh
yarn build
```

Once the process has finished. You may be able to publish the package to `NPM` repository.

## Storybook

**Start storybook**

Durning development you could start `storybook` local server via the following command

```sh
yarn storybook
```

> Note: please do not include `storybook-static` in your commit.

This folder is automatically build and push into `gh-pages` branch withing the repo.

You may visit the published storybook via the following url `https://soramitsukhmer.github.io/soramitsu-vuetify-plugin/`

### Addons

**Default addons**

- [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
- [Links](https://github.com/storybookjs/storybook/tree/master/addons/links)

**Additional addons**

- [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)
- [StorySource](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
- [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

[github-storybok]: https://github.com/soramitsukhmer/soramitsu-vuetify-plugin/workflows/Storybook/badge.svg

## License
License under [BSD-3-Clause](LICENSE)
