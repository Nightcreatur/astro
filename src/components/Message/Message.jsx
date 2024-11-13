import React from 'react';
import './Message.css';
import ProfilePic from '../../assets/Picture1.jpg'

const matches = [
    { name: 'Diana', age: 19, image: ProfilePic },
    { name: 'Diana', age: 19, image: ProfilePic },
    { name: 'Diana', age: 19, image: ProfilePic },
    { name: 'Diana', age: 19, image: ProfilePic },
    { name: 'Diana', age: 19, image: ProfilePic },
];

const chats = [
    { name: 'Zack', age: 21, message: 'Lorem ipsum dolor sit amet', image: ProfilePic, online: true },
    { name: 'Sandy', age: 39, message: 'Lorem ipsum dolor sit amet', image: ProfilePic, online: true },
    { name: 'Ponkk', age: 29, message: 'Lorem ipsum dolor sit amet', image: ProfilePic, online: true },
    { name: 'Dna', age: 19, message: 'Lorem ipsum dolor sit amet', image: ProfilePic, online: true },
];

const Message = () => {
    return (
        <div className="chatLayout">
            <h2>Matches</h2>
            <div className="matches">
                {matches.map((match, index) => (
                    <div key={index} className="matchItem">
                        <img src={match.image} alt={`${match.name}`} className="matchImage" />
                        <p className="matchName">{match.name}</p>
                        <p className="matchAge">{match.age}</p>
                    </div>
                ))}
            </div>

            <div className="searchBar">
                <input type="text" placeholder="Search" />
                <i className="searchIcon">🔍</i>
            </div>

            <h2>Chat</h2>
            <div className="chatList">
                {chats.map((chat, index) => (
                    <div key={index} className="chatItem">
                        <img src={chat.image} alt={`${chat.name}`} className="chatImage" />
                        <div className="chatInfo">
                            <div className="chatHeader">
                                <p className="chatName">{`${chat.name}. ${chat.age}`}</p>
                                {chat.online && <span className="onlineIndicator">🔴</span>}
                            </div>
                            <p className="chatMessage">{chat.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Message;
