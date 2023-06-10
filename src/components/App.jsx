// IMPORTS:
// Task 1 Profile
import Profile from "./Profile/Profile";
import user from './Profile/user.json';
// Task 2 Statisitc
import Statistics from "./Statistics/Statistics";
import data from './Statistics/data.json';// Task 4
// Task 3 Frinds
import FriendList from './FriendList/FriendList'
import friends from './FriendList/friends.json';
// Task 4 Transactions
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        margin: 0,
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      {/* PROFILE HERE */}
      <Profile 
         name={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
      />
      {/* STATS HERE */}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      {/* FRINDS HERE */}
      <FriendList friends={friends} />
      {/* TRANSACTIONS HERE */}
      <TransactionHistory items={transactions} /> 
    </div>
  );
};
