import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.name = user.name;
                token.email = user.email;  // Armazena o email no token JWT
            }
            if (account) {
                token.accessToken = account.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email;  // Adiciona o email do token à sessão
            }
            session.expires = token.sub ?? '';

            return session;
        }
    }
})

export { handler as GET, handler as POST }
