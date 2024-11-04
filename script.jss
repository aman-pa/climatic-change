// JavaScript to handle 3D-like data visualizations using Chart.js

// Temperature Increase Chart
const temperatureChartCtx = document.getElementById('temperatureChart').getContext('2d');
const temperatureChart = new Chart(temperatureChartCtx, {
    type: 'line',
    data: {
        labels: ["1900", "1920", "1940", "1960", "1980", "2000", "2020"],
        datasets: [{
            label: 'Global Temperature (°C)',
            data: [0.5, 0.6, 0.7, 0.8, 1.1, 1.5, 2.0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 4
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Sea Level Rise Chart
const seaLevelChartCtx = document.getElementById('seaLevelChart').getContext('2d');
const seaLevelChart = new Chart(seaLevelChartCtx, {
    type: 'bar',
    data: {
        labels: ["1900", "1950", "2000", "2050"],
        datasets: [{
            label: 'Sea Level Rise (cm)',
            data: [0, 10, 20, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 8
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});