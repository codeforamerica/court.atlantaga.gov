## Atlanta's Court Website

[http://court.atlantaga.gov/](http://court.atlantaga.gov/)

This is the website for the Municipal Court of Atlanta, built in partnership with [Code for America](http://codeforamerica.org/).

If you have ideas to make it better, please file an issue or make a pull request. The court always welcomes citizen input!

## To run it locally

Before you get started make sure you have an up-to-date version of Ruby installed. We use [Homebrew](http://brew.sh/):

```
brew install ruby
```

We use the static site generator [Jekyll](http://jekyllrb.com/) to generate and serve the content as a website. To install Jekyll run:

```
gem install jekyll
```

Fork and clone the repo:

```
git clone git@github.com:codeforamerica/court.atlantaga.gov.git
cd court.atlantaga.gov
```

Run Jekyll:

```
jekyll serve --watch
```
