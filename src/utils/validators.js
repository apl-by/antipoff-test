/**
 * checkText - функция валидатор для input c type="text"
 *
 * @param {string} value - текущее значение input
 * @returns {string} - пустая строка, или строка с текстом ошибки
 */

export const checkText = (value) => {
  if (!value) return 'Поле обязательно для заполнения';
  if (value.length > 50) {
    return `Максимальное количество символов: ${50}`;
  }
  if (value.length < 2) {
    return `Минимальное количество символов: ${2}`;
  }
  return '';
};

/**
 * checkEmail - функция валидатор для input c type="email"
 *
 * @param {string} value - текущее значение input
 * @returns {string} - пустая строка, или строка с текстом ошибки
 */

export const checkEmail = (value) => {
  if (!value) return 'Поле обязательно для заполнения';
  if (/[^\w@.-]/.test(value)) {
    return 'Недопустимый символ ввода';
  }
  if (value.length > 100) {
    return `Максимальное количество символов: ${100}`;
  }
  if (value.startsWith('@')) {
    return 'Пропущена часть почты слева от символа @';
  }
  if (value.match(/@/g)?.[1]) {
    return 'Недопускается повторное использование @';
  }
  if (!/@/.test(value)) {
    return 'Пропущен обязательный символ @';
  }
  if (!/^[\w.-]+@\w+\.\w+$/.test(value)) {
    return 'Некорректный email';
  }
  return '';
};

/**
 * checkPassword - функция валидатор для input c type="password"
 *
 * @param {string} value - текущее значение input
 * @returns {string} - пустая строка, или строка с текстом ошибки
 */

export const checkPassword = (value) => {
  if (!value) return 'Поле обязательно для заполнения';
  if (value.length > 50) {
    return `Максимальное количество символов: ${50}`;
  }
  if (value.length < 6) {
    return `Минимальное количество символов: ${6}`;
  }
  return '';
};

/**
 * comparePassword - функция валидатор для сравнения повторного и текущего паролей
 *
 * @param {string} repeatPassword - повторный пароль
 * @param {string} password - текущий пароль
 * @returns {string} - пустая строка, или строка с текстом ошибки
 */

export const comparePassword = (repeatPassword, password) => {
  if (repeatPassword !== password) {
    return 'Пароли не совпадают';
  }
  return '';
};
