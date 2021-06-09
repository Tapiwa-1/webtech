window.onload = function(){

    document.getElementById('Submit').onclick = function(e){
        alert("Name: "+ document.getElementById("fname").value + "\nNumber: "
             +document.getElementById("number").value + "\nEmail: "+ document.getElementById("email").value +
             "\nEnqueries: "+ document.getElementById("Enqueries").value);
        document.getElementById("myForm").reset();
        return false;
    }
}