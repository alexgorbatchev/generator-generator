'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var SubGeneratorGenerator = module.exports = function SubGeneratorGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  if (!this.name) {
    this.log.error('You have to provide a name for the subgenerator.');
    process.exit(1);
  }

  this.generatorName = this.name;
  this.dirname = this._.dasherize(this.name);
};

util.inherits(SubGeneratorGenerator, yeoman.generators.NamedBase);

SubGeneratorGenerator.prototype.template = function () {
  this.mkdir(this.dirname);
  this.mkdir(this.dirname + '/templates');
  this.copy('index.js', this.dirname + '/index.js');
  this.copy('templates/somefile.js', this.dirname + '/templates/somefile.js');
};
