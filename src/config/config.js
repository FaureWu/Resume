let config = {
  items: [
    {path: '/home', name: '主页'},
    {path: '/essay', name: '随笔'},
    {path: '/blog', name: '博客'},
    {path: '/game', name: '游戏'},
    {path: '/contact', name: '联系'}
  ],

  data: {
    home: [
      {
        skin: '',
        component: {
          type: 'basic',
          data: {
            name: '吴贵福',
            job: 'web前端工程师',
            birthday: '1991年05月30号',
            birthplace: '福建省泉州市南安市',
            workplace: '四川省成都市',
            tel: '134-0858-xxxx',
            email: '502556093@qq.com'
          }
        }
      },
      {
        skin: 'blue',
        component: {
          type: 'skill',
          data: [
            {
              name: 'HTML/CSS',
              percent: 65,
              decript: [
                '熟悉HTML、CSS，熟练掌握页面架构及布局，理解WEB相关标准及标签语义化，能够独立完成页面代码的编写',
                '掌握HTML5/CSS3新特性，能运用于新浏览器中展现效果更佳',
                '具备独立调试出兼容主流浏览器的页面的能力，具备chrome开发者工具，firebug等调试辅助工具使用'
              ]
            },
            {
              name: 'JS',
              percent: 80,
              decript: [
                '具备熟练使用原生JS编写页面的交互能力',
                '熟悉JS原型链继承方式，闭包的使用',
                '曾利用原生JS独立编写表格插件，增删改查，排序，筛选等功能'
              ]
            },
            {
              name: 'JQuery',
              percent: 50,
              decript: [
                '熟悉JQuery选择器，ajax请求',
                '熟悉JQuery extend插件编写'
              ]
            },
            {
              name: 'Reactjs',
              percent: 40,
              decript: [
                '掌握React框架的使用，能独立编写在此框架上的网页应用',
                '掌握JSX的使用，掌握git，grunt，webpack，yeoman等前端自动化工具',
                '了解React生命周期，虚拟DOM等'
              ]
            },
            {
              name: 'Angularjs/Nodejs',
              percent: 25,
              decript: [
                '了解Angularjs、Nodejs基本使用方式，曾独立编写过学习demo',
                '了解express，jade模板，less基本使用方式'
              ]
            },
            {
              name: 'DHTMLX/echart/jtopo/bootstrap',
              percent: 45,
              decript: [
                '熟悉DHTMLX grid，tree，chart等相关组件的使用，能快速建立页面',
                '掌握jtopo，可编写基于此插件的网络topo图',
                '了解echart、bootstrap，可应用于项目实际生产中使用'
              ]
            },
            {
              name: 'LAMP(Linux+Apache+Mysql+PHP)',
              percent: 35,
              decript: [
                '掌握PHP语法，具备独立编写能力，具备实际项目经验',
                '掌握yii/yii2框架的使用，具备实际项目经验',
                '掌握Mysql数据库，增删改查，数据库配置，数据分区，数据库维护，具备实际项目经验',
                '掌握linux shell脚本的编写，服务器日常安装，维护，能熟练使用linux大多数命令'
              ]
            }
          ]
        }
      },
      {
        skin: 'pink',
        component: {
          type: 'career',
          data: [
            {
              time: '2014-07',
              name: '西加云杉',
              logo: 'skspruce',
              job: 'web研发工程师',
              duty: '负责网络设备管理系统NMS，PHP数据接口开发，前端页面数据的展示，Mysql数据库的优化和维护，设备维护及相关设计文档的编写',
              achievement: '提出并实现大数据场景下数据的快速展现，实现了数据动态获取，在现有开源插件不支持的情况下独立扩展了第三方插件，提出Mysql分区方案，并解决该方案引发的相关问题，参与了数据升级功能设计和实现，完善现有页面，利用原生JS，独立编写了可复用的表格插件，包括增删改查等'
            },
            {
              time: '2016-06',
              name: '索贝数码',
              logo: 'sobey',
              job: 'web前端工程师',
              duty: '暂无',
              achievement: '暂无'
            }
          ]
        }
      },
      {
        skin: 'green',
        component: {
          type: 'demo',
          data: [

          ]
        }
      },
      {
        skin: 'yellow',
        component: {
          type: ''
        }
      },
      {
        skin: 'red',
        component: {
          type: ''
        }
      },
      {
        skin: 'white',
        component: {
          type: ''
        }
      }
    ]
  }
};
export default config;
