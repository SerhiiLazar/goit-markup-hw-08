$("#formValidation").validate({

    rules:{
        name:{
            minlength:2,
        },
        email:{
            email:true
        },
        phone:{
            phone:true,
            minlength:10,
            maxlength:13
        }

    },
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Name at least 2 characters" 
        },
        email:{
            required: "Please enter your Email",
        },
        phone:{
            required:"Please enter your Phone",
            minlength:"Name at least 10 characters"
        }
        
    },


    submitHandler: function(form) {
      form.submit();
    }
   });