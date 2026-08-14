# dsh-client-ui-skin-claude

[![awesome · DSH plugin](https://awesome-dsh-plugin.com/badge.svg)](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

A Claude-style skin for the DSH Web GUI: warm-black canvas, clay accent, serif UI, follows the native light/dark theme.

![Dark](docs/dark.png) · ![Light](docs/light.png)

## Features

- Warm-black (#141413) canvas with an Anthropic clay (#d97757) accent
- Serif UI type (Georgia), monospace stack for code
- Slim scrollbars, clay selection/focus, pill badges
- Light and dark variants that follow the system theme

## Install

```sh
dsh plugin --profile web add github:PAKIKNOWLEDGE/dsh-client-ui-skin-claude
```

Restart `dsh web`, then refresh the page.

## Switching

Only one skin is active at a time. Edit `~/.dsh/cordis.patch.yml`:

```yaml
# outside the dsh-skin managed section
- insert:
    - id: ui-skin-claude
      name: '@dsh-external/dsh-client-ui-skin-claude'
```

(and add `disabled: true` to the currently active skin's row). The config watcher hot-reloads within seconds; refresh the page.

## Uninstall

1. Remove the `ui-skin-claude` insert row from `~/.dsh/cordis.patch.yml`.
2. `dsh plugin --profile web remove @dsh-external/dsh-client-ui-skin-claude`
3. Restart `dsh web`.

## License

MIT
