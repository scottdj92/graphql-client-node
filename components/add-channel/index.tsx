import * as React from "react";
import Input from "./input";
import Button from "./channel-button";
import gql from "graphql-tag";
import { graphql, ChildProps, MutationOpts } from "react-apollo";

interface IOwnState {
    value: string;
}

interface IMutateProps {
    name: string;
}

const mutate = gql`
    mutation addChannel($name: String!) {
        addChannel(name: $name) {
            id
            name
        }
    }
`;

class AddChannel extends React.Component<ChildProps<any, IMutateProps>, IOwnState> {
    constructor (props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    public render () {
        const { value } = this.state;
        return (
            <>
                <Input onChange={this.store} value={value} type="text"/>
                <Button onClick={this.update}>update me</Button>
            </>
        );
    }

    private store = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    }

    private update = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("clicked");
        const { value } = this.state;
        this.props.mutate({
            variables: { name: value },
        }).then( (response) => {
            console.log(response);
        }).catch( (error) => {
            console.log(error);
        });
    }
}

export default graphql(mutate)(AddChannel);
