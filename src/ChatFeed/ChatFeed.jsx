import React from 'react'

import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;


    const chat = chats && chats[activeChat];

  const renderReadRecipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={`read_${index}`}
        className='read-receipt'
        style={{
          float: isMyMessage ? 'right' : 'left',
          backgroundImage: person.person.avatar && `url(${person.person.avatar})`
          

        }}
      />
    ))

      
    }
    // console.log(chat, userName, messages)

    const renderMessages = () => {
      const keys = Object.keys(messages);
      
      console.log(keys)

        return keys.map((key,index) => {
          const message = messages[key];
          const lastMessageKey = index === 0 ? null : keys[index -1]
          const isMyMessage = userName === message.sender.username;

          console.log(message)


          return (
            <div key={`msg_${index}`} style={{ width: '100%' }}>
              <div className='message-block'>
                {
                  isMyMessage
                    ? <MyMessage message={message} />
                    : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                }

              </div>
              <div className="read-recipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                {renderReadRecipts(message, isMyMessage)}
              </div>
            </div>
          )
          

         


        })
    }
  
  if (!chat) return 'Loading....'
  return (
    <div className='chat-feed'>
      <div className="chat-title-container">
        <div className="chat-title">
          {chat?.title}
        </div>
        {/* <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div> */}
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      {/* form left */}
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
      
    </div>
  )
}

export default ChatFeed