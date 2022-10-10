import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <th className={styles.tagHeader}>Type</th>
          <th className={styles.tagHeader}>Amount</th>
          <th className={styles.tagHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map(({ amount, currency, id, type }) => (
          <tr className={styles.tableRow} key={id}>
            <td className={styles.tableData}>{type}</td>
            <td className={styles.tableData}>{amount}</td>
            <td className={styles.tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionHistory;
