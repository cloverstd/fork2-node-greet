greet = require '../lib/index.js'

name = ['cloverstd']
drunk = true

describe 'greet', ->
  it 'should greet a person by name', ->
    expect(greet name).is.eql "hello #{name}"

  it 'should greet a person flirtatiously if drunk', ->
    expect(greet name, drunk).is.eql "hello #{name}, you look sexy today"
