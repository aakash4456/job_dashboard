function openJobDetail(id) {
  const job = jobData.find(j => j.id === id);
  if (!job) return;

  const content = document.getElementById('job-detail-content');
  content.innerHTML = `
    <div class="modal-header">
      <h2 class="mb-xs">${job.title}</h2>
      <p class="text-secondary font-sm">${job.company} • ${job.location}</p>
      <div class="job-card-meta mt-sm mb-sm">
        <span class="tag">⏱ ${job.type}</span>
        <span class="tag">📍 ${job.mode}</span>
        <span class="tag">📊 ${job.level}</span>
      </div>
    </div>
    
    <div class="mt-md mb-md">
      <h4 class="mb-xs">ABOUT THE ROLE</h4>
      <p class="text-secondary font-sm">${job.description}</p>
    </div>

    <div class="mt-md mb-md">
      <h4 class="mb-xs">RESPONSIBILITIES</h4>
      <ul style="list-style:disc; margin-left: 20px;" class="text-secondary font-sm">
        ${job.responsibilities.map(r => `<li class="mb-xs">${r}</li>`).join('')}
      </ul>
    </div>

    <div class="mt-md mb-lg">
      <h4 class="mb-xs">REQUIREMENTS</h4>
      <ul style="list-style:disc; margin-left: 20px;" class="text-secondary font-sm">
        ${job.requirements.map(r => `<li class="mb-xs">${r}</li>`).join('')}
      </ul>
    </div>
    
    <div class="mb-lg">
      <h4 class="mb-xs">TECH STACK</h4>
      <div class="job-card-tags mt-xs">
        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>

    <div class="job-card-footer">
      <div>
        <p class="salary-text font-lg">${job.salary}</p>
        <span class="text-muted font-xs">per year • ${job.type}</span>
      </div>
      <button class="btn btn-primary" onclick="openApplyModal(${job.id})">Apply Now →</button>
    </div>
  `;

  document.getElementById('modal-job-detail').classList.remove('hidden');
}

function openApplyModal(id) {
  const job = jobData.find(j => j.id === id);
  if(!job) return;
  
  closeModal('modal-job-detail');
  
  document.getElementById('apply-form-subtitle').textContent = `${job.title} at ${job.company}`;
  document.getElementById('apply-form-wrapper').classList.remove('hidden');
  document.getElementById('apply-success').classList.add('hidden');
  document.getElementById('apply-form').reset();
  document.getElementById('file-name').classList.add('hidden');
  
  document.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

  document.getElementById('modal-apply-form').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

// close modal on outside click or ESC key
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.add('hidden');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
  }
});