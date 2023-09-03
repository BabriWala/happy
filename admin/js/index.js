// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$(document).ready(function(){
  const analyticsChart = document.getElementById('analyticsChart')
console.log(analyticsChart)
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
    cutout: 110,
    cutoutPercentage: 40,
  }
})
});

