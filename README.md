## http://court.atlantaga.gov/

This is the website for the [Municipal Court of Atlanta], built in partnership with [Code for America](http://codeforamerica.org/). In addition to basic court information, it offers advanced search and SMS abilities, powered by [courtbot].

If you have ideas to make it better, please file an issue or make a pull request. The court always welcomes citizen input!

## Editing the Court Website

This is the new court website for Atlanta: [court.atlantaga.gov]. It’s powered by [Github Pages], and the easiest way to edit it is by using [Prose.io]. In detail:

1. If needed, create a [Github account] and have [Ryan Shepard] add you to the organization.
2. Go to [prose.io] and login with your account.
3.  Click [this link] to jump directly to the court editing interace.
4. Click any page to begin editing. 
5. Make your changes. The text is written in a shorthand called markdown. Refer to this [cheatsheet] for additional information.
6. Click the floppy-disk save icon on the right side, then *commit*.

That’s it! You’ve modified the court website.

## Getting Statistics on Usage

To get statistics on how many people are using the site, head to [Google Analytics]. If you need access, contact [Ryan Shepard].

The text feature is powered by Twilio, and you can get a detailed breakdown of it’s usage by going to these links:

- [Graph of texts sent over time]
- [Log of texts sent]

The second link also offers the ability to download a log of previously sent messages.

## Run This Website On Your Computer

This project is run by the static site generator [Jekyll](http://jekyllrb.com/). Jekyll generates and serves the content as a website.

Before you get started make sure you have an [up-to-date version of Ruby installed](https://github.com/codeforamerica/howto/blob/master/Ruby.md).

To install Jekyll run:

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
