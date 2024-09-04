# Node OpenAI API

This is a sample Node application that connects and conforms to the OpenAI API to generate basic AI responses.

These AI responses are then served over Express API endpoints.


## Build

This project uses `tsup` to transpile the typescript, which is configured in [`tsup.config.ts`](./tsup.config.ts).

```zsh
npm run build
```

## Start

After a `build` is complete, you can start this application with `node` using the following command. Also, `dotenv` is
used provide environment variables to the application at runtime, so ensure `.env` has the required variables.

```zsh
npm run start
```

```zsh
npm run build
```

## Testing

This application has basic unit tests to ensure its interactions with the OpenAI library. This application uses `vitest`
to invoke each function which calls uses OpenAI Library to generate a response (configuration via environment variables)

```zsh
npm run test
```
