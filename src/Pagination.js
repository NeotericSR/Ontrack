import React from 'react'

export const Pagination = props => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalBooks/props.booksPerPage); i++)
    {
        pageNumbers.push(i);
    }
    
    return (
        <ul className="pagination">
            {pageNumbers.map(pageNumber => <li key={pageNumber} className="pagination__listitem"><a onClick={()=>props.paginate(pageNumber)} href={pageNumber} className="pagination__link">{pageNumber}</a></li>)}
        </ul>
    )
}

export default Pagination