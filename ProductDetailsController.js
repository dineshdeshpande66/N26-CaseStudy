({
    doInit : function(component, event, helper) {
                   
        helper.callController(component, 'getContactDetail', {caseID: component.get("v.recordId")}, function(response){
            if(response.getState() == 'SUCCESS'){
                var contactDet = response.getReturnValue();
                helper.callController(component, 'getProductDetail', {productID: contactDet.Contact.Product__c,countryID: contactDet.Contact.Home_Country__c}, function(response){
                    if(response.getState() == 'SUCCESS'){
                        component.set("v.productDetails",response.getReturnValue());
                    }
                });               
            }
        });
    }
})