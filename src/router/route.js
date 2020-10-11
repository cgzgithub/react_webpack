import React from 'react';
import {
    HomeOutlined,
    HighlightOutlined,
    BarsOutlined,
    MenuOutlined,
    QqOutlined,
    UsergroupDeleteOutlined,
    WechatOutlined, 
    AndroidOutlined,
    AreaChartOutlined,
    UnderlineOutlined,
    AppstoreOutlined,
    EditOutlined,
    AppstoreAddOutlined,
    DragOutlined,
    PlusSquareOutlined,
    OrderedListOutlined,
    ChromeFilled,
    BorderOuterOutlined,
    RedoOutlined,
    RedditOutlined,
    SplitCellsOutlined,
    ZoomInOutlined,
    DribbbleOutlined,
    BgColorsOutlined,
    FileImageOutlined
} from '@ant-design/icons';

const menuData = [
    {
        path:'/home',
        title:'首页',
        icon:<HomeOutlined />
    },
    {
        path:'/editer',
        title:'创建文章',
        icon:<EditOutlined />,
        children:[
            {
                path:'/editer/blog',
                title:'博客',
                cont:['创建文章','博客']
            },
            {
                path:'/editer/record',
                title:'随手记',
                cont:['创建文章','随手记']
            },
            {
                path:'/editer/article',
                title:'文学',
                cont:['创建文章','文学']
            }
        ]
    },
    {
        path:'/article',
        title:'我的文章',
        icon:<MenuOutlined />,
        children:[
            {
                path:'/article/allList',
                title:'所有文章',
                cont:['我的文章','所有']
            },
            {
                path:'/article/blogList',
                title:'博客',
                cont:['我的文章','博客']
            },
            {
                path:'/article/recordList',
                title:'随手记',
                cont:['我的文章','随手记']
            },
            {
                path:'/article/artilceList',
                title:'文学',
                cont:['我的文章','文学']
            }
        ]
    },
    {
        path:'/manager',
        title:'我的管理',
        icon:<SplitCellsOutlined />,
        children:[
            {
                path:'/manager/category',
                title:'分类管理',
                cont:['我的管理','分类管理']
            },
            {
                path:'/manager/label',
                title:'标签管理',
                cont:['我的管理','标签管理']
            },
            {
                path:'/manager/user',
                title:'用户管理',
                cont:['我的管理','用户管理']
            }
        ]
    }
]

export {menuData}