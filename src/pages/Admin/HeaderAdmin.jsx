import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const HeaderAdmin = () => {
  return (
    <nav className="header-admin">
      <ExpandMoreOutlinedIcon className="icon-expand" />
      <span>Admin</span>
      <div className="profile">
        <AccountCircleOutlinedIcon className="icon-black" />
      </div>
    </nav>
  );
};

export default HeaderAdmin;
