




function getPosts(userId){
  let request = new XMLHttpRequest();
  request.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  request.responseType = "json"
  request.send();
  request.onload = function () {

   if(request.status >= 200 && request.status < 300 ){
      let posts = request.response
      var data = ""
      for(post of posts){
         data += 
         `

         <div class="box">
         <h4>${post.title}</h4>
         <hr />
         <p>
         ${post.body}
         </p>
       </div>
         `
      }
      document.querySelector(".end-side").innerHTML = data
   }else {
    alert("Error")
   }
  }
}



function getUsers(){
  let request = new XMLHttpRequest();
  request.open("GET","https://jsonplaceholder.typicode.com/users");
  request.responseType = "json"
  request.send();
  request.onload = function () {

   if(request.status >= 200 && request.status < 300 ){
      let users = request.response
      var data = ""
      for(user of users){
         data += 
         `
         <div class="info " onclick="userClicked(${user.id},this)">
         <h3>${user.name}</h3>
         <p>${user.email}</p>
       </div>
         `
      }
      document.querySelector(".start-side").innerHTML = data
   }else {
    alert("Error")
   }
  }
}

function userClicked(id,ele){
getPosts(id)
document.querySelectorAll(".info").forEach(ele => {
  ele.classList.remove("selected")
  })
ele.classList.add("selected")
// document.querySelectorAll(".info")[id-1].classList.add("selected")
}
getUsers()



