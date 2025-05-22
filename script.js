// Asegúrate de cargar Chart.js desde Settings > JavaScript:
// https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js

function setupCharts() {
    const dataSupervisores = {
        labels: [
            "Claudio Grillo", "Gustavo De Sousa", "Gabriel Kleist",
            "Gerardo Niko", "Roxana Otero", "Guillermo Petrini",
            "Oscar Trejo", "Martin Vera", "Pablo Sauerlaender", "Patricia Benitez"
        ],
        values: [632, 624, 543, 477, 339, 271, 252, 237, 169, 141]
    };

    const dataActividades = {
        labels: [
            "Gestión de Negocio - Autoserv.",
            "Supervisión de PDV",
            "Superv. PDV - Dia/Express",
            "Gestión de Negocio",
            "Levantamiento Prospectos"
        ],
        values: [1389, 740, 404, 388, 350]
    };

    const dataTendencia = {
        labels: ["04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28", "04-29", "04-30"],
        values: [479, 811, 411, 293, 367, 1, 0, 602, 780, 467]
    };

    const dataOportunidades = {
        labels: ["Nombre de Fantasía", "Nombre del Titular", "Dirección", "Provincia", "Frecuencia de Entrega"],
        values: [88, 88, 88, 88, 41]
    };

    const colorsBimbo = ['#004b8d', '#0073b0', '#009fdf', '#76b82a', '#ffd200'];

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: { size: 14 },
                bodyFont: { size: 13 },
                padding: 12,
                cornerRadius: 5
            }
        }
    };

    // Supervisores
    const ctxSupervisores = document.getElementById('supervisoresChart');
    if (ctxSupervisores) {
        new Chart(ctxSupervisores, {
            type: 'bar',
            data: {
                labels: dataSupervisores.labels,
                datasets: [{
                    label: 'Visitas',
                    data: dataSupervisores.values,
                    backgroundColor: '#004b8d',
                    barThickness: 20,
                    borderRadius: 3
                }]
            },
            options: {
                ...commonOptions,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { font: { size: 11 } }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }

    // Actividades
    const ctxActividades = document.getElementById('actividadesChart');
    if (ctxActividades) {
        new Chart(ctxActividades, {
            type: 'bar',
            data: {
                labels: dataActividades.labels,
                datasets: [{
                    label: 'Cantidad',
                    data: dataActividades.values,
                    backgroundColor: '#76b82a',
                    barThickness: 30,
                    borderRadius: 3
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { font: { size: 11 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45,
                            font: { size: 11 }
                        }
                    }
                }
            }
        });
    }

    // Tendencia
    const ctxTendencia = document.getElementById('tendenciaChart');
    if (ctxTendencia) {
        new Chart(ctxTendencia, {
            type: 'line',
            data: {
                labels: dataTendencia.labels,
                datasets: [{
                    label: 'Visitas',
                    data: dataTendencia.values,
                    borderColor: '#009fdf',
                    backgroundColor: 'rgba(0, 159, 223, 0.1)',
                    tension: 0.2,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { font: { size: 11 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 } }
                    }
                }
            }
        });
    }

    // Oportunidades
    const ctxOportunidades = document.getElementById('oportunidadesChart');
    if (ctxOportunidades) {
        new Chart(ctxOportunidades, {
            type: 'pie',
            data: {
                labels: dataOportunidades.labels,
                datasets: [{
                    data: dataOportunidades.values,
                    backgroundColor: colorsBimbo,
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 20,
                        bottom: 20,
                        left: 20,
                        right: 20
                    }
                },
                cutout: '30%',
                radius: '80%'
            }
        });
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', setupCharts);
