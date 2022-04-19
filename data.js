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
      items: ['Git', 'HTML5/CSS3', 'Bootstrap', 'Material-ui', 'Vuetify', 'Ant Design'],
    },
  ],
  portfolios: [
    {
      title: '大學專題',
      period: '2019 1月 ~ 2019 12月',
      infoList: [
        '通過108年度科技部大專學生研究計畫(題目: 基於大數據及類神經網路分析之台灣蔬果價量預測模型平台)',
        '入圍第24屆大專校院資訊應用服務創新競賽決賽(題目: 蒔價)',
      ],
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
  experiences: [
    {
      workUnit: '財團法人技專校院入學測驗中心',
      department: '資訊處-系統組',
      jobTitle: '實習助理',
      period: '2020 2月 ~ 2020 6月',
      useTech: 'Java(Struts2 + Spring + Hibernate + Tiles) | MySQL',
      list: [
        '開發樂齡學習網-自主帶領人的填報及審核功能',
        '樂齡學習網-部分頁面調整成RWD',
        '樂齡學習網-登入時新增驗證碼的功能',
        '樂齡學習網-網站維護',
      ],
    },
    {
      workUnit: '台大醫院雲林分院',
      department: '資訊室',
      jobTitle: '工讀生(產學合作)',
      period: '2019 7月 ~ 2020 6月',
      useTech: 'Python(Django、pytesseract、jieba) | Apache HTTP Server',
      list: [
        '參與開發初診預診表單(Django)',
        '將開發系統部屬至測試機',
        '協助原始資料文本清洗',
        '測試 OCR 辨識健保卡',
        '協助問診機器人開發除錯',
      ],
    },
  ],
};