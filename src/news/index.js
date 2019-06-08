import React, {
  Component
} from 'react';
import {
  Table,
} from 'antd';
import './index.less';

//列
let columns = [{
  title: 'metrix',
  dataIndex: 'metrix',
  width: "33%",
  key: 'metrix',
}, {
  title: 'datetime',
  dataIndex: 'datetime',
  key: 'datetime',
  width: "33%",
}, {
  title: 'quantity',
  dataIndex: 'quantity',
  key: 'quantity',
  width: "33%",
}];
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
  }
  render() {
    let {
      url,
      title,
      pubTime,
      source,
      financialNewsTagList,
      clickLink
    } = this.props;
    // console.log(financialNewsTagList);
    let {
      hide,
    } = this.state;
    hide = financialNewsTagList.length <= 2 ? false : hide;
    return (
      <div className="news">
        <div className="news-title">
          <a href="#/" onClick={()=>clickLink(url)}>{title}</a>
        </div>
        <div className="table" style={{height:hide? 160 : "auto"}}>
          <Table columns={columns} dataSource={financialNewsTagList} pagination={false} size="middle" />
        </div>
        {
          hide &&
          <div className="hide-more-than-two" onClick={()=>{this.setState({hide: false})}}>
      <div className="hide-effect"></div>
            <div className="text"><span>展开全部</span></div>
          </div>
        }
        <div className="last-line">
          <div className="time">
            <span className="text">发布时间：</span>
            <span className="text">{pubTime}</span>
          </div>
          <div className="from">
            <span className="text">来源：</span>
            <span className="text">{source}</span>
          </div>
        </div>



    </div>
    );
  }
}

export default News;