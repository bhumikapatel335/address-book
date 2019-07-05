import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addContact: function(firstName, surName, phoneNumber, mobileNumber) {
      var contact = this.store.createRecord('contact', {
        firstName: firstName,
        surName: surName,
        phoneNumber: phoneNumber,
        mobileNumber: mobileNumber
      });
    },
    deleteContact: function(contact) {
      this.store.deleteRecord(contact);
    }
  }
});
