const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select');
const sortSelect = document.getElementById('sort-select');
const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
const salarySlider = document.getElementById('salary-slider');
const salaryDisplay = document.getElementById('salary-display');
const clearBtn = document.getElementById('clear-filters');
const activeFiltersContainer = document.getElementById('active-filters');

// Format numbers to k (40000 => 40k)
function formatSalary(value) {
  return `$${value / 1000}k`;
}

// event listeners
searchInput.addEventListener('input', applyFilters);
locationSelect.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);
checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));

// Update slider text
salarySlider.addEventListener('input', (e) => {
  salaryDisplay.textContent = formatSalary(e.target.value) + '+';
});

function updateSliderFill() {
  const min = salarySlider.min;
  const max = salarySlider.max;
  const val = salarySlider.value;
  
  const percentage = ((val - min) / (max - min)) * 100;
  
  salarySlider.style.background = `linear-gradient(to right, var(--color-accent) ${percentage}%, var(--color-surface2) ${percentage}%)`;
}

// run when the page loads
updateSliderFill();

salarySlider.addEventListener('input', updateSliderFill);

salarySlider.addEventListener('change', applyFilters);

// clear all filters
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  locationSelect.value = '';
  checkboxes.forEach(cb => cb.checked = false);
  salarySlider.value = 40000;
  salaryDisplay.textContent = '$40k+';
  applyFilters();
});

function applyFilters() {
  if (window.currentPage) {
    window.currentPage = 1;
  }

  const searchTerm = searchInput.value.toLowerCase();
  const locationTerm = locationSelect.value;
  const minSalary = parseInt(salarySlider.value, 10);
  
  // checked filters
  const selectedTypes = Array.from(document.querySelectorAll('input[data-group="type"]:checked')).map(cb => cb.value);
  const selectedModes = Array.from(document.querySelectorAll('input[data-group="mode"]:checked')).map(cb => cb.value);
  const selectedLevels = Array.from(document.querySelectorAll('input[data-group="level"]:checked')).map(cb => cb.value);
  const selectedCategories = Array.from(document.querySelectorAll('input[data-group="category"]:checked')).map(cb => cb.value);

  // Filter logic
  let filtered = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                          job.company.toLowerCase().includes(searchTerm) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                          
    const matchesLoc = locationTerm === '' || job.location.includes(locationTerm);
    
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
    const matchesMode = selectedModes.length === 0 || selectedModes.includes(job.mode);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(job.level);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    
    // if job's max salary is greater than or equal to the minimum required by slider
    const matchesSalary = job.salaryMax >= minSalary;

    return matchesSearch && matchesLoc && matchesType && matchesMode && matchesLevel && matchesCategory && matchesSalary;
  });

  // Sort by salary or id
  const sortValue = sortSelect.value;
  if (sortValue === 'salary') {
    filtered.sort((a, b) => b.salaryMax - a.salaryMax);
  } else {
    // default/recent
    filtered.sort((a, b) => a.id - b.id);
  }

  updateActiveFilterChips(selectedTypes, selectedModes, selectedLevels, selectedCategories, minSalary);
  
  if(typeof updatePaginatedView === 'function') {
    updatePaginatedView(filtered);
  }
}

function updateActiveFilterChips(types, modes, levels, categories, minSalary) {
  let activeChips =[...types, ...modes, ...levels, ...categories];
  
  if (minSalary > 40000) {
    activeChips.push(`> ${formatSalary(minSalary)}`);
  }

  if(activeChips.length === 0) {
    activeFiltersContainer.innerHTML = '';
    return;
  }
  
  activeFiltersContainer.innerHTML = activeChips.map(filter => `
    <div class="filter-chip">
      ${filter} <button onclick="removeFilter('${filter}')">✕</button>
    </div>
  `).join('');
}

// remove individual filter
window.removeFilter = function(val) {
  if (val.startsWith('> $')) {
    // Reset Salary
    salarySlider.value = 40000;
    salaryDisplay.textContent = '$40k+';
  } else {
    // Reset Checkboxes
    checkboxes.forEach(cb => {
      if(cb.value === val) { cb.checked = false; }
    });
  }
  applyFilters();
}