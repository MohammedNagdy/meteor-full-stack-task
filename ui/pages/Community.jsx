import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router';
import { People } from '../../people/people';
import { Communities } from '../../communities/communities';
import CardsHolder from '../components/commons/CardsHolder';
import Person from '../components/Person';

export default function Community() {
  const params = useParams();
  const [delayed, setDelayed] = useState('');

  const { community, peopleOutsideCommunity, peopleInsideCommunity } = useTracker(() => {
    const communityData = Communities.findOne({ _id: params.id });
    const outsidePeopleData = People.find({ communityId: { $ne: params.id } }).fetch();
    const insidePeopleData = People.find({ communityId: params.id }).fetch();

    return {
      community: communityData,
      peopleOutsideCommunity: outsidePeopleData,
      peopleInsideCommunity: insidePeopleData
    };
  });

  // Delay the checkout by 5 seconds
  useEffect(() => {
    if (delayed !== '') {
      const timeout = Meteor.setTimeout(() => {
        setDelayed(false);
      }, 5 * 1000); // 5 seconds delay
      return () => {
        Meteor.clearTimeout(timeout);
      };
    }
  }, [delayed])

  const checkInHandler = personId => {
    Meteor.call('updatePeopleCheckin', personId, params.id);
    setDelayed(personId);
  };

  const checkOutHandler = personId => {
    Meteor.call('updatePeopleCheckOut', personId, params.id);
  };

  if (!community) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
      <CardsHolder name={community.name}>
        {peopleInsideCommunity.map((person) => (
          <Person key={person._id} personData={person} checkStatus={true} delayed={delayed} onCheckButtonClick={() => checkOutHandler(person._id)} />
        ))}
      </CardsHolder>
      <CardsHolder name="Not checked-in people">
        {peopleOutsideCommunity.map((person) => (
          <Person key={person._id} personData={person} checkStatus={false} onCheckButtonClick={() => checkInHandler(person._id)} />
        ))}
      </CardsHolder>
    </div>
  );
}


