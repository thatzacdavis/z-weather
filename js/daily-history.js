import Project from './classes/project';
import { getHistory } from './api/forecast';

const project = new Project("z Weather");

const header = document.getElementById('header');
header.innerText = `What was ${project.name} for Philly?`;

const updateDOM = (temps) => {
    if(temps.length === 10) {
        let date = new Date();

        let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Historical Temperatures"
            },
            axisY:{
                includeZero: false
            },
            axisX: {
                labelFormatter: function (e) {
                    const newDate = new Date(e.value.getFullYear(), e.value.getMonth()-1, e.value.getDate());
                    return CanvasJS.formatDate( newDate, "MMM YYYY");
                },
            },
            data: [{        
                type: "line",
                markerType: "square",     
                dataPoints: [
                    { x: new Date(date.getFullYear(), date.getMonth(), date.getDate()), y: temps[0] },
                    { x: new Date(date.getFullYear() - 1, date.getMonth(), date.getDate()), y: temps[1] },
                    { x: new Date(date.getFullYear() - 2, date.getMonth(), date.getDate()), y: temps[2] },
                    { x: new Date(date.getFullYear() - 3, date.getMonth(), date.getDate()), y: temps[3] },
                    { x: new Date(date.getFullYear() - 4, date.getMonth(), date.getDate()), y: temps[4] },
                    { x: new Date(date.getFullYear() - 5, date.getMonth(), date.getDate()), y: temps[5] },
                    { x: new Date(date.getFullYear() - 6, date.getMonth(), date.getDate()), y: temps[6] },
                    { x: new Date(date.getFullYear() - 7, date.getMonth(), date.getDate()), y: temps[7] },
                    { x: new Date(date.getFullYear() - 8, date.getMonth(), date.getDate()), y: temps[8] },
                    { x: new Date(date.getFullYear() - 9, date.getMonth(), date.getDate()), y: temps[9] },
                ]
            }]
        });
        chart.render();
    }
};

getHistory(updateDOM);
