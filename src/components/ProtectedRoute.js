import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({children}) {
    const { currentUser } = useAuthContext()
    return currentUser ? children : <Navigate to="/" />;
}
