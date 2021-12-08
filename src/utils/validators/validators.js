export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

// Замыкание - функция вызывает другую функцию и эта внутренняя функция получает доступ к данным из внешней.
// Мы вызываем maxLengthCreator, передаем в него значение и он возвращает нам функцию валидатор с этим значением внутри.
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}


