'use server'
import { signInFormSchema } from "../validators";
import {signIn, signOut} from '@/auth';
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { success } from "zod";


export async function signInWithCredentials(prevState:unknown, formData:FormData){
    try{
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        })

        await signIn('credentials',user);

        return{success:true, message: 'Signed in successfully'}
    }catch(error){
        if(isRedirectError(error)) {
            throw error;
        }
        return { success:false, message: 'Invalid email or papssword'}
    }
}