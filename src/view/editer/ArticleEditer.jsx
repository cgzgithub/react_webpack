import React,{Fragment} from 'react';
import '../../markdown.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import E from 'wangeditor'
import { Card } from 'antd';


export default class ArticleEditer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editorContent:`<h3><a id="1HTTP_0"></a>1、减少HTTP请求次数</h3>
            <ul>
            <li>使用缓存，不经常变更的数据可以放在缓存里。</li>
            <li>内容懒加载，按需加载，例如页面需要加载内容很多时，首次只加载可视区域数据，滚动鼠标再加载剩下内容。</li>
            <li>资源合并压缩</li>
            </ul>
            <h3><a id="2_4"></a>2、使用骨架屏</h3>
            <p>在页面内容还未加载出来的时候，显示骨架内容，优化用户体验。</p>
            <h3><a id="3cssjswebpack_gulp_6"></a>3、尽可能合并和压缩css和js文件，使用打包工具webpack gulp等。</h3>
            <h3><a id="4SVG_7"></a>4、尽量使用字体图标或SVG矢量图代替图片。</h3>
            <p>矢量图是代码编写出来的，方向大小不会变形，且渲染速度快。</p>
            <h3><a id="5cssjs_9"></a>5、优先使用css写动画效果，次而选择js做动画效果，尽量减少使用第三方库。</h3>
            <h3><a id="6cookiecookie_10"></a>6、减少cookie的使用，cookie会在客户端和服务端传递。</h3>
            <h3><a id="7iframe_11"></a>7、避免或减少使用iframe。</h3>
            <h3><a id="8cssheadjs_12"></a>8、将css放在head中，外部js脚本放在底部执行。</h3>
            <p>js在加载外部脚本时会阻塞其他资源加载，因此可以放在页面底部执行。</p>
            <h3><a id="9_14"></a>9、代码优化</h3>
            <ul>
            <li>js代码中尽量减少闭包的使用，因为闭包使用后所在的上下文不会被释放，保存在内存中。</li>
            <li>js代码避免嵌套循环和死循环。</li>
            <li>减少css表达式的使用。</li>
            <li>减少对DOM的操作，减少重绘与回流。</li>
            <li>js封装过程中尽量做到低耦合高内聚，减少页面冗余代码。</li>
            <li>css导入@import是同步导入，link是异步导入，依据情况选择导入方式。</li>
            <li>尽量减少使用递归，避免死递归。</li>
            <li>减少flash的使用。</li>
            </ul>
            <h3><a id="10vue_24"></a>10、针对vue项目的优化</h3>
            <p>vue使用了数据视图双向绑定和虚拟DOM技术，在操作DOM方面无需我们考虑效率问题。但我们仍可以从项目结构，首屏优化，webpack配置打包优化等方面来提升项目响应速度和用户体验。</p>
            <p><strong>代码层面优化：</strong></p>
            <ul>
            <li>v-for不和v-if同时使用，因为v-for比v-if优先级高，会在每一个渲染元素里使用条件判断，降低性能。必要时可以换成computed属性，或在外层套一层父元素使用v-if，里面使用v-for。</li>
            <li>v-for结合key使用，key使用唯一不变的字段值，例如id而不是index。</li>
            <li>路由懒加载,在对应路由被访问时才加载组件。</li>
            </ul>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> Home = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">'./home.vue'</span>);
            
            </code></div></pre>
            <ul>
            <li>v-if和v-show合理选择使用，v-if只有在条件为真时，才会渲染，v-show不管初始条件是否为真，总会被渲染，基于display：none属性进行切换。v-show用于非常频繁切换条件的场景，v-if适用于运行条件很少改变的场景。</li>
            <li>watch和computed合理选择使用，computed计算属性，有缓存，只有在它依赖的值变化时才会重新计算。watch适用于观察监听数据，数据变化后执行一些回调函数。在需要依赖其他数值进行计算时，使用computed，在需要数据变化时执行异步或开销较大的操作时使用watch。</li>
            <li>addEventListener事件的销毁，vue组件销毁时不会默认销毁addEventListener事件，因此在beforedestory里手动执行销毁事件的操作。</li>
            </ul>
            <pre><div class="hljs"><code class="lang-javascript">
            created() {
              addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.clickHandler)
            },
            beforeDestroy() {
              removeEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.clickHandler)
            }
            
            </code></div></pre>
            <ul>
            <li>图片资源懒加载，对暂时没有出现在视图里的图片使用懒加载，例如vue-lazyload插件。</li>
            </ul>
            <pre><div class="hljs"><code class="lang-javascript">
            <span class="hljs-comment">// 安装并导入插件</span>
            npm install vue-lazyload
            <span class="hljs-keyword">import</span> VueLazyload <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-lazyload'</span>
            <span class="hljs-comment">// 使用插件</span>
            Vue.use(VueLazyload)
            <span class="hljs-comment">// 页面中图片使用懒加载</span>
            &lt;img v-lazy=<span class="hljs-string">"/static/1.png"</span>&gt;
            
            </code></div></pre>
            <ul>
            <li>
            <p>第三方插件按需引入，例如一些ui库，element-ui、iview等。使用babel-plugin-component可以只引入需要的组件，以达到减小体积的目的。</p>
            </li>
            <li>
            <p>合理使用keep-alive组件缓存组件状态，一些不常变更数据和状态的组件，可以使用keep-alive组件包裹，它会把组件保存在浏览器内存中，方便快速切换。</p>
            </li>
            <li>
            <p>使用服务端渲染，获得更好地seo。</p>
            </li>
            </ul>
            <p><strong>webpack层面的优化：</strong></p>
            <ul>
            <li>webpack.base.conf.js中使用url-loader设置limit对图片进行处理，小于limit尺寸的图片转化为base64格式，其余的不作操作。对于大于limit的一些较大的图片资源，可以使用image-webpack-loader来压缩图片。</li>
            </ul>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// 安装</span>
            npm install image-webpack-loader --save-dev
            <span class="hljs-comment">// 配置</span>
            {
              <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.(png|jpe?g|gif|svg)(\?.*)?$/</span>,
              <span class="hljs-attr">use</span>:[
                {
                <span class="hljs-attr">loader</span>: <span class="hljs-string">'url-loader'</span>,
                <span class="hljs-attr">options</span>: {
                  <span class="hljs-attr">limit</span>: <span class="hljs-number">10000</span>,
                  <span class="hljs-attr">name</span>: utils.assetsPath(<span class="hljs-string">'img/[name].[hash:7].[ext]'</span>)
                  }
                },
                {
                  <span class="hljs-attr">loader</span>: <span class="hljs-string">'image-webpack-loader'</span>,
                  <span class="hljs-attr">options</span>: {
                    <span class="hljs-attr">bypassOnDebug</span>: <span class="hljs-literal">true</span>,
                  }
                }
              ]
            }
            
            </code></div></pre>
            <ul>
            <li>减少ES6转为ES5的冗余代码，使用babel-plugin-transform-runtime</li>
            </ul>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// 安装</span>
            npm install babel-plugin-transform-runtime --save-dev
            <span class="hljs-comment">// .babelrc配置</span>
            <span class="hljs-string">"plugins"</span>: [
                <span class="hljs-string">"transform-runtime"</span>
            ]
            
            </code></div></pre>
            <ul>
            <li>
            <p>提取组件的css,把所有组件内的css提取到一个文件里，避免无样式内容闪烁。webpack + vue-loader，vue-cli脚手架已配置好。</p>
            </li>
            <li>
            <p>提取公共代码，将多个页面的公共代码抽离成单独的文件，webpack内置了用于提取多个chunk中的公共部分的插件CommonsChunkPlugin</p>
            </li>
            <li>
            <p>优化SourceMap</p>
            </li>
            </ul>`
        }
        this.editer = null
    }
    componentDidMount(){
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        this.editor = new E(elemMenu, elemBody);
        this.editor.highlight = hljs
        this.editor.config.onchange = html => {
            console.log(html)
            this.setState({
                editorContent: this.editor.txt.html()
            })
        }
        this.editor.config.uploadImgShowBase64 = true
        this.editor.create()
        this.editor.txt.html(this.state.editorContent)
    }
    componentWillUnmount() {
        this.editor=null;
    }
    render() {
        return(
            <Fragment>
                <div>
                    创建内容
                </div>
                <Card title="富文本内容区">
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                            <div ref="editorElemMenu"></div>
                            <div className="markdown-body" style={{
                            minHeight: 400,
                            borderRight: "1px solid #ccc",
                        }} ref="editorElemBody"></div>
                        </div>
                        <div style={{paddingLeft:"10px"}}>
                            <div style={{fontWeight:'bold',paddingTop:"10px"}}>效果预览</div>
                            <div className="markdown-body"  dangerouslySetInnerHTML={{__html:this.state.editorContent}}></div>
                        </div>
                    </div>
                </Card>
            </Fragment>
        )
    }
}