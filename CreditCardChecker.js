// Arrays containing valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Arrays containing invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Arrays that can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array containing all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Function to validate a credit card number through the use of the Luhn algorithm
const validateCred = (cardArray) => {
  // Copy the array to avoid modifying the original
  const digits = cardArray.slice();

  let sum = 0;
  let isSecondDigit = false;

  // Iterate through the digits in reverse order
  for (let i = digits.length - 1; i >= 0; i--) {
    // Double every second digit
    if (isSecondDigit) {
      let doubledDigit = digits[i] * 2;
      // If doubling results in a two-digit number, subtract 9
      if (doubledDigit > 9) {
        doubledDigit -= 9;
      }
      digits[i] = doubledDigit;
    }
    // Add the digit to the sum
    sum += digits[i];
    // Toggles isSecondDigit to indicate whether the next digit should be doubled or not
    isSecondDigit = !isSecondDigit;
  }
  // If the sum is divisible by 10, the card number is valid
  return sum % 10 === 0;
};

// Function to find invalid credit card numbers in a batch
const findInvalidCreditCards = (nestedArr) => {
  let invalidCards = [];
  // Iterate through each card number
  for (let i = 0; i < nestedArr.length; i++) {
    // If the card number is invalid, add it to the list
    if (!validateCred(nestedArr[i])) {
      invalidCards.push(nestedArr[i]);
    }
  }
  return invalidCards;
};

// Log the invalid credit card numbers in the batch
console.log(findInvalidCreditCards(batch));

// Function to identify the companies of invalid credit cards
const idInvalidCardCompanies = (nestedArr) => {
  let invalidCardCompanies = [];
  // Iterate through each card number
  for (let i = 0; i < nestedArr.length; i++) {
    // Extract the first digit of the card number
    let firstDigit = nestedArr[i][0];
    let company;
    // Determine the company based on the first digit
    switch (firstDigit) {
      case 3:
        company = "Amex (American Express)";
        break;
      case 4:
        company = "Visa";
        break;
      case 5:
        company = "Mastercard";
        break;
      case 6:
        company = "Discover";
        break;
      default:
        company = "Company not found";
    }
    // Add the company to the list if not already included
    if (!invalidCardCompanies.includes(company)) {
      invalidCardCompanies.push(company);
    }
  }
  return invalidCardCompanies;
};

// Log the companies associated with invalid credit cards
console.log(idInvalidCardCompanies(batch));
