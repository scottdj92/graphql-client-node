import * as React from "react";
import { graphql, OptionProps } from "react-apollo";
import ChannelItem from "./channel-item";
import gql from "graphql-tag";

const ChannelsList: React.SFC<OptionProps<{}, any>> = (props) => {
    console.log(props.data);
    const { channels, error, loading } = props.data;
    if (error) {
        return <h1>{error.message}</h1>
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <ul>
            {
                channels.map( (channel) => {
                    return (
                        <ChannelItem key={channel.id}>{channel.name}</ChannelItem>
                    )
                })
            }
        </ul>
    );
};

const query = gql`
    query {
        channels {
            id
            name
        }
    }
`;

export default graphql(query)(ChannelsList);


