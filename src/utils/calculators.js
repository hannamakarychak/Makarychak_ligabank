const MIN_INCOME_SHARE = 0.45;

const HIGH_INTEREST_RATE_MORTGAGE = 9.4;
const LOW_INTEREST_RATE_MORTGAGE = 8.5;
const PARENT_CAPITAL = 470000;

const MIN_LOAN_FOR_LOW_INTEREST_RATE = 2000000;
const HIGH_INTEREST_RATE_CAR_LOAN = 16;
const LOW_INTEREST_RATE_CAR_LOAN = 15;
const INTEREST_RATE_ONE_ADDON = 8.5;
const INTEREST_RATE_TWO_ADDONS = 3.5;

function calculateMonthlyPayment(total, interestRate, loanPeriod) {
  const periodInMonths = loanPeriod * 12;
  const monthlyInterestRate = interestRate / 100 / 12;

  return Math.round(
    total *
      (monthlyInterestRate +
        monthlyInterestRate / ((1 + monthlyInterestRate) ** periodInMonths - 1))
  );
}

export function getMinIncome(monthlyPayment) {
  return Math.round(monthlyPayment / MIN_INCOME_SHARE);
}

export function calculateMortgage(
  price,
  initialPayment,
  initialPaymentPercentage,
  isParentCapitalUsed,
  loanPeriod
) {
  const interestRate =
    initialPaymentPercentage < 15 ? HIGH_INTEREST_RATE_MORTGAGE : LOW_INTEREST_RATE_MORTGAGE;

  const totalLoan = isParentCapitalUsed
    ? price - initialPayment - PARENT_CAPITAL
    : price - initialPayment;

  const annuityMonthlyPayment = calculateMonthlyPayment(totalLoan, interestRate, loanPeriod);

  return {
    interestRate,
    totalLoan,
    annuityMonthlyPayment,
  };
}

export function calculateCarLoan(price, initialPayment, withCasco, withInsurance, loanPeriod) {
  let interestRate =
    price < MIN_LOAN_FOR_LOW_INTEREST_RATE
      ? HIGH_INTEREST_RATE_CAR_LOAN
      : LOW_INTEREST_RATE_CAR_LOAN;

  if (withCasco || withInsurance) {
    interestRate = INTEREST_RATE_ONE_ADDON;
  }

  if (withCasco && withInsurance) {
    interestRate = INTEREST_RATE_TWO_ADDONS;
  }

  const totalLoan = price - initialPayment;

  const annuityMonthlyPayment = calculateMonthlyPayment(totalLoan, interestRate, loanPeriod);

  return {
    interestRate,
    totalLoan,
    annuityMonthlyPayment,
  };
}
