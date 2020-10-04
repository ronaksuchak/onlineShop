const users = [{ username: "ronak", password: "12345", email: "ronaksuchak16@gmail.com", phoneNumber: "1234567890" },
{ username: "ronak", password: "12345", email: "email@codingislife.com", phoneNumber: "1234567890" },
{ username: "abc", password: "12345", email: "abc@gmail.com", phoneNumber: "1234567890" }
];

function drawTable() {
    console.log("called!!");
    var container = document.getElementById('table-container');

    let th = `<table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">PhoneNumber</th>
      </tr>
    </thead>
    <tbody>`;
    console.log("cont=\n" + container);
    console.log("th=\n" + th);


    for (let i = 0; i < users.length; i++) {
        th +=
            `<tr>
        <th scope="row">${i}</th>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phoneNumber}</td>
      </tr>`;
    }
    th += `</tbody>\n</table>`;
    console.log(th);
    container.innerHTML = th;

}


