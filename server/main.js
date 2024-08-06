import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '../infra/initial-data';
import { People } from '../people/people';
import { DATE_FORMAT } from '../constants';
import moment from 'moment';

// Meteor methods for updating and deleting for checking in and checking out people
Meteor.methods({
  updatePeopleCheckin: (personId, communityId) => {
    People.updateAsync(
      { _id: personId },
      { $set: { communityId, checkInDateTime: moment().format(DATE_FORMAT) } }
    );
  },
  updatePeopleCheckOut: (personId) => {
    People.updateAsync(
      { _id: personId },
      {
        $set: { checkOutDateTime: moment().format(DATE_FORMAT) },
        $unset: { communityId: '' },
      }
    );
  },
});

Meteor.startup(async () => {
  // DON'T CHANGE THE NEXT LINE
  await loadInitialData();

  // YOU CAN DO WHATEVER YOU WANT HERE
});
