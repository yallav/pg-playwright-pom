function getRandomIndex(min, max) {
  if (min < 0 || max < 0) {
    return 0;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

module.exports = { getRandomIndex };
