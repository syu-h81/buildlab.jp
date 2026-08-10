type FilterCategory = 'All' | 'Corporate' | 'Service' | 'Landing Page' | 'WordPress' | 'EC';

const filterButtons = Array.from(document.querySelectorAll<HTMLElement>('[data-filter-button]'));
const workCards = Array.from(document.querySelectorAll<HTMLElement>('[data-work-card]'));

if (filterButtons.length > 0 && workCards.length > 0) {
	const setFilter = (selectedCategory: FilterCategory) => {
		filterButtons.forEach((button) => {
			const category = button.dataset.filterCategory as FilterCategory;
			const isActive = category === selectedCategory;
			button.classList.toggle('is-active', isActive);
			button.setAttribute('aria-pressed', String(isActive));
		});

		workCards.forEach((card) => {
			const workCategory = card.dataset.workCategory as FilterCategory | undefined;
			const shouldShow = selectedCategory === 'All' || workCategory === selectedCategory;
			card.style.display = shouldShow ? '' : 'none';
		});
	};

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const selectedCategory = button.dataset.filterCategory as FilterCategory;
			setFilter(selectedCategory);
		});
	});

	const initialCategory: FilterCategory = 'All';
	setFilter(initialCategory);
}
