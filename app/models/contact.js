import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  surname: DS.attr('string'),
  phoneNumber: DS.attr('number'),
  mobileNumber: DS.attr('number')
});
