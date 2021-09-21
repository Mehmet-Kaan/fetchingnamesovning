

let fetchBox = document.createElement("div");
fetchBox.classList.add("box");

let inText = document.createElement("p");
inText.innerText = "Fetches";

let innerBox = document.createElement("div");
innerBox.classList.add("innerBox");

fetchBox.append(inText,innerBox);

let numberBox = document.createElement("div");
numberBox.classList.add("box");

let inNumber = document.createElement("p");
inNumber.innerText = "Names";

let innerNumber = document.createElement("div");
innerNumber.classList.add("innerNumber");

numberBox.append(inNumber,innerNumber);

document.querySelector("#upDiv").append(fetchBox,numberBox);

let nameBox = document.createElement("div");
nameBox.classList.add("nameBox")

document.querySelector("#downDiv").append(nameBox);


    function getName(){

        fetches++;
        document.querySelector(".innerBox").textContent = fetches;

        fetch("https://randomuser.me/api/?gender=female&nat=se")
        .then(responce => responce.json())
        .then(data => {
            let {results} = data;
            const name = results[0].name.first;

            nameBox.innerHTML = "";
            nameBox.textContent = name;

            if(!names.includes(name)){
          
                    names.push(name);
                    document.querySelector(".innerNumber").textContent = names.length;
                    nameBox.style.backgroundColor = "lightgreen";
            

                }else{
                    nameBox.style.backgroundColor = "red";
                    
            }
                if (names.length < 50){
                    getName();
                }else{
                    done ();
                }
            })
            .catch(error => console.log(error));
}

function done (){
    names.sort((a,b) => a > b).forEach(n => console.log(n))
    console.log("Antal Fetchs: " + fetches);
}

let names = []; 
let fetches = 0;
getName();