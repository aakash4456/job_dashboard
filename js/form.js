const applyForm = document.getElementById('apply-form');
const fileInput = document.getElementById('resume');
const fileNameDisplay = document.getElementById('file-name');
const fileDropArea = document.querySelector('.file-drop');

// Handle File Select UI
fileDropArea.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    fileNameDisplay.textContent = `Selected: ${e.target.files[0].name}`;
    fileNameDisplay.classList.remove('hidden');
    fileInput.closest('.form-group').classList.remove('has-error');
  }
});

applyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isValid = true;
  
  // Validation mapping
  const validations =[
    { id: 'fname', check: val => val.trim().length > 0 },
    { id: 'lname', check: val => val.trim().length > 0 },
    { id: 'email', check: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
    { id: 'portfolio', check: val => /^(http|https):\/\/[^ "]+$/.test(val) },
  ];

  validations.forEach(rule => {
    const el = document.getElementById(rule.id);
    const formGroup = el.closest('.form-group');
    if(!rule.check(el.value)) {
      formGroup.classList.add('has-error');
      isValid = false;
    } else {
      formGroup.classList.remove('has-error');
    }
  });

  // file validation
  const fileGroup = fileInput.closest('.form-group');
  if(fileInput.files.length === 0) {
    fileGroup.classList.add('has-error');
    isValid = false;
  } else {
    fileGroup.classList.remove('has-error');
  }

  // clear errors on input
  applyForm.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
      this.closest('.form-group').classList.remove('has-error');
    }, { once: true });
  });

  if(isValid) {
    document.getElementById('apply-form-wrapper').classList.add('hidden');
    document.getElementById('apply-success').classList.remove('hidden');
  }
});