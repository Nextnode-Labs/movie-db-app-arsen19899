import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import Button from './Button';
import {Form,Alert } from 'react-bootstrap';
import { Context } from '../context';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });

      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Form className="w-50 mx-auto shadow p-3 mb-5 bg-white rounded">
      {error && <Alert variant='danger'>There was an error!</Alert >}
      <Form.Group className="mb-3">
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type='text'
        value={username}
        name='username'
        onChange={handleInput}
      />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type='password'
        value={password}
        name='password'
        onChange={handleInput}
      />
      </Form.Group>
      <Button text='Login' callback={handleSubmit} />
    </Form>
  );
};

export default Login;
