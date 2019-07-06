import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

  errors: DS.Errors.create(),

  actions: {
    addContact: function() {
      if (this.validateInput()) {
        var firstName = this.get('firstName');
        var surname = this.get('surname');
        var phoneNumber = this.get('phoneNumber');
        var mobileNumber = this.get('mobileNumber');

        // Send action to controller
        this.sendAction('addContact', firstName, surname, phoneNumber, mobileNumber);

        // Clear form after adding contact
        this.setProperties({
          firstName: '',
          surname: '',
          phoneNumber: '',
          mobileNumber: ''
        });
      }
    }
  },

  //validate all the input fields
  validateInput: function() {

    this.set('errors', DS.Errors.create());

    var firstName = this.get('firstName');
    var surname = this.get('surname');
    var phoneNumber = this.get('phoneNumber');
    var mobileNumber = this.get('mobileNumber');

    if (firstName === undefined || firstName.trim() === '') {
      this.get('errors').add('firstName', "First name cannot be empty");
    }

    if (surname === undefined || surname.trim() === '') {
      this.get('errors').add('surname', "surname cannot be empty");
    }

    if (phoneNumber === undefined || phoneNumber.trim() === '') {
      this.get('errors').add('phoneNumber', "Phone number cannot be empty");
    }

    if (mobileNumber === undefined || mobileNumber.trim() === '') {
      this.get('errors').add('mobileNumber', "Mobile number cannot be empty");
    }

    return this.get('errors.isEmpty');
  }
});
