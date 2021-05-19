# TypeScript Compiler

## Watch Mode

```bash
tsc <filename> -w
```

## Configuring TypeScript to Compile The Entire Project

```bash
tsc --init
```

- A new `tsconfig.json` file will be generated
- The `tsc` command will compile the entire project

## Including & Excluding files

### Excluding

```json
{
  "exclude": ["node_modules", "**.dev.ts"]
}
```

### Including

- Files including in TypeScript compilation

```json
{
  "include": ["src"]
}
```

## References

- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
