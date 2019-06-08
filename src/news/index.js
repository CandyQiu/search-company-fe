import React, {
  Component
} from 'react';
import {
  Tag,
  Table,
} from 'antd';
import './index.css';

//列
let columns = [{
  title: 'metrix',
  dataIndex: 'metrix',
}, {
  title: 'datetime',
  dataIndex: 'datetime',
}, {
  title: 'quantity',
  dataIndex: 'quantity',
}];
class News extends Component {
  render() {
    let {
      tags,
      data,
      url,
      title,
      pubTime,
      source,
      financialNewsTagList,
    } = this.props;
    // } = example;
    // console.log(example);

    //列中值
    // let data = financialNewsTagList;

    return (
      <div className="News">
        <div className="news-title">
          <a href={url}>{title}</a>
        </div>
        <div className="table">
          <Table columns={columns} dataSource={financialNewsTagList} size="middle" />
        </div>
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