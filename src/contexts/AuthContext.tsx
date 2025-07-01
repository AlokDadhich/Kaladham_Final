import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  adminLogin: (email: string, password: string) => Promise<boolean>;
  adminLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Check if admin is logged in
    const adminData = localStorage.getItem('kaladham_admin');
    if (adminData) {
      setIsAdmin(true);
    }

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`
      }
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('authenticate_admin', {
        admin_email: email,
        admin_password: password
      });

      if (error) throw error;

      if (data.success) {
        localStorage.setItem('kaladham_admin', JSON.stringify(data.admin));
        setIsAdmin(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Admin login error:', error);
      return false;
    }
  };

  const adminLogout = () => {
    localStorage.removeItem('kaladham_admin');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signInWithGoogle,
      signOut,
      isAdmin,
      adminLogin,
      adminLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
};