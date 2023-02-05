$("#formValidation").validate({

    rules:{
        name:{
            minlength:2,
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:13
        }

    },
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Name at least 2 characters" 
        },
        email:"Please enter your Email",
        phone:"Please enter your Phone"
    },


    submitHandler: function(form) {
      form.submit();
    }
   });