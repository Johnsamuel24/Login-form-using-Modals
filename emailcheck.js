function emailcheck()
{
    let a  = document.getElementsByClassName("form-control");
let d = 0;
let w;
let r;
r= document.createElement("span");
w = document.getElementsByClassName("modal-body");
console.log(a[0].value);

if(a[0].value == "" || a[1].value == "" || a[2].value == "" || a[3].value == "")
{
    r.innerHTML="<p> Please Enter All The Details</p>";
    w[1].append(r);
    $("#myModal1").modal("show");    
}else{




    if(a[0].value == "prasanth"  )
    {
        console.log(a[0].value);
        d++;
        
    }
    else{
        console.log(a[0].value);
        console.log("Not Valid");
       
    r.innerHTML="<p> First Name is Wrong</p>";
    w[1].append(r);
    $("#myModal1").modal("show");    
    }

    if(a[1].value == "v m"  )
    {
        console.log(a[1].value);
        d++;
        
    }
    else{
        console.log(a[1].value);
        console.log("Not Valid");
        r.innerHTML="<p> Last Name is Wrong</p>";
    w[1].append(r);
    $("#myModal1").modal("show");    

        
    }

    if(a[2].value == "vmprasanth@gmail.com"  )
    {
        console.log(a[2].value);
        d++;
        
    }
    else{
        console.log(a[2].value);
        console.log("Not Valid");
        r.innerHTML="<p> E-Mail ID is Wrong</p>";
    w[1].append(r);
    $("#myModal1").modal("show");    

        
    }

    if(a[3].value == 123456789  )
    {
        console.log(a[3].value);
        d++;
        
    }
    else{
        console.log(a[3].value);
        console.log("Not Valid");
        r.innerHTML="<p>Phone Number is Wrong</p>";
    w[1].append(r);
    $("#myModal1").modal("show");      
    }


       if(d === 4)
       {
        $("#myModal").modal("show");
       }
  
    }







}

