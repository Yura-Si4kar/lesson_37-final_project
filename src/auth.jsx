import React, { useState, useEffect } from 'react';
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { app, googleAuthProvider } from './firebase';

export default function AuthProvider() {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser);
            }

            signInWithRedirect(auth, googleAuthProvider)
                .then(credentials => setUser(credentials.user))
                .catch((e) => console.log(e));
        });

        return unsubscribe;
    }, [auth])
    


    return user !== null ? <>{user.displayName}</> : <>loading...</>
}
