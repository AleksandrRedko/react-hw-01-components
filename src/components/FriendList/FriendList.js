import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FreindList({ friends }) {
  return (
    <ul className={s.items}>
      {friends.map(item => {
        return (
          <li key={item.id} className={s.item}>
            <span
              className={s.status}
              style={{ backgroundColor: item.isOnline ? 'green' : 'red' }}
            >
              {item.isOnline}
            </span>
            <img
              className={s.avatar}
              src={item.avatar}
              alt={item.name}
              width="48"
            />
            <p className={s.name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

PropTypes.PropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FreindList;
