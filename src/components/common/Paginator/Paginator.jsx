import css from "./Paginator.module.css";
import React, {useState} from "react";
import classNames from "classnames";

const Paginator = ({pageSize, totalItemsCount, currentPage, onPageChange, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const portionsCount = Math.ceil(pagesCount / portionSize);

    // Хук useState возвращает массив из 2 значений.
    // Первое это непосредственно наш state. Второе это функция для изменения этого state.
    // Через аргумент задается initialState.
    const [portionNumber, setPortionNumber] = useState(1);

    const leftBorderOfThePortion = (portionNumber - 1) * portionSize + 1;
    const rightBorderOfThePortion = portionNumber * portionSize;

    return (
        <div className={css.paginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>}
            {
                // Текущей странице задается класс selectedPage.
                // В анонимную функцию приходит e, но мы его не используем.
                pages
                    .filter(page => page >= leftBorderOfThePortion && page <= rightBorderOfThePortion)
                    .map(page => <span
                        className={classNames({[css.selectedPage]: currentPage === page}, css.pageNumber)}
                        onClick={(e) => onPageChange(page)} key={page}>{page}</span>)
            }
            {portionNumber < portionsCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    );
}

export default Paginator;