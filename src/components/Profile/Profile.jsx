import PropTypes from 'prop-types';
import "./Profile.css"

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
  <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="avatar"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

<div className='statsWrap'>
  <ul className="stats">
    <li className='statsList'>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className='statsList'>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className='statsList'>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile