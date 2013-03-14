iTooltip
========

iTooltip Plugin can be used for adding tooltips to input and textarea elements. The text of each element can be attached to an attribute named `data-text` like below:

    <input type="text" class="tooltip" data-text="First name" />
    <input type="text" class="tooltip" data-text="Last name" />

iTooltip has the following **default options**:

    $(document).ready(function(){
        $('.tooltip').iTooltip({
            'initClass':'init',
            'inactiveClass':'inactive',
            'activeClass':'active',
            'onFocus':function(value){},
            'onKeyUp':function(value){},
            'onBlur':function(value){}
        });
    });

 1. **initClass** - CSS Class which is added to the element when the *element value* = `data-text` attribute value;
 2. **inactiveClass** - CSS Class which is added when the element is focused and its value = `data-text` attribute value;
 3. **activeClass** - CSS Value which is added when the element value != `data-text` attribute value;
 4. **onFocus** - Callback function which is called when the element is focused;
 5. **onKeyUp** - Callback function which is called when `keyup` event is raised;
 6. **onBlur** - Callback function which is called when `blur` event is raised.

##How to use iTooltip##

Please see an example of using iTooltip:

*Javascript*

    $(document).ready(function(){
        $('.tooltip').iTooltip({
            onBlur: function(value) {
                console.log(value);  
            }	
        });	
    });

*CSS*

    .init {
        color:#666;
    }
	
    .inactive {
        color:#CCC;
    }
	
    .active {
        color:#000;
    }
