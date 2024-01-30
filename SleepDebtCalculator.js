const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6.5;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 7.5;
      break;
    default:
      console.log('Please provide a day as input.');
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You achieved the perfect amount of sleep this week!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Congratulations! You have exceeded your ideal sleep hours by ${actualSleepHours - idealSleepHours} hour(s)`);
  } else {
    console.log(`You should get more rest! It looks like you have a sleep debt of ${idealSleepHours - actualSleepHours} hour(s)`);
  }
}

calculateSleepDebt();
