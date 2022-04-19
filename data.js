import imgUrl from './images/B10523004.jpeg';

export default {
  profile: {
    name: '侯柏超',
    engName: 'Rick',
    imgUrl,
    email: 'hpx210650@gmail.com',
    github: {
      url: 'https://github.com/pock999',
      account: 'pock999',
    },
    medium: {
      url: 'https://medium.com/@rickh999',
      account: '@rickh999',
    },
  },
  about: `我是侯柏超，畢業於雲林科技大學資管系，個性為人和善，在團隊合作時，樂於分享想法和經驗提供團隊做參考；是一個喜歡串接API以實現畫面功能的軟體工程師，為了促使自己擁有更全面的思維，因此也使用後端開發過API。`,
  skills: [
    {
      icon: 'js',
      iconColor: '#E5AC1C',
      title: 'JavaScript',
      items: ['React', 'Redux', 'Vue', 'Webpack', 'ES6', 'Redux'],
    },
    {
      icon: 'nodejs',
      iconColor: '#689C63',
      title: 'Node.js',
      items: ['Express.js', 'Sails.js', 'Sequelize(ORM)'],
    },
    {
      icon: 'ellipsis',
      iconColor: '#3e9de6',
      title: 'Others',
      items: ['HTML5/CSS3', 'Bootstrap', 'Material-ui', 'Vuetify', 'Ant Design'],
    },
  ],
  educations: [
    {
      school: '國立雲林科技大學',
      major: '資訊管理系',
      period: '2016 9月 ~ 2020 6月',
    },
    {
      school: '國立鳳山商工',
      major: '國際貿易科',
      period: '2013 9月 ~ 2016 6月',
    },
  ],
};