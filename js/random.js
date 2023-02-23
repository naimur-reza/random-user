const randomUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => makeCall(data));
};

const makeCall = (data) => {
  const firstId = document.getElementById("first");
  const img = document.getElementById("img");

  firstId.innerHTML = `
  <div id="second" class="  bg-blue-100 py-5 rounded-lg">
  <img src="${data.results[0].picture.large}" id="img" class="rounded-full mx-auto" alt="">
</div>
    <span class="text-lg text-black">Name : </span>  ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} <br>
    <span class="text-lg text-black">Gender : </span> ${data.results[0].gender} <br>
    <span class="text-lg text-black">Email : </span> ${data.results[0].email} <br>
    <span class="text-lg text-black">Age : </span> ${data.results[0].dob.age} <br>
    <span class="text-lg text-black">Street : </span> ${data.results[0].location.street.name}
    `;
  //   firstId.append(makeNew);
  //add image
  const second = document.getElementById("second");
};
randomUser();
