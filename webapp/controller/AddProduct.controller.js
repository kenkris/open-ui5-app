sap.ui.define([
	"./BaseController"
],  function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.masterdetail.controller.AddProduct", {
        
        onInit : function () {
            console.log("On init fired");
        }
    });
    
});