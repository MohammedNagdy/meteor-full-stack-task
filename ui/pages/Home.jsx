import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';
import { Communities } from '../../communities/communities.js';
import Event from '../components/Event.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  const communities = useTracker(() => Communities.find({}).fetch());

  return (
    <div className='flex items-center justify-center space-x-2'>
      { communities.map(community => 
        <Link to={`/event/${community._id}`}>
          <Event key={community._id} name={community.name} id={community._id}/>
        </Link>
        ) 
      }
    </div>
  )
}
