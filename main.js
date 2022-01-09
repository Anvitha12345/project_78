var images = ["my family.jpg","sandeep.jpeg", "phani.jpeg" , "Anvi.jpeg", "chakri.jpeg","Bhuvi.jpg","svojas.jpeg"];
var names = ["Fmaily Book","Sandeep Mallavarapu ( My Father )","Phani Madhavi ( My Mother )", "Anvitha  Mallavarapu ( Me )","Chakravarthi (  My Uncle )","Bhuvaneswari ( My Aunt )","Svojas ( My Cousin )"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
i++;}
