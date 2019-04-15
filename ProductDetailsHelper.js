({
	callController: function(component, actionName, params, callback){
        var action =  component.get('c.'+actionName);
        if(!$A.util.isEmpty(params))
            action.setParams(params);
        action.setCallback(this, callback);
        $A.enqueueAction(action);
    }
})