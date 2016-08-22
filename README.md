# Angular2 Rails5 Starter

### Getting Started
## Dependencies
What you need to run this app:
**Make sure you have Node version >= 4.4.3  and NPM >= 3.10.5 and ruby >= 2.3.0
* `node` and `npm` (`brew install node`)
* ruby (`brew install rbenv ruby-build`)
* typescript
* webpack

## Running the app
```bash
# bundler will fetch all remote sources, resolve dependencies and install all need gems in Gemfile
$ bundle install
# create database, 
$ bundle exec rake db:create db:migrate
# install dependencies in the local node_modules folder.
$ npm install
# run the command "start" script of package.json (run AngularJS2, webpack etc)
$ npm start
# run Rails server
$ bundle exec rails server 
```

### License
 [MIT](/LICENSE)

