document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('climateChart').getContext('2d');
    const climateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2024'],
            datasets: [{
                label: 'Global Temperature Rise (°C)',
                data: [0.32, 0.39, 0.55, 0.67, 0.85, 0.95],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });
});