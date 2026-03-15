let currentPage = 1;
const itemsPerPage = 6;
let currentJobsToDisplay =[];

document.addEventListener('DOMContentLoaded', () => {
  // theme logic
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute('data-theme');
    htmlEl.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });

  // mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // initial Render
  if(window.applyFilters) {
    applyFilters(); 
  } else {
    updatePaginatedView(jobData);
  }
});

function updatePaginatedView(jobs) {
  currentJobsToDisplay = jobs;
  
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, endIndex);

  renderJobsUI(paginatedJobs, jobs.length);
  renderPaginationControls(totalPages);
}

function renderJobsUI(jobs, totalCount) {
  const container = document.getElementById('jobs-container');
  const countLabel = document.getElementById('jobs-count');
  
  countLabel.textContent = `${totalCount} jobs found`;
  
  if (jobs.length == 0) {
    container.innerHTML = `
      <div class="empty-state text-center mt-xl">
        <h3 class="mb-sm">No jobs found</h3>
        <p class="text-muted">Try adjusting your filters or search terms.</p>
      </div>`;
    return;
  }

  container.innerHTML = jobs.map(job => `
    <div class="job-card" onclick="openJobDetail(${job.id})">
      ${job.featured ? '<span class="badge badge-featured">FEATURED</span>' : ''}
      <div class="job-card-header">
        <div class="company-logo">${job.logo}</div>
        <div>
          <p class="text-secondary font-sm">${job.company}</p>
          <h3 class="font-md">${job.title}</h3>
          <div class="job-card-meta">
            <span>📍 ${job.location}</span>
            <span>⏱ ${job.type}</span>
            <span>📊 ${job.level}</span>
          </div>
        </div>
      </div>
      <div class="job-card-tags">
        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="job-card-footer">
        <p class="salary-text">${job.salary} <span>/ year</span></p>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span class="text-muted font-xs">${job.posted}</span>
          <button class="btn btn-secondary btn-text" onclick="event.stopPropagation(); openApplyModal(${job.id})">Apply</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Pagination rendering
function renderPaginationControls(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let html = `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">◀</button>`;
  
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${currentPage === i ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  
  html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">▶</button>`;
  
  paginationContainer.innerHTML = html;
}

window.goToPage = function(page) {
  currentPage = page;
  updatePaginatedView(currentJobsToDisplay);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Grid and List view
const viewListBtn = document.getElementById('view-list');
const viewGridBtn = document.getElementById('view-grid');
const jobsContainer = document.getElementById('jobs-container');

viewListBtn.addEventListener('click', () => {
  jobsContainer.className = 'jobs-layout-list';
  viewListBtn.classList.add('active');
  viewGridBtn.classList.remove('active');
});

viewGridBtn.addEventListener('click', () => {
  jobsContainer.className = 'jobs-layout-grid';
  viewGridBtn.classList.add('active');
  viewListBtn.classList.remove('active');
});