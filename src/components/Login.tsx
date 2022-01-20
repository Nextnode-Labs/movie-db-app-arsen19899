import { useNavigate } from 'react-router-dom'
import API from '../API'
import Button from './Button';
import {Form,Alert } from 'react-bootstrap';
import { Context } from '../context'
import { useContext, useState} from 'react'


const Login: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [_user, setuser ]: any = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError(false)
    setLoading(true)
    try {
      const requestToken = await API.getRequestToken()
      const session = await API.authenticate(requestToken, userName, password)
      const account = await API.getAccountDetails(session.session_id)
      setuser({
        sessionId: session.session_id,
        userName: account.username,
        accountId: account.id,
      })
      navigate('/')
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    if (name === 'username') setUserName(value)
    if (name === 'password') setPassword(value)
  }



  return (
      <Form className="w-50 mx-auto shadow p-3 mb-5 bg-white rounded">
        {error && <Alert variant='danger'>There was an error!</Alert >}
        <Form.Group className="mb-3">
          <span className="col-4 mx-auto p-3 mb-5">Username:</span>
      <input
        type="text"
        value={userName}
        name="username"
        onChange={handleInput}
        className="col-8 mx-auto shadow p-3 mb-5 bg-white rounded"
      />
        </Form.Group>
        <Form.Group className="mb-3">
          <span className="col-4 mx-auto p-3 mb-5">Password:</span>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
        className="col-8 mx-auto shadow p-3 mb-5 bg-white rounded"
      />
        </Form.Group>
      <Button text="Login" loading={loading} callback={handleSubmit} />
    </Form>
  )
}

export default Login
