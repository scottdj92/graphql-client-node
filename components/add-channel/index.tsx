import * as React from "react";
import Input from "./input";
import Button from "./channel-button";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

interface IOwnState {
    value: string;
}

class AddChannel extends React.Component<{}, IOwnState> {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    public render () {
        const { value } = this.state;
        return (
            <>
                <Input onChange={this.store} value={value} type="text"/>
                <Button onClick={this.update}>update me bitch</Button>
            </>
        );
    }

    private store = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    }

    private update = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("clicked");
        const { value } = this.state;
        const mutate = gql`
            addChannel(name: ${value})
        `;
    }
}

export default graphql(mutate)(AddChannel);
