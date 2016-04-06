"use strict";
import dispatcher from "../../dispatcher";
import ActionResponse from "../ActionResponse";
import AuthenticationService from "../../services/authentication/AuthenticationService";

var actions = {
  authenticate: "AUTHENTICATE_USER",
  register: "REGISTER_USER"
};

module.exports = {
  actions: actions,
  authenticate: function(authenticateModel) {
    let service = new AuthenticationService();

    service.authenticate(authenticateModel)
      .then((data) => {
        dispatcher.dispatch(new ActionResponse(null, actions.authenticate, data));
      }, (err) => {
        dispatcher.dispatch(new ActionResponse(err, actions.authenticate));
      });
  },
  register: function(userViewModel) {

    service.register(userViewModel)
      .then((data) => {
        dispatcher.dispatch(new ActionResponse(null, actions.register, data));
      }, (err) => {
        dispatcher.dispatch(new ActionResponse(err, actions.register));
      });
  }
};
