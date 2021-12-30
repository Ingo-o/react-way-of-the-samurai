import css from "./Paginator.module.css";
import React from "react";

const Paginator = ({pageSize, totalUsersCount, currentPage, onPageChange}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {   // Текущей странице задается класс selectedPage.
                    // В анонимную функцию приходит e, но мы его не используем.
                    pages.map(p => <span className={currentPage === p ? css.selectedPage : css.unselectedPage}
                                         onClick={(e) => onPageChange(p)}>{p}</span>)
                }
            </div>
        </div>
    );
}

export default Paginator;