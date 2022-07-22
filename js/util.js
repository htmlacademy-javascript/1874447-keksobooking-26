const ALERT_SHOW_TIME = 5000;

// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInt = (min, max) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = (min, max, digit) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min) + min).toFixed(digit);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomArray = (arr) => arr.sort(()=>Math.random()-0.5).slice(0, getRandomInt(0, arr.length));

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if(num > 10 && (Math.round((num % 100) / 10)) === 1){
    return genitivePlural;
  }
  switch(num % 10){
    case 1: return nominative;
    case 2:
    case 3:
    case 4: return genitiveSingular;
  }
  return genitivePlural;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomArray, numDecline, showAlert};
