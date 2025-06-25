import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].annualInvestment -
    resultsData[0].interest; // Initial investment is the value at the end of the first year minus the annual investment and interest earned in that year

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            initialInvestment -
            yearData.annualInvestment * yearData.year; // Total interest is the value at the end of the year minus the initial investment and all annual investments made up to that year
          // The total interest is calculated by subtracting the initial investment and the total of all annual

          const investedCapital = yearData.valueEndOfYear - totalInterest; // Total invested capital is the value at the end of the year minus total interest earned

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
