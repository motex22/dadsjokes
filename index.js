const btnEl = document.getElementById("btn");
const jokeE1 = document.getElementById("joke")

const apikey= "u2DOZFN4PcsjqGq+t7o8pQ==y34Ub4IaXOx5teUC";
const options= {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";


 async function getjoke() {
  try{
    jokeE1.innerText= "updating....";
     btnEl.disabled = true;
     btnEl.innerText = "loading....";
     const response =  await fetch (apiURL, options);
      const data = await response.json();

      btnEl.disabled = false;
      btnEl.innerText = "Tell me a joke";

    jokeE1.innerText = data[0].joke;
  } catch (error){
    jokeE1.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log (error);
    }
}

btnEl.addEventListener("click", getjoke);