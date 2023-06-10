import PropTypes from 'prop-types';
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (

<table className="transactionHistory">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{items.map(item => (

<tbody key={item.id}>
    <tr>
        <td className='tdType'>{item.type}</td>
        <td className='tdAmount'>{item.amount}</td>
        <td className='tdCurrency'>{item.currency}</td>
    </tr>
</tbody>

))}

</table>

    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionHistory