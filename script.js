let div = document.createElement("div");
  div.setAttribute("class","container-fluid");
  document.body.appendChild(div);
  div.innerHTML=`
  <div class="row">
  <div class="col-md-4" id="div1">
      <h1>Form</h1><hr>
      <label for="Fname" class="col-3 col-sm-3">First Name<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="Fname" placeholder="First name"><br><br>
       <label for="Lname" class="col-3 col-sm-3">Last Name<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="Lname" placeholder="Last name"><br><br>
       <label for="address1" class="col-3 col-sm-3">Address line-1<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="address1" placeholder="Address line.1"><br><br>
       <label for="address2" class="col-3 col-sm-3">Address line-2<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="address2" placeholder="Address line.2"><br><br>
       <label for="pinCode" class="col-3 col-sm-3">Pin-code<sup style="color:red">*</sup></label>
       <input type="number" class="col-8 col-md-10 col-sm-7" id="pinCode" placeholder="Pin code"><br><br>
       <label for="gender" class="col-3 col-sm-3">Gender<sup style="color:red">*</sup></label>
       <select class="col-8 col-md-10 col-sm-7" id="gender">
          <option value="No Gender selected" selected hiiden>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">others</option>        
       </select><br><br>
       <label class="col-3 col-sm-3">Choice of Food<sup style="color:red">*</sup></label>
       <label id="two" style="display: none;"><b style="color:red">Select at least two food!!!</b> </label>
       <ul class="col-8 col-md-10 col-sm-7" style="list-style:none;margin-left: 15%%;">
          <li><input class="check" id="cb1" onclick="check()" type="checkbox" value="Poori"/><label for="cd1">-Poori</label></li><br>
          <li><input class="check" id="cb2" onclick="check()" type="checkbox" value="Briyani"/><label for="cd2">-Briyani</label></li><br>
          <li><input class="check" id="cb3" onclick="check()" type="checkbox" value="Noodles"/><label for="cd3">-Noodles</label></li><br>
          <li><input class="check" id="cb4" onclick="check()" type="checkbox" value="chat items"/><label for="cd4">-chat items</label></li><br>
          <li><input class="check" id="cb5" onclick="check()" type="checkbox" value="Falooda"/><label for="cd5">-Falooda</label></li><br>
       </ul>
       <label for="state" class="col-3 col-sm-3">State<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="state" placeholder="State Name"><br><br>
       <label for="country" class="col-3 col-sm-3">Country<sup style="color:red">*</sup></label>
       <input type="text" class="col-8 col-md-10 col-sm-7" id="country" placeholder="Country Name"><br><br> 
       <input type="button" class="btn btn-danger"value="Add" id="btn" onclick="addRow()"/><br><br>
      </div>
  <div class="col-md-8" id="div2">
  <h2>Table<h2><hr>
      <div class="row">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Pin Code</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Choice of Food</th>
                  <th scope="col">State</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody id="table-details">
              </tbody>
            </table>
         </div>
      </div>
      <input class="btn btn-danger" id="reset" onclick="reset1()" value="Reset" disabled/>
 </div>
</div>
</div>`
  
  
  
  
  
  //getting empty inputs
  let Fname1 = document.getElementById("Fname").value;
  let Lname1 = document.getElementById("Lname").value;
  let address1 = document.getElementById("address1").value;
  let address2 = document.getElementById("address2").value;
  let pincode1 = document.getElementById("pinCode").value;
  let gender1 = document.getElementById("gender").value;
  let state1 = document.getElementById("state").value;
  let country1 = document.getElementById("country").value;  


  function reset(){   //reset function with empty inputs
      document.getElementById("Fname").value = Fname1;
      document.getElementById("Lname").value = Lname1;
      document.getElementById("address1").value = address1;
      document.getElementById("address2").value = address2;
      document.getElementById("pinCode").value = pincode1;
      document.getElementById("gender").value = gender1;
      document.getElementById("state").value = state1; 
      document.getElementById("country").value = country1;
  }

    //check box count check (should be minimum 2)
let count = 0;
function check(){
 let two = document.getElementById("two");
 let checkbox = document.getElementsByClassName("check");
   count = 0;
  for(let i of checkbox){
   if(i.checked) count++;
  }
  if(count<2){
     two.setAttribute("style","display:");
  }
  else{
     two.setAttribute("style","display: none");
  }
}

 //function on submitting
function addRow(){
   //getting all inputs
let Fname = document.getElementById("Fname").value;
let Lname = document.getElementById("Lname").value;
let addres1 = document.getElementById("address1").value;
let addres2 = document.getElementById("address2").value;
let pincode = document.getElementById("pinCode").value;
let gender = document.getElementById("gender").value;
let state = document.getElementById("state").value;
let country = document.getElementById("country").value;


 //checkbox values to display in list
let list=document.createElement("div");
let ul=document.createElement("ul");
ul.setAttribute("style","list-style:none;");
list.append(ul);
let checkValues = document.getElementsByClassName("check");
for(let i in checkValues ){
 if(checkValues[i].checked===true){
     ul.innerHTML += `<li>${checkValues[i].value}</li>`;  
 }
}

//function for adding row 
let row = document.createElement("tr");
let addRow = document.getElementById("table-details");
addRow.append(row);

  //checking whether any input fields are not filled
if( count<2 || Fname===Fname1 || Lname===Lname1 || addres1===address1 || addres2===address2 || pincode===pincode1 || gender===gender1 || state===state1 || country===country1){
  alert("please enter all details");
}else{
//printing in Id #table-detais
row.innerHTML=`
<td>${Fname}</td>
<td>${Lname}</td>
<td><ul style="list-style:none"><li>${addres1}</li><li>${addres2}</li></td>
<td>${pincode}</td>
<td>${gender}</td>
<td>${list.innerHTML}</td>
<td>${state}</td>
<td>${country}</td>`;

//reset button
let resetBtn = document.getElementById("reset");
resetBtn.disabled=false;

//function to reset
let uncheck = document.getElementsByClassName("check")
for(let i of uncheck){
  i.checked=false;
}
reset();
 };

};


function reset1(){
     location.reload();
     let resetBtn = document.getElementById("reset");
     resetBtn.disabled=true;
}