function clearTaxSelection() {
    //clear option buttons if any were selected
    document.getElementById("session1").checked = false;
    document.getElementById("session2").checked = false;

}


function redirectAppt(){
    var msg = "Your appointment request has been sent. You will receive a call from one of our tax professionals to confirm your appointment.\n\nYou will be re-directed to the home page now."

    alert(msg);
    window.location.href="copy of index.html";
   //return true;
}

function redirectReg(){
    var msg = "Your class registration request has been sent. You will receive a call from a member of our to team to confirm class availability and schedule.\n\nYou will be re-directed to the home page now."
    
    alert(msg);
    window.location.href="copy of index.html";
    
    return true;
}


function validateFormA(oForm) {
    //code
    var elem = oForm.id;
    var msg = "Your request has been sent. You will receive a call to confirm your appointment."
    document.getElementById(elem).submit();
    
    alert(msg);
    document.getElementById(elem).reset();
    
}

function validateFormB(oForm) {
    //code
    var elem = oForm.id;
    var msg = "Your request has been sent. You will receive a call to confirm your class registration."
    document.getElementById(elem).submit();
    
    alert(msg);
    document.getElementById(elem).reset();
    
}

function testA(oForm) {
    //code
    var elem = oForm.id;
    var fields = oForm.elements;
    
    document.getElementById(elem).submit();
    document.getElementById(elem).reset();
    alert("test");
    
    for(i=0; i< fields.length; i++){
        //case
        currValue = fields[i].value;
        
        if(currValue == null || currValue == ""){
            //code
          alert(fields[i].name + " must be filled out.");
          return false;
        }
    }
    return true;
};

/*The below code is the original code provided with the template which uses php. This is currently not being used.

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes 
$('#name').focus(function() {
    $('#success').html('');
});
*/