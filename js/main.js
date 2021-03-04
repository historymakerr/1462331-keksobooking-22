function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным, включая ноль, а также значение "до" должно быть меньше значения "от"');
  }

  if (max == min) {
    return max;
  }

  const randomNumber = min + (Math.random() * (max - min + 1));
  return Math.floor(randomNumber);
}

function getRandomFloatNumber(min, max, floatingSigns) {
  if (min < 0 || max < 0 || max < min) {
    throw new Error('Диапазон должен быть положительным, включая ноль, а также значение "до" должно быть меньше значения "от"');
  }

  const randomFloatNumber = min + (Math.random() * (max - min + 1));
  const cutFloatNumber = randomFloatNumber.toFixed(floatingSigns);
  return cutFloatNumber;
}
