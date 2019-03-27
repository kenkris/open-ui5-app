sap.ui.define([
	"./BaseController"
],  function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.masterdetail.controller.AddProduct", {
        


        onInit : function () {
           
            var oModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(qjoxeb03mev4wjl2ls04k32m))/OData/OData.svc/");

            oModel.read("/Products", {success: this.successHandler, error: this.rejectHandler}); // Get from server
            //var fromLocalCache = oModel.getData("/Products");

        },

        successHandler : function(value){
            console.log("----------SUCCESS------------");
            console.log(value);
        },

        rejectHandler : function(){
            console.log("-----------FAILED!------------");
        }
    });
    
});