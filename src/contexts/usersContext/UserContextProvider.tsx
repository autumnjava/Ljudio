import { createContext, useState } from 'react';

type Props = {
  children?: JSX.Element
}

type User = {
  email: string,
  password: string,
  username: string
}

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: Props) => {

  const registerUser = async (user: User) => {
  const requestBody = {
    query: `mutation {
      createUser(input: {email: "${user.email}", password: "${user.password}", username: "${user.username}"})
      {
        _id
        email
        username
      }
    }`
  }

  // this can be replaced with AXIOS, which one is better?
  fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.status !== 200 && res.status !== 201){
      throw new Error('Failed')
    }
    return res.json();
  })
  .then(resData => {
    console.log(resData)
  })
  .catch(err => {
    console.log(err)
  });
  }

  const values = {
    registerUser
  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}