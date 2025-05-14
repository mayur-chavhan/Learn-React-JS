import { Friend } from "./Friend";

export function FriendList({ friends, onHandleSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onHandleSelected={onHandleSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
