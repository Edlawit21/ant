import React from 'react';
import { Menu } from 'antd';
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
     <div>
        <Menu
           mode='horizontal'
           style={{ backgroundColor: '#E6E6F0', marginLeft: '150px', gap: '5px' }}
        >
           <Menu.SubMenu title="Student" key="student">
              <Menu.Item key="add-student">
                 <Link to="/add-student">Add Student</Link>
              </Menu.Item>
              <Menu.Item key="left-student">
                 <Link to="/left-student">Left Student</Link>
              </Menu.Item>
           </Menu.SubMenu>
           <Menu.SubMenu title="Recepit" key="recepit">
              <Menu.Item key="prepare-recepit">
                 <Link to="/prepare-recepit">Prepare Recepit</Link>
              </Menu.Item>
              <Menu.Item key="manage-reason">
                 <Link to="/manage-reason">Manage Reason</Link>
              </Menu.Item>
           </Menu.SubMenu>
           <Menu.SubMenu title="Report" key="report">
              <Menu.Item key="void-report">
                 <Link to="/void-report">Void Report</Link>
              </Menu.Item>
           </Menu.SubMenu>
           <Menu.SubMenu title="Payment" key="payment">
              <Menu.Item key="manage-payment">
                 <Link to="/manage-payment">Manage Payment</Link>
              </Menu.Item>
           </Menu.SubMenu>
           <Menu.SubMenu title="Export" key="export">
              <Menu.Item key="export-student">
                 <Link to="/export-student">Export Student</Link>
              </Menu.Item>
              <Menu.Item key="export-payment">
                 <Link to="/export-payment">Export Payment</Link>
              </Menu.Item>
           </Menu.SubMenu>
        </Menu>
      </div>
   );
}




export default Nav;
