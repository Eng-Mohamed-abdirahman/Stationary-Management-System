import { useState } from 'react'
import { signIn } from '../lib/Auth'
import { useNavigate, Link } from 'react-router'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Failed to sign in. Check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 mt-1">Sign in to continue</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <InputField label="Email Address" type="email" value={email} onChange={setEmail} />
            <InputField label="Password" type="password" value={password} onChange={setPassword} minLength={6} />

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-orange-600 hover:text-orange-800 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function InputField({ label, type, value, onChange, minLength }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        minLength={minLength}
      />
    </div>
  )
}
