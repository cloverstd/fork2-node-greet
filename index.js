function greet(name, drunk) {
  var result = 'hello ';
  if (name.length === 0) {
    result += 'world';
  } else {
    result += name.constructor == Array ? name.join(', ') : name;
  }

  if (drunk)
    return result + ', you look sexy today';
  else
    return result;
}

module.exports = greet;
