import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "7936d890-9244-4296-92a8-c4cd0a1a1752", 'User-Name': username, 'User-Secret': password }
        
        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();

            
        } catch (error) {
            setError('Oops, incorrect Credentials')
            
            
        }

    }
  return (
      <div className='wrapper'>
          <div className="form">
              <h1 className='title'>
                  chat application
              </h1>
              <form action="" onSubmit={handleSubmit}>
                  <input type="text" name="" id="" value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='input'
                      placeholder='Username'
                      required
                  />
                  <input type="password" name="" id="" value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='input'
                      placeholder='Password'
                      required
                  />
                  <div  className='button'>
                    <button type="submit" className="button">
                        <span>Start chatting</span>
                    </button>
                  </div>
                  <h2 className='error'>{error}</h2>
              </form>
          </div>
      
    </div>
  )
}

export default LoginForm
