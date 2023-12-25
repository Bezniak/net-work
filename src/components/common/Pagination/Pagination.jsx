import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const displayRange = 3; // Number of pages to display before and after the current page
        const ellipsisThreshold = 5; // Threshold to display ellipsis

        if (totalPages <= 7) {
            // Display all page numbers directly
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <li
                        key={i}
                        className={i === currentPage ? styles.active : ''}
                        onClick={() => handleClick(i)}
                    >
                        {i}
                    </li>
                );
            }
        } else {
            // Display ellipsis and selected page numbers
            let start = Math.max(1, currentPage - displayRange);
            let end = Math.min(totalPages, currentPage + displayRange);
            let prevEllipsis = null;
            let nextEllipsis = null;

            if (start > ellipsisThreshold) {
                prevEllipsis = (
                    <li key="prev-ellipsis" className={styles.ellipsis}>
                        ...
                    </li>
                );
                start = Math.max(1, currentPage - displayRange - 1);
            }

            if (end < totalPages - ellipsisThreshold + 1) {
                nextEllipsis = (
                    <li key="next-ellipsis" className={styles.ellipsis}>
                        ...
                    </li>
                );
                end = Math.min(totalPages, currentPage + displayRange + 1);
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(
                    <li
                        key={i}
                        className={i === currentPage ? styles.active : ''}
                        onClick={() => handleClick(i)}
                    >
                        {i}
                    </li>
                );
            }

            pageNumbers.unshift(prevEllipsis);
            pageNumbers.push(nextEllipsis);
        }

        return pageNumbers;
    };

    return (
        <ul className={styles.pagination}>
            <li
                className={currentPage === 1 ? styles.disabled : ''}
                onClick={() => handleClick(currentPage - 1)}
            >
                Previous
            </li>
            {renderPageNumbers()}
            <li
                className={currentPage === totalPages ? styles.disabled : ''}
                onClick={() => handleClick(currentPage + 1)}
            >
                Next
            </li>
        </ul>
    );
};

export default Pagination;