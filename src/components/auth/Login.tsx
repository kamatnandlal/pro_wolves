import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dog, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Dog className="h-12 w-12 text-purple-500" />
          </div>
          <h2 className="mt-6 text-3xl font-bold">Welcome back to W.O.L.V.E.S</h2>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email address"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-900 text-purple-500 focus:ring-purple-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-purple-500 hover:text-purple-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-500 hover:text-purple-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}