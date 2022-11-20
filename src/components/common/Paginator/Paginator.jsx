import {useState} from "react";
import s from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pages}>
        {portionNumber > 1 ? <button className={s.toggleBtn} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Back</button> : null
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return (
                    <div key={p} onClick={(e) => {
                        onPageChanged(p);
                    }}
                         className={currentPage === p ? s.selectedPage : s.defaultPage}> {p}
                    </div>)
            })}
        {portionCount > portionNumber &&
            <button className={s.toggleBtn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>
        }
    </div>
}

export default Paginator;