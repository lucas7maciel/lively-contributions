_Under development_
# A project that generates a custom contribution chart in svg format using NestJS and EJS!

## How to generate your graph

Make a get request for the route
http://localhost:3000/graph/~your-github-nick~

Set your styling options in the query params

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
[http://localhost:3000/file/lucas7maciel/?animation=pacman]
<img src="https://raw.githubusercontent.com/lucas7maciel/lively-contributions/4519accca61ee47342bdd823762a0a2aa406764e/example/pacman_svg.svg?token=ATHNILKVDFL5UDWVPKW25JDFTS7VU">

[http://localhost:3000/file/lucas7maciel/?animation=scale&color=yellow]
<img src="https://raw.githubusercontent.com/lucas7maciel/lively-contributions/4519accca61ee47342bdd823762a0a2aa406764e/example/yellow_scale.svg?token=ATHNILLD3I27TTGUIIDLZR3FTS7VY">

[http://localhost:3000/file/lucas7maciel/?animation=drop&color=blue&bg=light]
<img src="https://raw.githubusercontent.com/lucas7maciel/lively-contributions/4d3a907095987b5cf941796e02123fac82b4272b/example/light_blue_drop.svg?token=ATHNILIU3AEGKUJRXCFHH3DFTTAQK">

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


## License

Nest is [MIT licensed](LICENSE).
