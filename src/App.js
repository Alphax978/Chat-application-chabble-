import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from './ChatFeed/ChatFeed'
import LoginForm from './LoginForm'

function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="7936d890-9244-4296-92a8-c4cd0a1a1752"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

      
      
      
    />
      
      
      
  )
}

export default App
