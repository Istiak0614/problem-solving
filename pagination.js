function getPageMetadata(totalItems, pageSize, currentPage) {
    if (totalItems === 0) {
        return {
            totalPages: 0,
            startItem: 0,
            endItem: 0,
            hasPrev: false,
            hasNext: false
        };
    }
    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    return {
        totalPages,
        startItem,
        endItem,
        hasPrev: currentPage > 1,
        hasNext: currentPage < totalPages
    };
}
console.log(getPageMetadata(100, 10, 5));