import { useState } from "react";
import "./App.css";
import { FriendList } from "./components/FriendList";
import { FriendForm } from "./components/FriendForm";
import { SplitBillForm } from "./components/SplitBillForm";
import { Button } from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // It add one friend data in the object
  const [friends, setFriends] = useState(initialFriends);

  // It shows add friend box with a form
  const [showAddFriend, setShowAddFriend] = useState(false);

  // It stores the list of friend data that is selected
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend() {
    setShowAddFriend(() => !showAddFriend);
  }

  function handleAddFriend(friends) {
    setFriends((friend) => [...friend, friends]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    // if friend is selected and id matched then set it to Null otherwise set it to friend list
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );

    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onHandleSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
