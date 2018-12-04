import { auth, provider } from './firebase';

// Sign Out function
export const doSignOut = () => auth.signOut();


// Sign in Google
export const doSignInWithGoogle = () => {
    auth.signInWithRedirect(provider)
};