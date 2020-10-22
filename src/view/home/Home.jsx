import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import apis from '@/api/apis'


export default class Home extends React.Component{
    constructor() {
        super();
        this.state = {
          markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6',
        };
        this.updateMarkdown = this.updateMarkdown.bind(this);
    }
    updateMarkdown(editor, data, value) {
        console.log(editor,data,value)
        this.setState({ markdown: value });
    }
    componentDidMount(){
        console.log('apis>>>>>>>>>>>',apis)
        apis.getAllArticleList().then(res => {
            console.log(res)
        })
    }
    render() {
        return(
            <div>
            home page
            <MarkdownEditor
                value={this.state.markdown}
                onChange={this.updateMarkdown}
            />
        </div>
        )
    }
}