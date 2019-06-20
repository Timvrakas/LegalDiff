import React from 'react';
import Document from './Document'
import DocSelector from './DocSelector';

class DocViewer extends React.Component {
    constructor(props) {
        super(props)
        this.onURL = this.onURL.bind(this)
        this._doc = React.createRef();

    }

    onURL(newURL) {
        this._doc.current.updateMarkdown(newURL);
    }

    render() {
        return (
            <header className="DocViewer">
                <DocSelector repo={this.props.repo} onURL={this.onURL} />
                <Document ref={this._doc} />
            </header>
        );
    }
}

export default DocViewer;