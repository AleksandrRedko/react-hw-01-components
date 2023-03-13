import PropTypes from 'prop-types';
import getRandomColor from './randomRGB';
import s from './Statistics.module.css';

const Statistics = function ({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statsList}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={s.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
