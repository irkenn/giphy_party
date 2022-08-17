console.log("Let's get this party started!");

const form = document.querySelector("#giphy-form"); 
const textInput = document.querySelector("#text-input"); 
const submitButton = document.querySelector("#submit-button"); 
const removeButton = document.querySelector("#remove-button"); 
const appendSection = document.querySelector("#append-section");

function changeCurrenttUser(APIKey){
    const currentUserKey = APIKey;
    return currentUserKey;
}

//being able to change the current API key
changeCurrenttUser("e9OZysQbL8UOojiKXXTaeEB7tT4z06sM");

function createImg(url){
    const img = document.createElement("img");
    img.className = "img";
    img.src = url;
    return img;
};
//get the URL of the search term
async function getGifUrl(keyword){
    let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=e9OZysQbL8UOojiKXXTaeEB7tT4z06sM&q=${keyword}&limit=1&offset=0&rating=g&lang=en`);
    response = response.data.data[0].images.original.url;  
    return response;
};

function createDiv(){
    const div = document.createElement("div");
    div.className = "appended-div";
    return div;
}

//form event listener
form.addEventListener("submit", async function(e){
    e.preventDefault();
    
    if (e.submitter.id === "submit-button"){
        const url = await getGifUrl(textInput.value);
        const img = createImg(url);
        const div = createDiv();
        div.append(img);
        appendSection.append(div);
        textInput.value = "";      
    }

    else if (e.submitter.id === "remove-button"){
        const divs = document.querySelectorAll(".appended-div");
        console.log(divs);
        for (let div of divs){
            div.remove();
        }
    }
});



