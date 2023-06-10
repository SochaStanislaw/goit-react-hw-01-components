import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({ title, stats }) => {
    return (
<section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="statList">

        {stats.map(item => (
            <li 
            className='listWrap'
            key={item.id}
            >
                <span className="labelStats">{item.label}</span>
                <span className="percentage">{item.percentage}</span>
            </li>
        ))}
        
    </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statistics