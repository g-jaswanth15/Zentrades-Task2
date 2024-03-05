//Revenue By Job Type

let xValues = ["Alarm System", "Backflow Testing", "Diagnosis", "Fire Extinguisher", "pump" ];
let yValues = [29000,15500,6300,5900,1000];

let data={
    labels:xValues,
    datasets:[{
        data:yValues,
        backgroundColor : ["#ED5666"]
    }]
}

let config = {
    type:'bar',
    data,
    options:{
        indexAxis:'y',
        pointStyle: false,
        plugins:{
            legend: {
                display:false
            },
            title: {
                display: true,
                text: "Revenue for december 2023"
                }
        }
    }

}

let mychart=new Chart("Chart2",config)

//Revenue By Job Location

xValues = ["Social Circle", "Malibu", "Snohomish", "New York", "Everett" ,"Seattle","London"];
yValues = [16200, 12600, 6300, 5900,2700, 2200,1800];

data = {
    labels:xValues,
    datasets:[{
        data:yValues,
        backgroundColor:["#ED5666"]
    }]
}

 config = {
    type:'bar',
    data,
    options:{
        indexAxis:'y',
        pointStyle: false,
        plugins:{
            legend: {
                display:false
            },
            title: {
                display: true,
                text: "Revenue for december 2023"
                }
        }
    }
}

const myChart1 = new Chart("Chart1",config);