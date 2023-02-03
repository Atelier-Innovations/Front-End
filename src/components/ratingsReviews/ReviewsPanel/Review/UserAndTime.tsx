import React, { FC } from 'react';
import { format, parse } from 'fecha'

interface UserAndTimeProps {
  reviewer_name: string;
  date: string;
}


const UserAndTime: FC<UserAndTimeProps> = ({ reviewer_name, date }) => {
  // need to verify actual date formatting required
  const dateFormatted = () => {
    let longDate = parse(date, 'isoDateTime').toString();
    let shortDate = longDate.slice(4, 15)
    return shortDate
  }



  return (
    <div className="username-date">
      {reviewer_name}, {dateFormatted()}
    </div>
  )
}


export default UserAndTime