# Angular2 Rails5 Starter

# Getting Started
## Dependencies
What you need to run this app:
#### Make sure you have Node version >= 4.4.3  and NPM >= 3.10.5 and ruby >= 2.3.0
* `node` and `npm` (`brew install node`)
* ruby (`brew install rbenv ruby-build`)
* typescript
* webpack

## File Structure
```
AngularJS2-Rails5-Starter/
 ├──angular2/                  * located Componenets, Route configs, Templates
 |   ├──app.routes.ts          * route config
 |   ├──app.ts                 * root file
 │   ├──components/            * located custermized componenets for project
 |        ├──MainComponent.ts  * sample component file
 |   ├──launch.ts              * angular 2 bootstrap file
 │   └──vendor.ts              * vendor
 │
 ├──app/                       * organizes application components. (controllers, models, views and helpers)
 ├──bin/                       * contains Rails script for run application
 ├──config/                    * contains database configuration, Rails environment structure, routing of incoming web requests.
 ├──db/                        * contains current database schema, as well as the database migrations.
 ├──lib/                       * located extended modules for this application.
 ├──log/                       * manage & find various error logs
 ├──public/
 ├──tmp/                       * Rails uses this directory to hold temporary files for intermediate processing.
 ├──typings/
 ├──Gemfile                    * file which is used for describing gem dependencies for Ruby Applications.
 ├──Gemfile.lock               * records the exact versions and name of the gem when running bundle install
 ├──package.json               * what npm uses to manage it's dependencies
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * specifies the root files and the compiler options required to compile the project.
 ├──.gitignore
 └──webpack.config.js          * webpack main configuration file

```

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

### To check Running Angular
If you want to know running angular 2, access to [http://localhost:3000/home/index](http://localhost:3000/home/index)<br/>
You can find MainComponent of Angular2 in [http://localhost:3000/home/index](http://localhost:3000/home/index) <br/>
If angular 2 is running in the localhost then you can find this messages at javascript console.
> displayed Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.

### License
[MIT](https://en.wikipedia.org/wiki/MIT_License)
