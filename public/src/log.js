$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
      function checkForm(form)
      {
        if(form.username.value == "") {
          alert("Error: Username cannot be blank!");
          form.username.focus();
          return false;
        }
        re = /^\w+$/;
        if(!re.test(form.username.value)) {
          alert("Error: Username must contain only letters, numbers and underscores!");
          form.username.focus();
          return false;
        }
    
        if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
          if(form.pwd1.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            form.pwd1.focus();
            return false;
          }
          if(form.pwd1.value == form.username.value) {
            alert("Error: Password must be different from Username!");
            form.pwd1.focus();
            return false;
          }
          re = /[0-9]/;
          if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one number (3-9)!");
            form.pwd1.focus();
            return false;
          }
          re = /[a-z]/;
          if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.pwd1.focus();
            return false;
          }
          re = /[A-Z]/;
          if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.pwd1.focus();
            return false;
          }
        } else {
          alert("Error: Please check that you've entered and confirmed your password!");
          form.pwd1.focus();
          return false;
        }
    
        alert("You entered a valid password: " + form.pwd1.value);
        return true;
      }
    
  
  });
  
  $('.tab a').on('click', function (e) { 
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });





