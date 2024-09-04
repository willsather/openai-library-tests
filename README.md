# OpenAI Library Tests

These tests are Playwright Tests designed to test compatible API endpoints that expose configuration and usage of the
OpenAI library. These tests are used to support the AI Server and to ensure that when a developer is using the `OpenAI`
library in Node, Python, etc., that Tanzu AI Server can guarantee a certain level of compatibility with the OpenAI SDKs.

## Tests

The tests can be found under [`tests`](./tests). More information can be found under the [
`/tests/README.md`](./tests/README.md).

## Applications

This repository contains two test applications:

1. Node, which uses [Express](https://expressjs.com/) and [OpenAI Node library](https://github.com/openai/openai-node)
2. Python, which uses (**TODO**) and [OpenAI Python library](https://github.com/openai/openai-python)

## Bruno

This repository also provides a [`Bruno`](https://www.usebruno.com/) API Client to help test and use the provided API
Applications. These can be found under [`/bruno`](./bruno)