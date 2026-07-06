import { Navigate, useLocation } from "react-router-dom";

/*
  Temporary authentication check.

  Later replace:
  const isAuthenticated = false;

  with Firebase, Supabase or your backend auth state.
*/

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  // TODO:
  // Replace with real authentication.
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  return children;
}