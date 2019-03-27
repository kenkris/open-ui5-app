sap.ui.define([
    "./BaseController"
],  function (BaseController) {
    "use strict";

    var that = "";

    return BaseController.extend("sap.ui.demo.masterdetail.controller.AddProduct", {

        oModel : new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(qjoxeb03mev4wjl2ls04k32m))/OData/OData.svc/"),

        releaseDate : "",

        onInit : function () {

            that = this;

            // Testing
            // Get Product from server -
            //this.oModel.read("/Products", {success: this.readSuccessHandler, error: this.readRejectHandler}); // Get from server
        },

        createProduct : function(){
            console.log(this.releaseDate);

            var product = {
                //ID: 8545,
                Name: this.byId("name")._lastValue,
                Price: this.byId("price")._lastValue,
            };

            this.oModel.create("/Products", product, { success: this.createSuccessHandler, error: this.createRejectHandler});
        },

        releaseDateChanged: function(oEvent){
            var dateArr = oEvent.getParameter("value").split("-");
            this.releaseDate = new Date(dateArr[2], dateArr[1]-1, dateArr[0]).getTime()/1000;
        },

        createSuccessHandler: function(value){
            console.log("Product create success");
        },

        createRejectHandler: function(value){
            console.log("Product create failed!");
        },

        readSuccessHandler: function(value){
            console.log("----------SUCCESS------------");
            console.log(value);
            //var cachedProducts = that.oModel.getData("/Products");
            //console.log(cachedProducts);
        },

        readRejectHandler: function(){
            console.log("-----------FAILED!------------");
        }
    });

});