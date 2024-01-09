# A project that generates a custom contribution chart in svg format using NestJS and EJS!

## Styling options
### Color - color (Default: Green)
- Green;
- Yellow;
- Blue;
- Red;
- Black;
- White;
- Purple.

### Background - bg (Default: Dark)
- Dark;
- Light.

### Animation - animation (Default: Scale)
- Scale;
- Drop;
- Pac Man.
_Snake and Spaceship animations in production_

## Examples
_http://localhost:3000/file/lucas7maciel/?animation=pacman_
![alt text](![image](https://github.com/lucas7maciel/lively-contributions/assets/80663597/c7c88d33-8d31-492e-99b5-927fc728405b)
)

_http://localhost:3000/file/lucas7maciel/?animation=scale&color=yellow_
![alt text](![image](https://github.com/lucas7maciel/lively-contributions/assets/80663597/dc015dc1-5139-42a2-9c37-1f07c58906fa)
)

_http://localhost:3000/file/lucas7maciel/?animation=scale&color=yellow_
![alt text](https://raw.githubusercontent.com/lucas7maciel/lively-contributions/4519accca61ee47342bdd823762a0a2aa406764e/example/light_blue_drop.svg?token=ATHNILKN4SURIE5SWKXQVHLFTS7VU)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
