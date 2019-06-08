import React, {
  Component
} from 'react';
import News from './news';
import Info from './info';
import './App.css';


let fakeData = {
  "payload": {
    "response": [{
      "id": "0",
      "url": "http://column.iresearch.cn/b/201811/850572.shtml",
      "title": "从常胜到常败 腾讯是不是BAT中最焦虑的那一家？",
      "pubTime": "2018-11-23",
      "source": "艾瑞咨询",
      "financialNewsTagList": [{
        "metrix": "净利润",
        "datetime": "2018年",
        "quantity": "15%"
      }, {
        "metrix": "净利润",
        "datetime": "三季度",
        "quantity": "56%"
      }, {
        "metrix": "净利润",
        "datetime": "去年",
        "quantity": "6.18%"
      }]
    }, {
      "id": "1",
      "url": "http://column.iresearch.cn/b/201904/860135.shtml",
      "title": "裁撤中干、业务受挫，腾讯还能躺着赚钱吗？",
      "pubTime": "2019-04-08",
      "source": "艾瑞咨询",
      "financialNewsTagList": [{
        "metrix": "净利润",
        "datetime": "四季度",
        "quantity": "39%"
      }, {
        "metrix": "收入",
        "datetime": "2018年",
        "quantity": "¥77969000000"
      }, {
        "metrix": "收入",
        "datetime": "四季度",
        "quantity": "¥24200000000"
      }, {
        "metrix": "收入",
        "datetime": "2017年",
        "quantity": "¥24100000000"
      }, {
        "metrix": "成本",
        "datetime": "2018年",
        "quantity": "75%"
      }, {
        "metrix": "毛利率",
        "datetime": "2018年",
        "quantity": "23%"
      }]
    }, {
      "id": "2",
      "url": "http://column.iresearch.cn/b/201505/703832.shtml",
      "title": "腾讯游戏 绝不止于渠道",
      "pubTime": "2019-05-28",
      "source": "艾瑞咨询",
      "financialNewsTagList": [{
        "metrix": "营收",
        "datetime": "三季度",
        "quantity": "46.1%"
      }, {
        "metrix": "营收",
        "datetime": "",
        "quantity": "50%"
      }]
    }, {
      "id": "3",
      "url": "http://column.iresearch.cn/b/201811/850406.shtml",
      "title": "腾讯急转弯，“甩下”腾讯系",
      "pubTime": "2018-11-21",
      "source": "艾瑞咨询",
      "financialNewsTagList": [{
        "metrix": "股份",
        "datetime": "2012年",
        "quantity": "48.4%"
      }]
    }],
    "request_id": "b8ef64ce-6e3c-4c51-9995-a0f6d9df4659"
  },
  "status_code": 0,
  "msg": "success"
};

let example = fakeData.payload.response;

function clickLink(link) {
  window.open(link);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: example,
      // newsData: [],
      info: {},
    };
    this.search();
  }
  search() {
    let self = this;
    let defaultText = "腾讯";
    let text = (this.refs.search_input && this.refs.search_input.value) || defaultText;
    // 新闻
    let urlNews = "http://huricane.smoothnlp.com:28000/queryfinance?text=" + text;
    // text (str): 咨询搜索关键词
    // from(int): 开始位置
    // size(int): 条数
    fetch(urlNews)
      .then(response => response.json())
      .then(newsData => {
        console.log(newsData)
        try {
          // 词法分析
          newsData = newsData.payload.response;
          self.setState({
            newsData
          })
        } catch (error) {
          console.error(error)
        }
      })
      .catch(error => console.error(error));


    // company info
    let urlInfo = "http://api.smoothnlp.com/querycompany?text=" + text;
    fetch(urlInfo)
      .then(response => response.json())
      .then(info => {
        console.log(info);
        // 词法分析
        try {
          info = info && info[0];
          self.setState({
            info
          })
        } catch (error) {
          console.error(error)
        }

      })
      .catch(error => console.error(error));

  }
  onkeyUp(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  }

  render() {
    let {
      info,
      newsData,
    } = this.state;
    return (
      <div className="App">
        <div className="search-bar">
          <div className="App-left">
            <img className="App-logo" alt="smoothnlp-logo"  src="http://www.smoothnlp.com/static/media/smoothnlp_hlog.cbc5ee4b.png" />
          </div>
          <div className="search">
            <input className="search-input" ref="search_input" placeholder="输入公司名称搜索资讯"  onKeyUp={this.onkeyUp.bind(this)}  />
            <button className="search-button" onClick={this.search.bind(this)}>嗅问</button>
          </div>
        </div>
        <div className="display-bar">
          <div className="display-bar-text">资讯信息</div>
        </div>

        <div className="search-result">
          <div className="news-left">
            {
                !!newsData && newsData.map((news, news_index, news_array) => {
                  return <News key={"new_"+news_index} {...news} clickLink={clickLink}></News>
                  })
            }
          </div>
          <div className="info-right">
            <Info info={info} clickLink={clickLink}></Info>
          </div>
        </div>




    </div>
    );
  }
}

export default App;