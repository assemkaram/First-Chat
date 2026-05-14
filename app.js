let main = document.querySelector(".posts-info");

let input=document.querySelector(".searc")


function getdata(url){
    main.innerHTML=" ";
fetch(url)
.then(res => res.json())
.then((data) => {
    let posts = data.posts;
    posts.map((post)=> {
        main.innerHTML += `
        <div class="post">
        <h2 class="title">${post.title}</h2>
        <p>${post.body}</p>
        <div class="tags">
            ${
                post.tags.map((tag) => {
                    return `<span># ${tag}</span>`
                }).join(" ")
            }
        </div>
        <div class="reactions">
            <span><i class="fa-solid fa-heart"></i> ${post.reactions.likes}</span>
            <span><i class="fa-regular fa-thumbs-down"></i> ${post.reactions.dislikes}</span>
            <span><i class="fa-solid fa-eye"></i> ${post.views}</span>
        </div>
        `
    })
});
}
getdata("https://dummyjson.com/posts");

input.addEventListener("input",()=>{
    let s=input.value;
    getdata(`https://dummyjson.com/posts/search?q=${s}`);
})