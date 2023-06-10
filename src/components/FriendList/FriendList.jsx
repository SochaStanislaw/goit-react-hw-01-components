import PropTypes from 'prop-types';
import './FriendList.css'

function isFriendOnline(status) {
    if (status) {
        return '#1e9e05 1px solid'
    } else {
        return '#d20f0f 1px solid'
    }
};

const FriendList = ({ friends }) => {
    return (

<ul className="friendList">
  
{friends.map(friend => (

<li className="item" key={friend.id}
style={{border: isFriendOnline(friend.isOnline)}}
>
    {/* <span className="status">{friend.isOnline}</span> */}
    <img className="avatarFriend" src={friend.avatar} alt="User avatar" width="24" />
    <p className="nameFriend">{friend.name}</p>
</li>

))}

</ul>

    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendList