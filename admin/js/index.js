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




const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: 'rgb(255, 99, 132)',
      fill: false
    }
  ]
};

const dashboardChart = document.getElementById('dashboard-chart')


new Chart(dashboardChart, {
  type: 'line',
  data: data2,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200
      }
    }
  },
}) 

});