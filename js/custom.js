var xmlhttp = new XMLHttpRequest();
var url = "jsonData.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){

     var data = JSON.parse(this.responseText);
     console.log(data);
     var yAxis = data.ChartLine_Example.map(function(elem) {
     return elem.y;

     });
     var LabelsAxis = data.ChartLine_Example.map(function(elem) {
     return elem.label;

     });


var ctx = document.getElementById('line-chartcanvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: LabelsAxis,
        datasets: [{
            label: 'Daily count reset every day at midnight',
            data: yAxis,
            backgroundColor: 'transparent',
            borderColor: 
                'red',
            borderWidth: 3
//        },
//        {
 //           label: 'Another value',
   //         data: [12, 19, 3, 5, 2, 3],
   //         backgroundColor: 'transparent',
   //         borderColor: 
   //             'green',
   //         borderWidth: 3
        }]
    },
    options: {
        elements:{
          line:{
            tension:0
          }
        },
        //scales: {
           // y: {
                //beginAtZero: true
            //}
        //}
        scales: {
          yAxes:[{
          scaleLabel: {
              display: true,
              labelString: "MAC address count"
          }
      }],
          xAxes:[{
          scaleLabel: {
              display: true,
              labelString: "Test"
          }
      }]



    }
}
});



var option = {
  title: {
    display: true,
  },
  scales: {
    yAxes: [{
      scaleLabel: {
          display: true,
          labelString: "subtitle",
          fontStyle: 'italic'
      }
    },{
    	display: true,
      gridLines: {display: false,color: 'transparent'},
      ticks: {display: false},
      scaleLabel: {
          display: true,
          labelString: "My Chart title",
          fontStyle: 'bold',
          fontSize: 14
      }
    }]
  }
};

var myLineChart = Chart.Line('myChart', {
  data: data,
  options: option
});
//console.log(yAxis)

}


}


