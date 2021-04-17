import React from 'react';
import Note from '../components/Note';
import "../pages/Notification.css";

function Notifications() {
  let notes = [];
  for (var i = 0; i < 10; i++) {
    notes.push(<Note action ="commented on your posts 2h ago." username="witty fox" postText="Just had a huge argument with my parents. Living with them makes me feel like a child again. I really want to move out, but I can’t support myself financially. What do you guys think I should do?"></Note>);
  }
  return (
    <div className='notifications'>
      <div class="title">Notifications</div>
      <div>{notes}</div>
    </div>
  );
}

export default Notifications;