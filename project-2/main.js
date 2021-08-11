var images=
["family.png",
"https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6VK5DOPN159a3rL36WZx_S3S_EUNoVmisw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIscIM4oGNNlUsUtYl4kBG09RqWRpaXL_3yA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLxAmjLJ3cN-MiodALvMklKj2PGfXodQrSQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOEfgLRMVqMm4SLXcq5Y9ZDlFjFR0yCQNDg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98mmGLb7GNVc4XXvmynptO33wGD3E232i1A&usqp=CAU"]
var names=["family book","Pratibha","Vishnu","Ishitha(ME!)","pranav","Sudha","lokanatha reddy"]
var i=0;
function update(){
    i++
    var number_of_family_members_in_array=7
    if(i>number_of_family_members_in_array){
        i=0
    }
    var updateimgs=images[i];
    var updatenames=names[i];
    document.getElementById("img").src=updateimgs
    document.getElementById("family_member_name").innerHTML=updatenames