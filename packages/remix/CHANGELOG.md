# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.0-alpha.5](https://github.com/clerkinc/javascript/compare/@clerk/remix@0.1.0-alpha.4...@clerk/remix@0.1.0-alpha.5) (2022-02-28)


### Reverts

* Revert "fix(remix): Make `getAuth` stop loader execution during interstitial" ([93d3c9b](https://github.com/clerkinc/javascript/commit/93d3c9b13ff225b066fae47f7c15735aef750036))



## 0.1.0-alpha.4 (2022-02-28)


### Features

* **clerk-remix:** Introduce basic clerk-remix structure ([f1ba9bd](https://github.com/clerkinc/javascript/commit/f1ba9bd02c5f107ff9993b120954cc62886d9c04))
* **clerk-remix:** Introduce ClerkProvider for Remix ([edb0cee](https://github.com/clerkinc/javascript/commit/edb0cee6a5eb5124e0fb3a08d8554c6da9b69899))
* **clerk-remix:** Introduce global polyfill ([5236bed](https://github.com/clerkinc/javascript/commit/5236bedd39e3d2fccd9466ac4dae715131293e4d))
* **clerk-remix:** Introduce SSR getAuth for Remix ([bae06b8](https://github.com/clerkinc/javascript/commit/bae06b8846dfafe3b57036efc457435799bfa677))
* **clerk-remix:** Introduce SSR rootAuthLoader for Remix ([23a10c7](https://github.com/clerkinc/javascript/commit/23a10c75c7590660aea7e8b261b0856affd8d01f))
* **clerk-remix:** Remove load options from `getAuth` ([246fe76](https://github.com/clerkinc/javascript/commit/246fe76943aedc07bed8510761a286ef324049ec))
* **clerk-remix:** Rename InferLoaderData to InferRootLoaderData ([e9eb81c](https://github.com/clerkinc/javascript/commit/e9eb81c092999614c1325bc2f196bcbf79f8360c))
* **remix:** Depend on @remix-run/runtime only ([c5c53cd](https://github.com/clerkinc/javascript/commit/c5c53cd2202924a183b2ba77ef136e2aabab32c1))
* **remix:** Introduce `ConnectClerk` HOC ([3f020ca](https://github.com/clerkinc/javascript/commit/3f020ca8f41632a24a7dd56caef3872a7b56c054))
* **remix:** Make `rootAuthLoader` require a Response or object return value ([bf53db5](https://github.com/clerkinc/javascript/commit/bf53db5243542e44db39b6422e3f2ffd6765cd79))
* **remix:** Move Remix dependencies to `peerDependencies` ([0ee115d](https://github.com/clerkinc/javascript/commit/0ee115db783f2ce10db196fdf5d9933481e7872e))


### Bug Fixes

* **remix:** Allow no return from `rootAuthLoader` callback ([4768aa6](https://github.com/clerkinc/javascript/commit/4768aa6bcf19e3a6d1a6d86a26f89b7351927673))
* **remix:** Make `clerkState` required ([677a255](https://github.com/clerkinc/javascript/commit/677a2556846845e52839b5324a6031edc98dc093))
* **remix:** Make `getAuth` stop loader execution during interstitial ([16a1be3](https://github.com/clerkinc/javascript/commit/16a1be34cce5c8a5027d957669e0176540e58d3a))
* **remix:** Make `rootAuthLoader` only throw if a callback exists ([2689f6c](https://github.com/clerkinc/javascript/commit/2689f6ce858cd08365a37678d817e60e889e1acb))



## [0.1.0-alpha.3](https://github.com/clerkinc/javascript/compare/@clerk/remix@0.1.0-alpha.2...@clerk/remix@0.1.0-alpha.3) (2022-02-25)


### Bug Fixes

* **remix:** Make `rootAuthLoader` only throw if a callback exists ([cec342f](https://github.com/clerkinc/javascript/commit/cec342f36d09d7f829589e145e7f4be60aea5d13))



## 0.1.0-alpha.2 (2022-02-25)


### Features

* **clerk-remix:** Introduce basic clerk-remix structure ([f4f8e06](https://github.com/clerkinc/javascript/commit/f4f8e06385acb8fb5f142808309a95586660d76e))
* **clerk-remix:** Introduce ClerkProvider for Remix ([d63e4bf](https://github.com/clerkinc/javascript/commit/d63e4bff960729977997d7cc0011ad90ea794225))
* **clerk-remix:** Introduce global polyfill ([c3df5af](https://github.com/clerkinc/javascript/commit/c3df5afe5998a4872d7a617a18161c98e6753483))
* **clerk-remix:** Introduce SSR getAuth for Remix ([8ee0eaf](https://github.com/clerkinc/javascript/commit/8ee0eafc8409d1a947daab3c677331fbded24dba))
* **clerk-remix:** Introduce SSR rootAuthLoader for Remix ([693f79b](https://github.com/clerkinc/javascript/commit/693f79beda21108f1f1a67dd612c1eca6506d788))
* **clerk-remix:** Remove load options from `getAuth` ([5c1e23d](https://github.com/clerkinc/javascript/commit/5c1e23db40b7a49b7cec5a1d8206daad160e6361))
* **clerk-remix:** Rename InferLoaderData to InferRootLoaderData ([d753291](https://github.com/clerkinc/javascript/commit/d753291f5f61222dc189fded7341cfcce04de20c))
* **remix:** Depend on @remix-run/runtime only ([c5d4c45](https://github.com/clerkinc/javascript/commit/c5d4c4535f8ff7f2a89ec0cf5e1e941ed40b2238))
* **remix:** Introduce `ConnectClerk` HOC ([ea99273](https://github.com/clerkinc/javascript/commit/ea9927366d9591b2aa4a86b94eb2b1e05b505f6c))
* **remix:** Make `rootAuthLoader` require a Response or object return value ([2aab7db](https://github.com/clerkinc/javascript/commit/2aab7dbcf97facfddc42e1694c859fbae76b95db))
* **remix:** Move Remix dependencies to `peerDependencies` ([1ce0ce3](https://github.com/clerkinc/javascript/commit/1ce0ce38f13bf8b0c4255f97507b42cf8e793fde))


### Bug Fixes

* **remix:** Allow no return from `rootAuthLoader` callback ([5e708fd](https://github.com/clerkinc/javascript/commit/5e708fd798181fd0c3f917cc9f431d97d682b3c6))
* **remix:** Make `clerkState` required ([22d2aff](https://github.com/clerkinc/javascript/commit/22d2affd2801f9623257b905aa0687e7ef43ff59))



## [0.1.0-alpha.1](https://github.com/clerkinc/javascript/compare/@clerk/remix@0.1.0-alpha.0...@clerk/remix@0.1.0-alpha.1) (2022-02-18)


### Bug Fixes

* **remix:** Allow no return from `rootAuthLoader` callback ([55f14e0](https://github.com/clerkinc/javascript/commit/55f14e0706eb45b8e6808e7f33d7b430cf3d2afd))
* **remix:** Make `clerkState` required ([df88977](https://github.com/clerkinc/javascript/commit/df88977531b12d15f245ff2cbc8ce360e4d52b91))



## 0.1.0-alpha.0 (2022-02-18)


### Features

* **clerk-remix:** Introduce basic clerk-remix structure ([ef91121](https://github.com/clerkinc/javascript/commit/ef9112144b47714a5a380bcccab9961f91ec17c9))
* **clerk-remix:** Introduce ClerkProvider for Remix ([07abb99](https://github.com/clerkinc/javascript/commit/07abb99111a884e2e22f55a5101292595c066507))
* **clerk-remix:** Introduce global polyfill ([78435ca](https://github.com/clerkinc/javascript/commit/78435ca008a32aa1c2546bc333a5e28e3d5079df))
* **clerk-remix:** Introduce SSR getAuth for Remix ([e9ca753](https://github.com/clerkinc/javascript/commit/e9ca7534e2df55e5d1928d4a1f3a53eca3397252))
* **clerk-remix:** Introduce SSR rootAuthLoader for Remix ([c7a61aa](https://github.com/clerkinc/javascript/commit/c7a61aab89dad2a1c0cde0d658ce4a50f0eb3cd4))
* **clerk-remix:** Remove load options from `getAuth` ([5f4cedc](https://github.com/clerkinc/javascript/commit/5f4cedc70db8398eb196ca769db41ebadb15ab12))
* **clerk-remix:** Rename InferLoaderData to InferRootLoaderData ([aa0c720](https://github.com/clerkinc/javascript/commit/aa0c7208bf8490f24b5b10527c4bb88cf07b79fc))
* **remix:** Depend on @remix-run/runtime only ([7c014f4](https://github.com/clerkinc/javascript/commit/7c014f4327ce46cc7e74a0f637dd7b100baa672b))