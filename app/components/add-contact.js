import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addContact: function() {
      var firstName = this.get('firstName');
      var surName = this.get('surName');
      var phoneNumber = this.get('phoneNumber');
      var mobileNumber = this.get('mobileNumber');

      // Send action to controller
      this.sendAction('addContact', firstName, surName, phoneNumber, mobileNumber);

      // Clear form after adding contact
      this.setProperties({
        firstName: '',
        surName: '',
        phoneNumber: '',
        mobileNumber: ''
      });
    }
  }
});
