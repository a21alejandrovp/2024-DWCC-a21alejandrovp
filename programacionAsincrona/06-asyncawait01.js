// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
//
// loadJson("https://no-such-user.json").catch(console.log);

async function loadJson(url) {
  const response = await fetch(url);
  console.log(response.status);

  if (response.status == 200) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("https://no-such-user.json").catch(console.log);
