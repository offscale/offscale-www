# Offscale.io

This is the repository for the [main offscale.io website](http://offscale.io).

This is a [Middleman](http://middlemanapp.com) project, which builds a static
site from these source files.

## Contributions Welcome!

If you find a typo or you feel like you can improve the HTML, CSS, or
JavaScript, we welcome contributions. Feel free to open issues or pull
requests like any normal GitHub project, and we'll merge it in.

## Running the Site Locally

Running the site locally is simple. Clone this repo and run the following
commands:

```
$ git clone https://github.com/offscale/offscale.github.io source
$ bundle
$ bundle exec middleman server
```

Then open up `localhost:4567`. Note that some URLs you may need to append
".html" to make them work (in the navigation and such).

Note that the initial theme is taken from the [hashicorp/www](https://github.com/hashicorp/www) repo.
