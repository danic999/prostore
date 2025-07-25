import { error } from 'console';
import NextAuth, { NextAuthConfig } from 'next-auth';
import {PrismaAdapter} from '@auth/prisma-adapter'
import {prisma} from '@/db/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge';
import { id } from 'zod/v4/locales';
export const config = {

    pages: {
        signIn:'/sign-in',
        error:'/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge:30*24*60*60
    },
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            credentials:{
                email: {type:'email'},
                password: {type:'password'}
            },
            async authorize(credentials){
                if(credentials==null) return null;

                const user = await prisma.user.findFirst({
                    where:{
                        email: credentials.email as string
                    }
                })

                if(user && user.password){
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if(isMatch){
                        return{
                            id:user.id,
                            name:user.name,
                            email:user.email,
                            role:user.role
                        }
                    }
                }
                return null;
            }
        })
    ],
    callbacks: {
        async session({session,user,trigger,token}:any){
            session.user.id = token.sub
            if(trigger === 'update'){
                session.user.name = user.name
            }

            return session
        }
    }
} satisfies NextAuthConfig
export const {handlers, auth, signIn, signOut} = NextAuth(config);