


function Pagination1({ total, records, update }) {
    const pageCount = Math.ceil(total / records); // Calculate total pages
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1); // Array of page numbers

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <li className="page-item" key={pageNumber}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default link behavior
                                update(pageNumber); // Update the current page
                            }} className="page-link">{pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination1;
