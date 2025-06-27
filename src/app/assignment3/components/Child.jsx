"use client"

import { useAuth } from "../contexts/AuthContext"

export default function Child() {

  const { isLoggedIn, login, logout} = useAuth();

  return (
      <>
            <div>
              <h3>👶 Child Component</h3>
              <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
              <button onClick={isLoggedIn ? logout : login}>
                  {isLoggedIn ? 'Logout' : 'Login'}
              </button>
          </div>
      </>
  )
}