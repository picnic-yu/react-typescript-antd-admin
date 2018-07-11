

// import Layout from 'src/component/Layout';
// import Login from 'src/page/login';
import hello from 'src/page/hello';

// import table from 'src/page/table/table1';
import table2 from 'src/page/table/table2';
import table1 from 'src/page/table/table1';
// import Home from 'src/page/home';
import PopconfirmComponent from 'src/page/Popconfirm';                          // 气泡弹出框
import Transfer from 'src/page/Transfer';                                       // 穿梭框
import TimelineComponent from 'src/page/Timeline';                              // 时间轴
import CarouselComponent from 'src/page/Carousel';                              // 走马灯
import ListComponent from 'src/page/List';                                      // 基础列表
import LoadMoreList from 'src/page/List/LoadMoreList';   
export const  routerConfig = [

    {
        routes: [
            {
                icon:'mail',
                key:'table1',
                name:'table1',
                path:'/table/table333',
                component: table2,
            }
        ],
        component:table1,
        icon:'mail',
        key:'table',
        name:'table',
        path:'/table'
    },
    {
        component: hello,
        icon:'mail',
        key:'hello',
        name:'hello',
        path:'/hello'
    },
    {
        icon:'mail',
        key:'/Timeline',
        component: TimelineComponent,
        name:'时间轴管理',
        path:'/Timeline'
    },
    {
        icon:'mail',
        key:'/Carousel',
        name:'走马灯',
        component: CarouselComponent,
        path:'/Carousel'
    },
    {
        routes: [
            {
                icon:'mail',
                key:'Transfer',
                name:'穿梭框',
                component: Transfer,
                path:'/Transfer/Transfer'
            }
        ],
        icon:'mail',
        key:'/Transfer',
        name:'穿梭框管理',
        component:Transfer,
        path:'/Transfer'
    },
    {
        routes: [
            {
                icon:'mail',
                key:'basicList',
                name:'基础列表',
                component: ListComponent,
                // exact:true,
                path:'/list/basiclist'
            },
            {
                icon:'mail',
                key:'LoadMoreList',
                name:'加载更多列表',
                component: LoadMoreList,
                // exact:true,
                path:'/list/LoadMoreList'
            }
        ],
        icon:'mail',
        key:'list',
        // exact:true,
        name:'列表管理',
        component: ListComponent,
        path:'/list'
    },
    {
        routes: [
            {
                icon:'mail',
                key:'PopconfirmComponent',
                name:'气泡确认框',
                component: PopconfirmComponent,
                path:'/Popconfirm/PopconfirmComponent'
            },
        ],
        icon:'mail',
        key:'/Popconfirm',
        name:'气泡管理',
        path:'/Popconfirm',
        component: PopconfirmComponent,
    }
]
export const allRoutes = routerConfig.reduce((acc: any, cur: any) => {
    if (cur.routes) {
      return acc.concat(cur.routes);
    } else {
      return acc.concat(cur);
    }
}, []);
