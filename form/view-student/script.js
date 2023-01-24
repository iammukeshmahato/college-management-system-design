(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  function fun()
  {
    var a =document.getElementById('faculty').value;
    if(a=="Dit")
    {
        var Array=["First Semester","Second Semester","Third Semester",]
    }
    else if(a=="Dce")
    {
        var Array=["First Semester","Second Semester","Third Semester",]
    }
    else if(a=="Dee")
    {
        var Array=["First Semester","Second Semester","Third Semester",]
    }
    else if(a=="Dge")
    {
        var Array=["First Semester","Second Semester","Third Semester",]
    }
    else if(a=="Dhm")
    {
        var Array=["First Semester","Second Semester","Third Semester",]
    }

    else
    {
        var Array=[];
    }

    var string="";
    for(i=0;i<Array.length;i++)
    {
        string=string+"<option>"+Array[i]+"</option>";

    }

    document.getElementById('semester').innerHTML="<select>"+string+"</select>";
    
  }