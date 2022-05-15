const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 0;
    break;
    case 'tuesday':
    return 0;
    break;
    case 'wednesday':
    return 10;
    break;
    case 'thursday':
    return 10;
    break;
    case 'friday':
    return 10;
    break;
    case 'saturday':
    return 10;
    break;
    case 'sunday':
    return 10;
    break;
  }
}

const getActualSleepHours = () => 
 getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest.');
  }

if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week.');
  }
}
calculateSleepDebt();
