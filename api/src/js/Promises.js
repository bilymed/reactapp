// const fetchUrl = async () => {
//     let response =  await fetch("https://dog.ceo/api/breed/hound/list")
//     let body = await response.json();
//     console.log(body)
// }
// fetchUrl()

fetch("https://dog.ceo/api/breed/hound/list").then((value) => {console.log(value)})
