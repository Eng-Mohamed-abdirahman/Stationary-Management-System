import { useState } from 'react'
import { signUp } from '../lib/Auth'
import { useNavigate, Link } from 'react-router'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsLoading(true)
    try {
      await signUp(email, password, username)
      setSuccess(true)
      setTimeout(() => navigate('/signin'), 3000)
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-lg shadow-md p-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
          <p className="text-gray-600">Please check your email to verify your account.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-600 mt-1">Join us and start your journey!</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <InputField label="Email Address" type="email" value={email} onChange={setEmail} />
            <InputField label="Username" type="text" value={username} onChange={setUsername} />
            <InputField label="Password" type="password" value={password} onChange={setPassword} minLength={6} />
            <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={setConfirmPassword} />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/signin" className="text-orange-600 hover:text-orange-800 font-semibold">
              Sign in
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
