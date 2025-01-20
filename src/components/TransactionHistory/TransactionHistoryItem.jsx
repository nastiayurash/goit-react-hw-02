import styles from "./TransactionHistory.module.css";
const TransactionHistoryItem = ({ type, amount, currency }) => {
     let rowClass;
  switch (type) {
    case "Payment":
      rowClass = styles.payment;
      break;
    case "Deposit":
      rowClass = styles.deposit;
      break;
    case "Withdrawal":
      rowClass = styles.withdrawal;
      break;
    case "Invoice":
      rowClass = styles.invoice;
      break;
    default:
      rowClass = styles.other;
      break;
  }
  return (
    <tr  className={rowClass}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
