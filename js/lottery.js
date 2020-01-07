(function () {
  // 默认抽奖人员
  var defaultMembers = [
    {
      "id": 1,
      "name": "闵觅珍"
    },
    {
      "id": 2,
      "name": "慈新之"
    },
    {
      "id": 3,
      "name": "户柔绚"
    },
    {
      "id": 4,
      "name": "柯雅容"
    },
    {
      "id": 5,
      "name": "邰虹彩"
    },
    {
      "id": 6,
      "name": "延易蓉"
    },
    {
      "id": 7,
      "name": "吉娇然"
    },
    {
      "id": 8,
      "name": "百里惜蕊"
    },
    {
      "id": 9,
      "name": "云寻双"
    },
    {
      "id": 10,
      "name": "衅嘉颖"
    }
  ]
  // 默认奖项设置
  var defaultAwards = [
    {
      name: '二等奖',
      award: '办公室一日游',
      count: 25,
      batchNumber:5
    },
    {
      name: '一等奖',
      award: 'BMW X5',
      count: 10,
      batchNumber:1
    },
    {
      name: '特等奖',
      award: '深圳湾一号',
      count: 1,
      batchNumber:1
    },
  ]

  var tool = {
    // 重置数据
    clear() {
      localStorage.clear()
    },
    //中奖人员
    saveLuckyGuys(data) {
      if (data) {
        localStorage.setItem('result', JSON.stringify(data))
      } else {
        localStorage.removeItem('result')
      }
    },
    getLuckyGuys(awardIndex) {
      var allGuys = JSON.parse(localStorage.getItem('result')) || []
      if (awardIndex === undefined) {
        return allGuys
      } else {
        return allGuys[awardIndex]
      }
    },
    // 参与抽奖人员
    getMembers() {
      return JSON.parse(localStorage.getItem('members')) || defaultMembers
    },
    saveMembers(data) {
      if (data) {
        localStorage.setItem('members', JSON.stringify(data))
      } else {
        localStorage.removeItem('members')
      }
    },
    // 奖项设置
    getAwards() {
      return JSON.parse(localStorage.getItem('awards')) || defaultAwards
    },
    saveAwards(data) {
      if (data) {
        localStorage.setItem('awards', JSON.stringify(data))
      } else {
        localStorage.removeItem('awards')
      }
    },
    // 活动标题
    saveTitle(title) {
      localStorage.setItem('lotteryTitle', title)
    },
    getTitle() {
      return localStorage.getItem('lotteryTitle') || ''
    },
    // 中奖机会
    saveOneTime(val) {
      localStorage.setItem('onetime', JSON.stringify(val))
    },
    getOneTime() {
      var val =localStorage.getItem('onetime')
      if(val!= undefined){
        return JSON.parse(val)
      }
      return true
    }
  }

  window.lottery = tool;
})()