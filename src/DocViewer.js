import React from 'react';
import Select from 'react-select'
import Document from './Document'
import GitHub from 'github-api';
import * as Promise from "bluebird";

class DocViewer extends React.Component {
    constructor(props) {
        super(props)
        this.changeDoc = this.changeDoc.bind(this)
        this._child = React.createRef();
        this.state = {
            docs: null
        };
    }

    componentDidMount() {
        var self = this;
        const gh = new GitHub({ username: 'TIMVRAKAS', token: '496052d84361126df057edb22030a0d2c227b6c5' });
        let repo = gh.getRepo('Timvrakas', 'ASSU-LegalDiff');

        var list = repo.getContents('master', 'info.json', 'false')
            .then(function (info) {
                self.setState({ docs: info.data.docs });
                return info.data.docs;
            });

        var result = Promise.map(list, function (element) {
            return repo.getContents('master', element.path, false)
                .then(function (info) {
                    element['url'] = info.data.download_url;

                    return element;
                });
        });

        result.reduce(function (total, doc) {
            return total.concat(doc);
        }, []).then(function (all) {
            self.setState({ docs: all });
            self._child.current.updateMarkdown(all[0].url);
        })
    }

    changeDoc(newDoc) {
        this._child.current.updateMarkdown(newDoc.url);
    }

    render() {
        return (
            <header className="DocViewer">
                <div className="row">
                    <Select
                    options={this.state.docs}
                    getOptionLabel={function (doc) { return doc.name }}
                    onChange={this.changeDoc}
                    />
                </div>
                <Document ref={this._child} />
            </header>
        );
    }
}

export default DocViewer;