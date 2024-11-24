"use client"
import apolloClient from "@config/apolloClient";
import { ApolloProvider }  from "@apollo/client"


export default function ApolloWrapper({children}:Readonly<{children: React.ReactNode}>){
    return(
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    )
}

