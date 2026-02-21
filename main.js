const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ 라이트 모드' : '🌙 다크 모드';
});

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = generateLottoNumbers();
    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number', getBandClass(number));
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
});

function getBandClass(n) {
    if (n <= 10) return 'band1';
    if (n <= 20) return 'band2';
    if (n <= 30) return 'band3';
    if (n <= 40) return 'band4';
    return 'band5';
}

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const res = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
    }
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
