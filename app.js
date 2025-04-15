// console.log(firebase);

// document.querySelector("#submit").addEventListener("click", () => {
//   let name = document.querySelector("#name").value;
//   let age = document.querySelector("#age").value;
//   let color = document.querySelector("#favcolor").value;

//   let user = {
//     name: name,
//     age: parseInt(age),
//     color: color,
//   };

//   //   console.log(user);

//   // save the user into the DB
//   db.collection("mypeople")
//     .add(user)
//     .then(() => {
//       alert("New user added!");
//       show_people();
//     });
// });

// show people stored in our DB

// function show_people() {
//   // data retrieval
//   db.collection("mypeople")
//     .get()
//     .then((mydata) => {
//       let docs = mydata.docs;

//       let html = ``;
//       //   loop though the docs array
//       docs.forEach((d) => {
//         // console.log(d.data().name);
//         html += `<p class="p-3">${d.data().name} is ${
//           d.data().age
//         } years old. <span class="subtitle m-4">${d.id}</span>
//         <button class="button is-danger is-pulled-right" onclick="del_doc('${
//           d.id
//         }')">X</button>

//         </p>`;
//       });
//       //   console.log(html);

//       document.querySelector("#all_people").innerHTML = html;
//     });
// }

// // call the function
// show_people();

// delete the user test
// delete()

// db.collection("mypeople")
//   .doc("F4DmmZabc1234")
//   .delete()
//   .then(() => {
//     alert("user deleted");
//   });

// function del_doc(docid) {
//   db.collection("mypeople")
//     .doc(docid)
//     .delete()
//     .then(() => {
//       alert("user deleted");
//       show_people();
//     });
// }

function r_e(id) {
  return document.querySelector(`#${id}`);
}

// In-Class Activity

// Task 1

let rm = {
  name: "atletico madrid",
  city: "madrid",
  country: "spain",
  top_scorers: ["argones", "griezmann", "torez"],
  fans_count: 400,
};

// add to database
// db.collection("teams").add(rm);

// Task 2

// 1. all teams in spain
function spain_teams() {
  db.collection("teams")
    .where("country", "==", "spain")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";

      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }
      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("spain").innerHTML = html;
    });
}

spain_teams();

// 2. all teams in Madrid, Spain
function madrid_spain() {
  db.collection("teams")
    .where("country", "==", "spain")
    .where("city", "==", "madrid")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }
      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("madrid_spain").innerHTML = html;
    });
}

madrid_spain();

// 3. all national teams
function national() {
  db.collection("teams")
    .where("name", "in", ["argentina national team", "brazil national team"])
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("national").innerHTML = html;
    });
}

national();

// 4. all teams not in spain
function not_spain() {
  db.collection("teams")
    .where("country", "not-in", ["spain"])
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("not_spain").innerHTML = html;
    });
}

not_spain();

// 5. all teams not in spain or england
function not_spain_eng() {
  db.collection("teams")
    .where("country", "not-in", ["spain", "england"])
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("not_spain_eng").innerHTML = html;
    });
}

not_spain_eng();

// 6. all teams in spain with more than 700M fans
function spain_700() {
  db.collection("teams")
    .where("country", "==", "spain")
    .where("fans_count", ">=", 700)
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("spain_700").innerHTML = html;
    });
}

spain_700();

// 7. all teams with fans in the range of 500M and 600M
function fans_500_600() {
  db.collection("teams")
    .where("fans_count", ">=", 500)
    .where("fans_count", "<=", 600)
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("fans_500_600").innerHTML = html;
    });
}

fans_500_600();

// 8. all teams where Ronaldo is a top scorer
function ronaldo() {
  db.collection("teams")
    .where("top_scorers", "array-contains", "ronaldo")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("ronaldo").innerHTML = html;
    });
}

ronaldo();

// 9. all teams where Ronaldo, Maradona, or Messi is a top scorer
function ronaldo_maradona_messi() {
  db.collection("teams")
    .where("top_scorers", "array-contains-any", [
      "ronaldo",
      "maradona",
      "messi",
    ])
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";
      if (mydocs.length == 0) {
        html = "<p>No teams found</p>";
      } else {
        mydocs.forEach((d, i) => {
          let team = d.data();
          html += `<p>${i + 1}. ${team.name}</p>`;
        });
      }

      // mydocs.forEach((d) => {
      //   console.log(d.data());
      // });
      r_e("ronaldo_maradona_messi").innerHTML = html;
    });
}

ronaldo_maradona_messi();

// Task 3

// update fans
// 1.
// db.collection("teams").doc("oNRhOC8HcKdG4b1VwXD1").update({
//   name: "real madrid fc",
//   fans_count: 811,
// });

// 2.
// db.collection("teams").doc("pqkiGYPom5fw6JhjDi17").update({
//   name: "fc barcelona",
//   fans_count: 747,
// });

// update scorers
// 1.
// Remove hazard
// db.collection("teams")
//   .doc("oNRhOC8HcKdG4b1VwXD1")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("hazard"),
//   });

// Add crispo
// db.collection("teams")
//   .doc("oNRhOC8HcKdG4b1VwXD1")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("crispo"),
//   });

// 2.
// Remove puyol
// db.collection("teams")
//   .doc("pqkiGYPom5fw6JhjDi17")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("puyol"),
//   });

// Add deco
// db.collection("teams")
//   .doc("pqkiGYPom5fw6JhjDi17")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("crispo"),
//   });

// b.
// jersey colors madrid
// db.collection("teams")
//   .doc("oNRhOC8HcKdG4b1VwXD1")
//   .update({
//     color: {
//       home: "white",
//       away: "black",
//     },
//   });

// jersey colors barcelona
// db.collection("teams")
//   .doc("pqkiGYPom5fw6JhjDi17")
//   .update({
//     color: {
//       home: "red",
//       away: "gold",
//     },
//   });

// c.
// update madrid colors
// db.collection("teams").doc("oNRhOC8HcKdG4b1VwXD1").update({
//   "color.away": "purple",
// });

// d.
// update barcelona colors
// db.collection("teams").doc("pqkiGYPom5fw6JhjDi17").update({
//   "color.away": "pink",
// });

function madrid() {
  const teamId = "oNRhOC8HcKdG4b1VwXD1";

  db.collection("teams")
    .doc(teamId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        r_e("madrid").innerHTML = "<p> Team not found. </p>";
      } else {
        let team = doc.data();
        let html = `<p>Name: ${team.name}</p> <p>Fans: ${team.fans_count}</p> <p>City: ${team.city}</p> <p>Country: ${team.country}</p> <p>Color: Away: ${team.color.away} Home: ${team.color.home}</p> <p>Scorers: ${team.top_scorers}</p>`;
        r_e("madrid").innerHTML = html;
      }
    });
}

madrid();

function barcelona() {
  const teamId = "pqkiGYPom5fw6JhjDi17";

  db.collection("teams")
    .doc(teamId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        r_e("barcelona").innerHTML = "<p> Team not found. </p>";
      } else {
        let team = doc.data();
        let html = `<p>Name: ${team.name}</p> <p>Fans: ${team.fans_count}</p> <p>City: ${team.city}</p> <p>Country: ${team.country}</p> <p>Color: Away: ${team.color.away} Home: ${team.color.home}</p> <p>Scorers: ${team.top_scorers}</p>`;
        r_e("barcelona").innerHTML = html;
      }
    });
}

barcelona();
