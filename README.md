# offscale-www
Written in Angular with Material. Butchered angular.material.io.

## License
Like most everywhere we do at offscale, this is open-source and free to use by all (incl. commercially).

## Build dist

    rm -rf dist; ng build -prod && d=../offscale.github.io && rm -rf "$d/dist" && mv "$PWD/dist" "$d" && cd "$d" && (git add .; git status) || ( >&2 echo BUILD FAILED )
