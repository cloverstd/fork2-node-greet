var greet = require('../lib/index.js');
//var expect = require('chai').expect;

var name = ['cloverstd'];
var drunk = true;

describe('greet', function() {
  it('should greet a person by name', function() {
    var result = greet(name);
    expect(result).is.eql('hello ' + name);
  });
  it('should greet a person flirtatiously if drunk', function() {
    var result = greet(name, drunk);
    expect(result).is.eql('hello ' + name + ', you look sexy today');
  });
});
