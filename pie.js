let traffic, lead;
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#080808';
$.getJSON("/chartPie", (chartPie)=>{
    if(chartPie.traffic){
        tanggal = chartPie.traffic;
        revenue = chartPie.lead;
        myLineChart.update();
    }else {
        tanggal = [`${new Date().toLocaleDateString('en-US', {year:'numeric',month:'2-digit',day:'2-digit'})}`];
        revenue = [0];
        myLineChart.update();
    }
})
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: traffic,
    datasets: [{
      data: lead,
      backgroundColor: ['#d6261a', '#0e1111'],
      hoverBackgroundColor: ['#d6261a', '#0e1111'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#0d0d0e",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});