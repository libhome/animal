/* Navigation Logic */
function showSection(sectionId) {
    // Content sections
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    // Sidebar Items
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    // Find the link that triggered this. A bit cheeky but safe for demo.
    const links = document.querySelectorAll('.menu-item');
    if (sectionId === 'dashboard') links[0].classList.add('active');
    if (sectionId === 'top-loans') links[1].classList.add('active');
    if (sectionId === 'stats') links[2].classList.add('active');

    // Update Title
    const titles = {
        'dashboard': '대시보드',
        'top-loans': '다대출 자료 (BEST)',
        'stats': '이용 통계 분석'
    };
    document.getElementById('page-title').innerText = titles[sectionId];
}

document.addEventListener('DOMContentLoaded', () => {

    /* --- CHART.JS CONFIG --- */

    // 1. Weekly Chart (Dashboard) - Bar Chart
    const ctxWeekly = document.getElementById('weeklyChart').getContext('2d');
    new Chart(ctxWeekly, {
        type: 'bar',
        data: {
            labels: ['월', '화', '수', '목', '금'],
            datasets: [{
                label: '대출 권수',
                data: [45, 52, 38, 65, 48],
                backgroundColor: '#4318FF',
                borderRadius: 10,
                barThickness: 30
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [2, 2] } },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 2. Monthly Chart (Stats) - Line Chart
    const ctxMonthly = document.getElementById('monthlyChart').getContext('2d');
    new Chart(ctxMonthly, {
        type: 'line',
        data: {
            labels: ['3월', '4월', '5월', '6월', '7월', '8월'],
            datasets: [{
                label: '월별 대출 추이',
                data: [450, 580, 620, 500, 480, 320], // Low in Aug vacation
                borderColor: '#05CD99',
                backgroundColor: 'rgba(5, 205, 153, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 3. KDC Chart (Stats) - Doughnut
    const ctxKDC = document.getElementById('kdcChart').getContext('2d');
    new Chart(ctxKDC, {
        type: 'doughnut',
        data: {
            labels: ['800 문학', '900 역사', '400 자연과학', '300 사회', '기타'],
            datasets: [{
                data: [55, 15, 12, 10, 8],
                backgroundColor: ['#4318FF', '#05CD99', '#FFB547', '#FF9F43', '#E3E4E8'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    });

    /* --- Top Loan Table Injection --- */
    const topLoanData = [
        { rank: 1, title: '불편한 편의점', author: '김호연', pub: '나무옆의자', count: 42, status: 'available' },
        { rank: 2, title: '흔한남매 12', author: '흔한남매', pub: '미래엔', count: 38, status: 'borrowed' },
        { rank: 3, title: '이상한 과자 가게 전천당', author: '히로시마 레이코', pub: '길벗스쿨', count: 35, status: 'borrowed' },
        { rank: 4, title: '긴긴밤', author: '루리', pub: '문학동네', count: 30, status: 'available' },
        { rank: 5, title: '달러구트 꿈 백화점', author: '이미예', pub: '팩토리나인', count: 28, status: 'available' },
        { rank: 6, title: '고양이 해결사 깜냥', author: '홍민정', pub: '창비', count: 25, status: 'available' },
        { rank: 7, title: '만복이네 떡집', author: '김리리', pub: '비룡소', count: 22, status: 'borrowed' },
        { rank: 8, title: '오백 년째 열다섯', author: '김혜정', pub: '위즈덤하우스', count: 20, status: 'available' },
    ];

    const tableBody = document.getElementById('topLoanList');
    topLoanData.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${book.rank}</strong></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pub}</td>
            <td><strong>${book.count}회</strong></td>
            <td><span class="status-pill ${book.status}">${book.status === 'available' ? '대출가능' : '대출중'
            }</span></td>
        `;
        tableBody.appendChild(row);
    });
});
