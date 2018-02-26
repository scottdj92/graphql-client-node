import * as React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink, createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ChannelsList from "../components/channels-list";
import AddChannel from "../components/add-channel";
import "cross-fetch/polyfill"

const MyPage: React.SFC = (props) => {
    const client = new ApolloClient({
        ssrMode: true,
        link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
        cache: new InMemoryCache(),
    })
    return (
        <>
            <ApolloProvider client={client}>
                <ChannelsList/>
            </ApolloProvider>
            <ApolloProvider client={client}>
                <AddChannel/>
            </ApolloProvider>
        </>
    );
};

export default MyPage;
