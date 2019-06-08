import React, {
  Component
} from 'react';
import './index.css';

class Info extends Component {
  render() {
    let {
      info,
      // clickLink
    } = this.props;
    return (
      <div className="Info">
        <div className="company-name">{info.company_name}</div>
        {
          info.legal_person &&
          <div className="company_info legal_person">
            <div className="left">法人：</div>
            <div className="right">{info.legal_person}</div>
          </div>
        }
        {
          info.registration_capital &&
          <div className="company_info registration_capital">
            <div className="left">注册资本：</div>
            <div className="right">{info.registration_capital}</div>
          </div>
        }
        {
          info.established_time &&
          <div className="company_info established_time">
            <div className="left">注册时间：</div>
            <div className="right">{info.established_time}</div>
          </div>
        }
        { info.company_address &&
          <div className="company_info company_address">
            <div className="left">注册地址：</div>
            <div className="right">{info.company_address}</div>
          </div>
        }



        {
        // <div className="company_info">
        //   <div className="left">企业的统一信用码：</div>
        //   <div className="right">{info.credit_code}</div>
        // </div>
        // <div className="company_info url_address">
        //   <div className="left">官网地址：</div>
        //   <div className="right"><a onClick={()=>clickLink(info.url_address)}>{info.url_address}</a></div>
        // </div>
        }
      </div>
    )
  }
}

export default Info;