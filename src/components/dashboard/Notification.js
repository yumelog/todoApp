import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const Notification = (props) => {
   const { notifications } = props;
   console.log(notifications);
       return (
           <div className="section">
               <div className="card z-depth-0">
                   <div className="card-content">
                       <span className="card-title">Notifications</span>
                       <ul className="notifications">
           { notifications && notifications.map(item => {
               return(
                   <li key={item.id}>
                       <span className="pink-text">{item.user} </span>
                       <span>{item.content}</span>
                       <div className="grey-text note-date">
                           {moment(item.time.toDate()).fromNow()}
                       </div>
                   </li>
               )
           })}
                       </ul>
                   </div>
               </div>
           </div>
       )
}

const mapStateToProps = (state) => {
   console.log('notification');
   console.log(state);
   return {
       notifications: state.firestore.ordered.notifications
   }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
       { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
   ])
)(Notification);
