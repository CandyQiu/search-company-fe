import React, {
  Component
} from 'react';
import './index.css';

class Info extends Component {
  render() {
    let {
      info
    } = this.props;
    return (
      <div className="Info">
        <div className="company-name">{info.company_name}</div>
        <div className="company_info legal_person">
          <div className="left">法人：</div>
          <div className="right">{info.legal_person}</div>
        </div>
        <div className="company_info registration_capital">
          <div className="left">注册资本：</div>
          <div className="right">{info.registration_capital}</div>
        </div>
        <div className="company_info company_address">
          <div className="left">注册地址：</div>
          <div className="right">{info.company_address}</div>
        </div>
        <div className="company_info established_time">
          <div className="left">注册时间：</div>
          <div className="right">{info.established_time}</div>
        </div>
        <div className="company_info url_address">
          <div className="left">官网地址：</div>
          <div className="right">{info.url_address}</div>
        </div>
        <div className="company_info">
          <div className="left">企业的统一信用码：</div>
          <div className="right">{info.credit_code}</div>
        </div>


      </div>
    )
  }
}

export default Info;