import clientPromise from "@/libs/mongoConnet"
import mongoose from "mongoose";
import {User} from "@/app/models/User"
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
            username: { label: "Email", type: "email", placeholder: "example@gmail.com" },
            password: { label: "Password", type: "password", placeholder: "*******"}
            },

            async authorize(credentials, req) {
                // console.log({ credentials });
                const email = credentials?.email;
                const password = credentials?.password;

                mongoose.connect(process.env.MONGODB_URL);
                const user = await User.findOne({email});
                const passwordOk = user && bcrypt.compareSync(password, user.password);

                // console.log({passwordOk})

                if (passwordOk) {
                    return user;
                }

                return null
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}