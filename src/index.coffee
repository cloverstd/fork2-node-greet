module.exports = (name, drunk=false) ->
  result = "hello " + if name.length == 0 then "world" else name.join(', ')
  result += if drunk then ", you look sexy today" else ''
