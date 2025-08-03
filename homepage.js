document.addEventListener('DOMContentLoaded', function () {
    // --- Category Sub-Menu Toggle Logic ---
    const categoryToggleButtons = document.querySelectorAll('.category-toggle-btn');

    categoryToggleButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent document click from closing immediately

            const targetMenuId = this.dataset.target;
            const subMenu = document.getElementById(targetMenuId);

            // Close all other open sub-menus and deactivate their buttons
            document.querySelectorAll('.sub-category-menu.show').forEach(openMenu => {
                if (openMenu !== subMenu) {
                    openMenu.classList.remove('show');
                    openMenu.previousElementSibling.classList.remove('active');
                    openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle the clicked sub-menu's visibility and button's active state
            subMenu.classList.toggle('show');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', subMenu.classList.contains('show'));
        });
    });

    // Close sub-menus when clicking anywhere outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.category-item')) {
            document.querySelectorAll('.sub-category-menu.show').forEach(openMenu => {
                openMenu.classList.remove('show');
                openMenu.previousElementSibling.classList.remove('active');
                openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Optional: Close sub-menus when hitting the Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.sub-category-menu.show').forEach(openMenu => {
                openMenu.classList.remove('show');
                openMenu.previousElementSibling.classList.remove('active');
                openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // --- Condition Filter Logic ---
    const conditionFilterSelect = document.getElementById('conditionFilter');

    conditionFilterSelect.addEventListener('change', function () {
        const selectedCondition = this.value;
        console.log('Product condition selected:', selectedCondition);

        // --- IMPORTANT: Placeholder for your product filtering logic ---
        alert(`Simulating filtering by Condition: ${selectedCondition.toUpperCase()}. Products would now reload/re-filter.`);
    });

    // --- Sort By Order Logic ---
    const sortByOrderSelect = document.getElementById('sortByOrder');

    sortByOrderSelect.addEventListener('change', function () {
        const selectedSortOrder = this.value;
        console.log('Sort order selected:', selectedSortOrder);
        // --- IMPORTANT: Placeholder for your product sorting logic ---
        alert(`Simulating sorting by Order: ${selectedSortOrder.toUpperCase()}. Products would now reload/re-sort.`);
    });
});
