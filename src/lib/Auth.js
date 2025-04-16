
import  supabase  from './supabase'

export async function signUp(email, password, username = '') {
    const { data, error } = await supabase.auth.signUp({ email, password })
  
    if (error) throw error
  
    if (data?.user) {
      const displayName = username || email.split('@')[0]
  
      // Insert user info into 'users' table
      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: data.user.id,
            email: email,
            username: displayName
          }
        ])
  
      if (profileError) {
        console.error('Error saving to users table:', profileError)
      }
    }
  
    return data
  }

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

// lib/auth.js


export async function signOut() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error signing out:', error.message)
    throw error
  }

  console.log('User signed out successfully')
}
