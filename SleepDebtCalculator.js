// Function to get the number of sleep hours for a given day
const getSleepHours = day => {
  // Switch statement to determine the sleep hours based on the input day
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

// Function to get the total actual sleep hours for the entire week
const getActualSleepHours = () => {
  return getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
}

// Function to get the ideal sleep hours for the entire week
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}

// Function to calculate sleep debt based on actual and ideal sleep hours
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

calculateSleepDebt(); // Call the function to calculate sleep debt
