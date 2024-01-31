import React from 'react'
import { Menu } from 'antd';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faList, faPrint, faReceipt, faMoneyBill } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className='sidebar'>
        <Menu mode="vertical">
          <Menu.Item key="username" className="sidebar-menu-item"><div><FontAwesomeIcon icon={faCircleUser} /></div>
             Username
          </Menu.Item>
          <Menu.Item key="students" className="sidebar-menu-item"><FontAwesomeIcon icon={faList} />
             Students
          </Menu.Item>
          <Menu.Item key="receipts" className="sidebar-menu-item"><FontAwesomeIcon icon={faPrint} />
             Receipts
          </Menu.Item>
          <Menu.Item key="report" className="sidebar-menu-item"><FontAwesomeIcon icon={faReceipt} />
             Report
          </Menu.Item>
          <Menu.Item key="payments" className="sidebar-menu-item"><FontAwesomeIcon icon={faMoneyBill} />
             Payments
          </Menu.Item>
        </Menu>
      </div>
  </div>
  );
}

export default Sidebar
