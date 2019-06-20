import React from 'react';
import DiffDocument from './DiffDocument'
import DocSelector from './DocSelector';

class DiffViewer extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeBase = this.onChangeBase.bind(this)
        this.onChangeDiff = this.onChangeDiff.bind(this)
        this._diff = React.createRef();

        this.urls = [null,null];
    }

    onChangeBase(newBaseURL) {
        this.urls[0] = newBaseURL;
        this.updateDiff();
    }

    onChangeDiff(newDiffURL) {
        this.urls[1] = newDiffURL;
        this.updateDiff();
    }

    updateDiff(){
        if(this.urls[0] && this.urls[1]){
            this._diff.current.updateMarkdown(this.urls);
        }
    }

    render() {
        return (
            <header className="DiffViewer">
                Document 1:
                <DocSelector repo={this.props.repo} onURL={this.onChangeBase} />
                Document 2:
                <DocSelector repo={this.props.repo} onURL={this.onChangeDiff} />
                <DiffDocument ref={this._diff} />
            </header>
        );
    }
}

export default DiffViewer;