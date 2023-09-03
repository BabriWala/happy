$(document).ready(function(){
// Show the first tab and hide the rest
console.log($('#tabs-nav li:first-child').addClass('active'))
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  console.log(this)
  var activeTab = $(this).find('a').attr('href');
  // console.log(activeTab)
  $(activeTab).fadeIn();
  return false;
});


  const analyticsChart = document.getElementById('analyticsChart')
// console.log(analyticsChart)
const data = {
 
  datasets: [{
    label: 'My First Dataset',
    data: [100, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

new Chart(analyticsChart,{
  type: 'doughnut',
  data: data,
  options: {
    cutout: 80,
    cutoutPercentage: 40,
  }
})




const DATA_COUNT = 6;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 50, 30];
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: '#2563EB',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      // pointRadius: 0,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: 'yellow',
      pointHoverBorderWidth: 2
    }, 
  ]
};

const dashboardChart = document.getElementById('dashboard-chart')


new Chart(dashboardChart, {
  type: 'line',
  data: data2,
  options: {
    responsive: true,
    scaleLineColor: "rgba(0,0,0,0)",
    scales: {
      x: {
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
        display: true,
        title: {
          display: true
        },
        grid:{
          display: false
        }
        
      },
      y: {
        // beginAtZero: false,
        display: true,
        suggestedMin: '-10k',
        suggestedMax: '200k',
        
      },
    },
    plugins: {
      legend:{
        display: false
      }
    }
  },
}) 

});