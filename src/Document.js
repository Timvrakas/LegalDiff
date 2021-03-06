import React from 'react';
import './Document.css';

class Document extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        };
    }

    updateMarkdown(url) {
        var self = this;
        fetch(url)
            .then(function (response) {
                return response.text();
            //})
            //.then(function (text) {
            //    return marked(text, { sanitize: true });
            }).then(function (doc) {
                self.setState({ data: { __html: doc } });
            });
    }

    render() {
        return <div className="md-doc" dangerouslySetInnerHTML={this.state.data} />
    }

}

export default Document;