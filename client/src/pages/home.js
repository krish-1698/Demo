import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email, setLoggedIn,setEmail } = props  //email,loggedIn
  const navigate = useNavigate()
  const onButtonClick = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
        //   value={loggedIn ? 'Log out' : 'Log in'}
          value={'Log out'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home