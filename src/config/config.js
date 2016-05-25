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
            tel: '134-0858-xxx',
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
                '熟练掌握响应式布局',
                '熟悉网页特效制作',
                'dfdsfdsddsfdsdf'
              ]
            },
            {
              name: 'JS',
              percent: 80,
              decript: [
                ''
              ]
            },
            {
              name: 'JQuery',
              percent: 50,
              decript: [
                ''
              ]
            },
            {
              name: 'Reactjs',
              percent: 40,
              decript: [
                ''
              ]
            },
            {
              name: 'Angularjs/Nodejs',
              percent: 25,
              decript: [
                ''
              ]
            }
          ]
        }
      },
      {
        skin: 'yellow',
        component: {
          type: 'career',
          data: [

          ]
        }
      },
      {
        skin: 'green',
        component: {
          type: ''
        }
      },
      {
        skin: 'pink',
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
