import React, {Suspense} from "react";

// HOC-компонента принимает компонент и возвращает другой компонент.
// Это один из способов для повторного использования одной и той же логики.

// Оборачивает компоненту тегом <Suspense> для использования React.lazy.
const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    }
}

export default withSuspense;