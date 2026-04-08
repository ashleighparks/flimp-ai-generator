'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push(redirect);
      router.refresh();
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setMessage('Check your email for a confirmation link.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#08212D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '0 20px',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #67E74E, #08212D)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#fff',
            }}>F</div>
            <span style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.5px',
            }}>Flimp AI Generator</span>
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '40px 32px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#08212D',
            marginBottom: '8px',
            textAlign: 'center',
          }}>
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            {mode === 'login'
              ? 'Sign in to access the microsite generator'
              : 'Get started with Flimp AI'}
          </p>

          {error && (
            <div style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#DC2626',
            }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#16A34A',
            }}>
              {message}
            </div>
          )}

          <form onSubmit={mode === 'login' ? handleLogin : handleSignup}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#333',
                marginBottom: '6px',
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid #d0dce8',
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#08212D',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#67E74E'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#d0dce8'}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#333',
                marginBottom: '6px',
              }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                minLength={6}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid #d0dce8',
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#08212D',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#67E74E'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#d0dce8'}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                background: loading ? '#999' : '#67E74E',
                color: '#08212D',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {loading
                ? 'Loading...'
                : mode === 'login'
                ? 'Sign In'
                : 'Create Account'}
            </button>
          </form>

          <div style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '13px',
            color: '#666',
          }}>
            {mode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => { setMode('signup'); setError(null); setMessage(null); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#67E74E',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => { setMode('login'); setError(null); setMessage(null); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#67E74E',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '24px',
        }}>
          Powered by Flimp Communications
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        background: '#08212D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}>Loading...</div>
    }>
      <LoginForm />
    </Suspense>
  );
}
