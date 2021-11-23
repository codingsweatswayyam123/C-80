friend=[];
function submit(){
    var name_1=document.getElementById("friend_1").value;
     var name_2=document.getElementById("friend_2").value;
     var name_3=document.getElementById("friend_3").value;
     var name_4=document.getElementById("friend_4").value;
    friend.push(name_1);
    friend.push(name_2);
    friend.push(name_3);
    friend.push(name_4);
    console.log(friend);
    var length_friend=friend.length;
    console.log(length_friend);
    document.getElementById("friend_list").innerHTML=friend;
    var list2=friend.join(" ");
    document.getElementById("friend_list2").innerHTML=friend;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    friend.sort();console.log(friend);
    document.getElementById("friend_list").innerHTML=friend;
    var list2=friend.join(" ");
    document.getElementById("friend_list2").innerHTML=friend;
}
function update(){
    document.getElementById("friend_list2").innerHTML="<h1>"+friend+"</h1>";
}
