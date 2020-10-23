import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import apis from '@/api/apis';
import baseConfig from '@/api/baseConfig'


export default class Home extends React.Component{
    constructor(props) {
        super(props);
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
        // console.log('apis>>>>>>>>>>>',apis)
        // apis.getPublicArticleList().then(res => {
        //     console.log(res)
        // })
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