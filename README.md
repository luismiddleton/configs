

# @luism/configs

This package provides shared configurations for common JavaScript/TypeScript tooling, including Prettier, Vitest, and rslib. It is designed to be used as a base for projects that want to standardize their configuration across multiple repositories or teams.

## Table of Contents

- [Purpose](#purpose)
- [Usage](#usage)
- [Author](#author)
- [License](#license)

## Purpose

- Centralize and share configuration files for tools like Prettier, Vitest, and rslib.
- Ensure consistency and reduce duplication across projects.
- Make it easy to update and maintain tool configurations in one place.

## Usage

1. Install this package in your project:
	```sh
	pnpm add @luism/configs
	# or
	npm install @luism/configs
	```

2. Install required peer dependencies in your project:
	- `prettier`
	- `vitest`
	- `@rslib/core`

3. Reference the shared configs in your tool configuration files or via package entrypoints:

	| Tool     | Import Path                |
	|----------|---------------------------|
	| Prettier | `@luism/configs/prettier` |
	| Vitest   | `@luism/configs/vitest`   |
	| rslib    | `@luism/configs/rslib`    |

## Author

Luis Middleton

## License

MIT
