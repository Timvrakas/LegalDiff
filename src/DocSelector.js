import React from 'react';
import Select from 'react-select'
import './DocSelector.css';

/*
DocSelector: Provides a teired selector interface and generates a URL based on a refspec and a file
*/

class DocSelector extends React.Component {
    constructor(props) {
        super(props)

        this.changeDoc = this.changeDoc.bind(this)
        this.changeBranch = this.changeBranch.bind(this)

        this.state = {
            branches: [],
            docs: []
        };

        this.doc = null;
        this.branch = 'master';
    }

    componentDidMount() {
        var self = this;

        this.props.repo.listBranches()
            .then(function (info) {
                self.setState({ branches: info.data });
            });
    }

    updateURL() {
        var self = this;

        if (this.branch && this.doc) {
            this.props.repo.getContents(this.branch.name, this.doc.path, false)
                .then(function (info) {
                    self.props.onURL(info.data.download_url);
                });
        }
    }

    changeDoc(newDoc) {
        this.doc = newDoc;
        this.updateURL();
    }

    changeBranch(newBranch) {
        var self = this;

        this.branch = newBranch;
        this.props.repo.getContents(this.branch.name, 'info.json', 'false')
            .then(function (info) {
                self.setState({ docs: info.data.docs }, self.updateURL);
            });
    }

    render() {
        return (
            <div className="doc-selector">
                <div className="refspec">
                    Branch:
                    <Select
                        options={this.state.branches}
                        getOptionLabel={function (branch) { return branch.name }}
                        onChange={this.changeBranch}
                    />
                </div>
                <div className="document">
                    Document:
                    <Select
                        options={this.state.docs}
                        getOptionLabel={function (doc) { return doc.name }}
                        onChange={this.changeDoc}
                    />
                </div>
            </div>
        );
    }
}

export default DocSelector;