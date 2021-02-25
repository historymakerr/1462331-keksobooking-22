function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    console.log('Диапазон должен быть положительным, включая ноль');
    return;
  }

  if (max < min) {
    let swap = max;
    max = min;
    min = swap;
  }

  if (max == min) return max;

  let randomNumber = min + (Math.random() * (max - min + 1));
  return Math.floor(randomNumber);
}

function getRandomFloatNumber(min, max, floatingSigns) {
  if (min < 0 || max < 0) {
    console.log('Диапазон должен быть положительным, включая ноль');
    return;
  }

  if (max < min) {
    let swap = max;
    max = min;
    min = swap;
  }

  let randomNumber = getRandomNumber(min, max);
}
