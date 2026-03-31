import environment from "@/config/environment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  JWTExtend,
  SessionExtended,
  UserExtended,
} from "@/features/auth/types/Auth";
import authServices from "@/features/auth/services/auth";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        identifier: { label: "identifier", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined,
      ): Promise<UserExtended | null> {
        const { identifier, password } = credentials as {
          identifier: string;
          password: string;
        };

        const result = await authServices.login({
          identifier,
          password,
        });

        const accessToken = result.data.data;

        const me = await authServices.getProfileWithToken(accessToken);
        const user = me.data.data;
        if (
          accessToken &&
          result.status === 200 &&
          user._id &&
          me.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  debug: true,
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWTExtend;
      user: UserExtended | null;
    }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: SessionExtended;
      token: JWTExtend;
    }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },
});
