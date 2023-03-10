async function getData(uId) {
    let url = "users.json"
    const response = await fetch(url);
    const data = await response.json();
    return data.email;
  }
  
  console.log("start");
  getData("skc").then((email) => {
    console.log("Email id of the user id is: " + email);
    console.log("end");
  }).catch((error) => {
    console.error(error);
  });