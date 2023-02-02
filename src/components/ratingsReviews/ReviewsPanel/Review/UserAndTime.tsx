import React, { FC } from 'react';
// need to look into correct way to handle type for this case

interface UserAndTimeProps {
  reviewer_name: string;
  date: string;
}

const UserAndTime: FC<UserAndTimeProps> = ({ reviewer_name, date }) => {
  // need to verify actual date formatting required
  // currently formatting to "# months ago" as default of TimeAgo
  return (
    <div className="username-date">
      {reviewer_name}, {date}
    </div>
  )
}


export default UserAndTime