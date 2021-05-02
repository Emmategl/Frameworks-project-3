import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface RouterProps { // type for `match.params`
    productId: string; // must be type `string` since value comes from the URL
    name: string;
}

interface TopicDetailProps extends RouteComponentProps<RouterProps> {
    // any other props (leave empty if none)
    name: string;
}

const TopicDetail: React.FC<TopicDetailProps> = ({ match }) => {
    return (
        <div>
            <h3>hello{ match.params.productId }</h3>
            <h3>hello{ match.params.name }</h3>
        </div>
    )
}

export default withRouter(TopicDetail);