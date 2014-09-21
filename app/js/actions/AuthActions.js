'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {

  /**
   * @param  {string} text
   */
  login: function(email, password) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN,
      email: email,
      password: password
    });
  }
};

module.exports = AuthActions;