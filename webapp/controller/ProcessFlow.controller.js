sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage"
], function(Controller, formatMessage) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.controller.ProcessFlow", {
		formatMessage: formatMessage,

		onNavButtonPressed: function () {
			this.getOwnerComponent().getRouter().navTo("home");
		}
	});
});
