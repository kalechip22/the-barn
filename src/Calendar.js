import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import FBLogo from './images/fb-txt.png'
import InstagramLogo from './images/instagram-txt.png'
import LinkedLogo from './images/linked-logo.png'
import TikLogo from './images/tik-logo.png'
import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AggieHouseLogo from './images/AH-logo.png';
import AnnouncementForm from './AnnouncementForm';
import Message from './Message';


const localizer = momentLocalizer(moment);

class calendar extends Component {
  
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Eric's Shift"
      },
      {
        start: moment().subtract(3, 'days').toDate(), // Subtracts 3 days from the current date
        end: moment().subtract(2, 'days').toDate(),   // Subtracts 2 days from the current date (for example)
        title: "Emily's Shift"
      },
      {
        start: moment().subtract(10, 'days').toDate(), // Subtracts 3 days from the current date
        end: moment().subtract(9, 'days').toDate(),   // Subtracts 2 days from the current date (for example)
        title: "Jillian's Shift"
      },
      {
        start: moment().subtract(20, 'days').toDate(), // Subtracts 3 days from the current date
        end: moment().subtract(19, 'days').toDate(),   // Subtracts 2 days from the current date (for example)
        title: "Kayla's Shift"
      },
      // Add more events as needed
    ]
  };
  

  render() {
    return (
      <div>
        <img src={AggieHouseLogo} className="aggie-house-logo" alt="AH logo" />

        <div className="logos" style={{position: 'absolute', top: '30px', right: '80px'}}>
          <a href="https://www.facebook.com/aggiehouseatucdavis/" target="_blank" rel="noopener noreferrer">
            <img src={FBLogo} className="FB-logo" style={{marginRight: '20px', height: '20px'}} alt="FB logo" />
          </a>

          <a href="https://www.instagram.com/aggiehouseatucdavis/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} className="Instagram-logo" style={{marginRight: '20px', height: '20px'}} alt="Instagram logo" />
          </a>

          <a href="https://www.linkedin.com/company/aggie-house-at-uc-davis/about/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedLogo} className="Linked-logo" style={{marginRight: '20px', height: '20px'}} alt="Linked logo" />
          </a>

          <a href="https://www.tiktok.com/@aggie_house?_t=8jOBwvyuG8E&_r=1" target="_blank" rel="noopener noreferrer">
            <img src={TikLogo} className="Tik-logo" style={{marginRight: '20px', height: '20px'}} alt="Tik logo" />
          </a>
        </div>

        <div className="container" style={{marginTop: "40px", marginLeft: "30px"}}>
      {/* Left column */}
      <div className="left-column">
        {/* Announcement form */}
        <div className="announcement-form">
        <AnnouncementForm />
          {/* Your announcement form components */}
        </div>

        {/* Admin message form */}
        <div className="admin-message-form">
          <Message />
          {/* Your admin message form components */}
        </div>
      </div>

      {/* Right column */}
      <div className="right-column">
        {/* Calendar */}
        <div className="calendar">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
          />
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default calendar;
