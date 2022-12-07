const header = document.getElementById('header-container') ;
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const EmergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3')
for (index = 0; index < EmergencyTasksHeaders.length; index += 1) {
    EmergencyTasksHeaders[index].style.backgroundColor = 'purple'
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
 noEmergencyTasks.style.backgroundColor = 'yellow'


const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}