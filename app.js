// console.log(firebase);

document.querySelector("#submit").addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let color = document.querySelector("#favcolor").value;

  let user = {
    name: name,
    age: parseInt(age),
    color: color,
  };

  //   console.log(user);

  // save the user into the DB
  db.collection("mypeople")
    .add(user)
    .then(() => {
      alert("New user added!");
      show_people();
    });
});

// show people stored in our DB

function show_people() {
  // data retrieval
  db.collection("mypeople")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;
      //   loop though the docs array
      docs.forEach((d) => {
        // console.log(d.data().name);
        html += `<p class="p-3">${d.data().name} is ${
          d.data().age
        } years old. <span class="subtitle m-4">${d.id}</span> 
        <button class="button is-danger is-pulled-right" onclick="del_doc('${
          d.id
        }')">X</button>
        
        </p>`;
      });
      //   console.log(html);

      document.querySelector("#all_people").innerHTML = html;
    });
}

// call the function
show_people();

// delete the user test
// delete()

// db.collection("mypeople")
//   .doc("F4DmmZabc1234")
//   .delete()
//   .then(() => {
//     alert("user deleted");
//   });

function del_doc(docid) {
  db.collection("mypeople")
    .doc(docid)
    .delete()
    .then(() => {
      alert("user deleted");
      show_people();
    });
}

//  show all people whose name is sally

// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people whose name is sally and red is their favorite color

// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .where("color", "==", "red")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people whose name is sally and is older than 25 years old

// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .where("age", ">=", 55)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// update()

// update doc ID to change sally's age to 31
// age field is a number

// db.collection("mypeople").doc("RFitLTrjuAGC9NZMTNdJ").update({
//   age: 31,
// });

// update favorite color to black

// db.collection("mypeople").doc("RFitLTrjuAGC9NZMTNdJ").update({
//   color: "black",
// });

// add peter and kristen as sally's friends
// db.collection("mypeople")
//   .doc("RFitLTrjuAGC9NZMTNdJ")
//   .update({
//     friends: ["peter", "kristen"],
//   });

// add IS424 a a course that sally completed

// db.collection("mypeople")
//   .doc("YmOgmEGK5Qs7f8iAd6By")
//   .update({
//     courses: ["is424"],
//   });

// sally completed is365, update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("YmOgmEGK5Qs7f8iAd6By")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
//   });

// sally completed is422

// db.collection("mypeople")
//   .doc("YmOgmEGK5Qs7f8iAd6By")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is422"),
//   });

// arrayRemove() => remove elements from a field of type array
// remove is422 from the courses sally completed

// db.collection("mypeople")
//   .doc("YmOgmEGK5Qs7f8iAd6By")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayRemove("is422"),
//   });

// mike completed is365, update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("XC4P7OTrz4vvikL6kzqW")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
//   });

// john completed is365, is424 update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("aGj3dcl3Le3H4vyDk6zr")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is424"),
//   });

// we want to know those students who completed is424 and their name is sally

// db.collection("mypeople")
//   .where("courses", "array-contains", "is424")
//   .where("name", "==", "sally")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show the names of those who cmpleted either is424 or is400

// db.collection("mypeople")
//   .where("courses", "array-contains-any", ["is424", "is400", "is365", "is777"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all users with the name sally (consider uppercase) - sally vs Sally

// db.collection("mypeople")
//   .where("name", "in", ["Sally", "sally", "SALLY", "mike", "Mike"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all users other than sally

// db.collection("mypeople")
//   .where("name", "not-in", ["Sally", "sally", "SALLY"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// sally has soccer as her favourite sport, pizza as her favourite food, madison as her favourite city

// db.collection("mypeople")
//   .doc("YmOgmEGK5Qs7f8iAd6By")
//   .update({
//     favourites: {
//       city: "madison",
//       food: "pizza",
//       sport: "soccer",
//       number: 10,
//     },
//   });

// update sally's favourites so that 7 is her favourite number
// sallly's other favourites will remain the same

// db.collection("mypeople").doc("YmOgmEGK5Qs7f8iAd6By").update({
//   "favourites.number": 7,
// });

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

// all teams in spain

// db.collection("teams")
//   .where("country", "==", "spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams in Madrid, Spain

// db.collection("teams")
//   .where("country", "==", "spain")
//   .where("city", "==", "madrid")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all national teams

// db.collection("teams")
//   .where("name", "in", ["argentina national team", "brazil national team"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams not in spain

// db.collection("teams")
//   .where("country", "not-in", ["spain"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams not in spain or england

// db.collection("teams")
//   .where("country", "not-in", ["spain", "england"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams in spain with more than 700M fans

// db.collection("teams")
//   .where("country", "==", "spain")
//   .where("fans_count", ">=", 700)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams with fans in the range of 500M and 600M

// db.collection("teams")
//   .where("fans_count", ">=", 500)
//   .where("fans_count", "<=", 600)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams where Ronaldo is a top scorer

// db.collection("teams")
//   .where("top_scorers", "array-contains", "ronaldo")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// all teams where Ronaldo, Maradona, or Messi is a top scorer

// db.collection("teams")
//   .where("top_scorers", "array-contains-any", ["ronaldo", "maradona", "messi"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no result
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

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
