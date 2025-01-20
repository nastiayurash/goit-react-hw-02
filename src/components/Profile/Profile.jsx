import styles from "./Profile.module.css"
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className ={styles.profile}>
      <div>
        <img className ={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Followers </span>
          <span className={styles.statsNumber}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Views </span>
          <span className={styles.statsNumber}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Likes </span>
          <span className={styles.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
