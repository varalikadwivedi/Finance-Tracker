import { SignedIn, SignedOut,SignUpButton, SignInButton,  } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
export const Auth=()=>{
    return (
    <div className='sign-in-container'>
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal"/>
        
      </SignedOut>
      <SignedIn>
        <Navigate to="/"/>
      </SignedIn>
      
    </div>)
}