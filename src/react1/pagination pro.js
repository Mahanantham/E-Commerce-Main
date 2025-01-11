function Paginationpro({ total, records, update, currentPage }) {
    const pageCount = Math.ceil(total / records); // Calculate total pages
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1); // Array of page numbers

    // Logic to disable Previous and Next buttons based on current page
    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === pageCount;

    return (
        <div>
            <ul className="pagination">
                {/* Previous Button */}
                <li className={`page-item ${isPreviousDisabled ? 'disabled' : ''}`}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!isPreviousDisabled) update(currentPage - 1); // Update to previous page
                        }}
                        className="page-link" >
                        Previous
                    </a>
                </li>

                {/* Page Numbers */}
                {pageNumbers.map((pageNumber) => (
                    <li className={`page-item ${pageNumber === currentPage ? 'active' : ''}`} key={pageNumber}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                update(pageNumber); // Update current page
                            }}
                            className="page-link" >
                            {pageNumber}
                        </a>
                    </li>
                ))}

                {/* Next Button */}
                <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!isNextDisabled) update(currentPage + 1); // Update to next page
                        }}
                        className="page-link">
                        Next
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Paginationpro;
