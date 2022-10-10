import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li key={id} className={styles.item}>
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendList;
