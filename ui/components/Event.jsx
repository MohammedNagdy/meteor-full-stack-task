import React from 'react'
import Card from './commons/Card'
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '../../people/people.js';


export default function Event({name, id}) {

    const peopleByCompany = {}
    const peopleCount = useTracker(() => People.find({communityId: id}).count());
    const peopleNotRegisteredCount = useTracker(() => People.find({communityId: { $not: id}}).count());
    useTracker(() => People.find({communityId: id}, { limit: 3}).forEach((doc) => {
        if (doc.companyName !== undefined) {
            if(!peopleByCompany[doc.companyName])
                peopleByCompany[doc.companyName] = 0;
            peopleByCompany[doc.companyName]++;
        }
        }
    ));

  return (
        <Card>
            <h4 className='font-medium text-xl mb-4 text-amber-700'>{name}</h4>
            <div className='font-mono'>
                <p>People in the event right now: {peopleCount}</p>
                <p>People not checked in: {peopleNotRegisteredCount}</p>
                <p>People by company in the event right now: {Object.entries(peopleByCompany).map((company) => 
                    <p>{company[0]} ({company[1]})</p>
                )} ...</p>
            </div>
        </Card>
  )
}
