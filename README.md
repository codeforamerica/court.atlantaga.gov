## http://court.atlantaga.gov/

This is the website for the [Municipal Court of Atlanta](http://court.atlantaga.gov/), built in partnership with [Code for America](http://codeforamerica.org/). In addition to basic court information, it offers advanced search and SMS abilities, powered by [courtbot](http://github.com/codeforamerica/courtbot).

If you have ideas to make it better, please file an issue or make a pull request. The court always welcomes citizen input!

## Editing the Court Website

The site is powered by [Github Pages](https://pages.github.com/) and the easiest way to edit it is by using [Prose.io](http://prose.io/). In detail:

1. If needed, create a [Github account](http://github.com/) and have [Ryan Shepard](RLShepard@atlantaga.gov) add you to the organization.
2. Go to [prose.io](http://prose.io/) and login with your account.
3.  Click [this link](http://prose.io/#codeforamerica/court.atlantaga.gov/tree/gh-pages/_posts/static) to jump directly to the court editing interace.
4. Click any page to begin editing. 
5. Make your changes. The text is written in a shorthand called markdown. Refer to this [cheatsheet](https://help.github.com/articles/markdown-basics/) for additional information.
6. Click the floppy-disk save icon on the right side, then *commit*.

That’s it! You’ve modified the court website.

## Getting Statistics on Usage

To get statistics on how many people are using the site, head to [Google Analytics](https://www.google.com/analytics/). If you need access, contact [Ryan Shepard](mailto:RLShepard@atlantaga.gov).

The text feature is powered by Twilio, and you can get a detailed breakdown of it’s usage by going to these links:

- [Graph of texts sent over time](https://www.twilio.com/user/account/analytics/sms-messages)
- [Log of texts sent](https://www.twilio.com/user/account/log/messages)

The second link also offers the ability to download a log of previously sent messages.

## Run This Website On Your Computer

This project is run by the static site generator [Jekyll](http://jekyllrb.com/). Jekyll generates and serves the content as a website.

Before you get started make sure you have an [up-to-date version of Ruby installed](https://github.com/codeforamerica/howto/blob/master/Ruby.md).

To install Jekyll run:

```console
gem install jekyll
```

Fork and clone the repo:

```console
git clone git@github.com:codeforamerica/court.atlantaga.gov.git
cd court.atlantaga.gov
```

Run Jekyll:

```console
jekyll serve --watch
```
