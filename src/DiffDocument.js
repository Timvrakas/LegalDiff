import React from 'react';
import marked from 'marked';
import HtmlDiff from 'htmldiff-js';
import * as Promise from "bluebird";
import './Document.css';

class DiffDocument extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        };
    }

    componentDidMount(){
        this.updateMarkdown(this.props.urls);
    }

    updateMarkdown(urls) {
        var self = this;
        Promise.map(urls, function (url) {
            return fetch(url)
                .then(function (response) {
                    return response.text();
                })
                .then(function (text) {
                    return marked(text, { sanitize: true });
                });
        }).then(function (pages) {
            var diff = HtmlDiff.execute(pages[0],pages[1]);
            self.setState({ data: { __html: diff } });
        });
    }

    render() {
        return <div className="md-doc" dangerouslySetInnerHTML={this.state.data} />
    }

}

export default DiffDocument;