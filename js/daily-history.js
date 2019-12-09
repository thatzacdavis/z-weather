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
            axisX:{
                valueFormatString: "MMM YYYY",
            },
            data: [{        
                type: "line",
                markerType: "square",
		        xValueFormatString: "MMM YYYY",      
                dataPoints: [
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[0] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[1] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[2] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[3] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[4] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[5] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[6] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[7] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[8] },
                    { x: new Date(date.setFullYear(date.getFullYear() - 1)), y: temps[9] },
                ]
            }]
        });
        chart.render();
    }
};

getHistory(updateDOM);
