import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addContact: function(firstName, surname, phoneNumber, mobileNumber) {
      var contact = this.store.createRecord('contact', {
        firstName: firstName,
        surname: surname,
        phoneNumber: phoneNumber,
        mobileNumber: mobileNumber
      });
    },
    deleteContact: function(contact) {
      this.store.deleteRecord(contact);
    }
  }
});
