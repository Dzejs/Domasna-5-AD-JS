let tbody = document.getElementById("tbody");
let wrapper = document.getElementById("wrapper");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");
let number8 = document.getElementById("number8");
let number9 = document.getElementById("number9");
let number10 = document.getElementById("number10");
let table = document.getElementById("table");


function helperFunction(data, search1, id) {
    data.forEach(person => {
        if (person.id === id) {
            const keys = Object.keys(person);
            keys.forEach(key => {
                if (search1.value.toLowerCase() === key) {
                    if (typeof person[key] !== "object") {
                        table.innerHTML = `<tr> <th>You searched for ${search1.value} </th> </tr>`;
                        table.innerHTML += `<tr> <td> ${person[key]} </td> </tr>`;
                    }
                }
                else if (search1.value.toLowerCase() === "address") {
                    table.innerHTML = `<tr> <th>You searched for ${search1.value} </th> </tr>`;
                    for (const nestedPerson1 in person.address) {
                        if (typeof person.address[nestedPerson1] === "string") {
                            table.innerHTML += `<tr> <td> ${person.address[nestedPerson1]} </td> </tr>`;
                        }
                        else {
                            for (const nestedPerson2 in person.address.geo) {
                                table.innerHTML += `<tr> <td> ${person.address.geo[nestedPerson2]} </td> </tr>`;
                            }
                        }
                    }
                }
                else if (search1.value.toLowerCase() === "company") {
                    table.innerHTML = `<tr> <th>You searched for ${search1.value} </th> </tr>`;
                    for (const nestedPerson3 in person.company) {
                        table.innerHTML += `<tr> <td> ${person.company[nestedPerson3]} </td> </tr>`;
                    }
                }
                else{
                    table.innerHTML =`<h1>There is no such string try again please </h1>`
                }
            })
        }
    })
}


function printData(data) {

    data.forEach((person, index) => {
        if (index === 0) {
            number1.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search1"> <input type ="submit" id="submit1">
            </td>
            `;
            let search1 = document.getElementById("search1");
            let submit1 = document.getElementById("submit1");
            let id = 1;
            submit1.addEventListener("click", () => {
                helperFunction(data, search1, id);
            })
        }
        if (index === 1) {
            number2.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search2"> <input type ="submit" id="submit2">
            </td>
            `;
            let search2 = document.getElementById("search2");
            let submit2 = document.getElementById("submit2");
            let id = 2;
            submit2.addEventListener("click", () => {
                helperFunction(data, search2, id);
                refreshBtn()
            })

        }
        if (index === 2) {
            number3.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search3"> <input type ="submit" id="submit3">
            </td>
            `;
            let search3 = document.getElementById("search3");
            let submit3 = document.getElementById("submit3");
            let id = 3;
            submit3.addEventListener("click", () => {
                helperFunction(data, search3, id);
            })
        }
        if (index === 3) {
            number4.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search4"> <input type ="submit" id="submit4">
            </td>
            `;
            let search4 = document.getElementById("search4");
            let submit4 = document.getElementById("submit4");
            let id = 4;
            submit4.addEventListener("click", () => {
                helperFunction(data, search4, id);
            })
        }
        if (index === 4) {
            number5.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search5"> <input type ="submit" id="submit5">
            </td>
            `;
            let search5 = document.getElementById("search5");
            let submit5 = document.getElementById("submit5");
            let id = 5;
            submit5.addEventListener("click", () => {
                helperFunction(data, search5, id);
            })
        }
        if (index === 5) {
            number6.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search6"> <input type ="submit" id="submit6">
            </td>
            `;
            let search6 = document.getElementById("search6");
            let submit6 = document.getElementById("submit6");
            let id = 6;
            submit6.addEventListener("click", () => {
                helperFunction(data, search6, id);
            })
        }
        if (index === 6) {
            number7.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search7"> <input type ="submit" id="submit7">
            </td>
            `;
            let search7 = document.getElementById("search7");
            let submit7 = document.getElementById("submit7");
            let id = 7;
            submit7.addEventListener("click", () => {
                helperFunction(data, search7, id);
            })
        }
        if (index === 7) {
            number8.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search8"> <input type ="submit" id="submit8">
            </td>
            `;
            let search8 = document.getElementById("search8");
            let submit8 = document.getElementById("submit8");
            let id = 8;
            submit8.addEventListener("click", () => {
                helperFunction(data, search8, id);
            })
        }
        if (index === 8) {
            number9.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search9"> <input type ="submit" id="submit9">
            </td>
            `;
            let search9 = document.getElementById("search9");
            let submit9 = document.getElementById("submit9");
            let id = 9;
            submit9.addEventListener("click", () => {
                helperFunction(data, search9, id);
            })
        }
        if (index === 9) {
            number10.innerHTML = `
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>
                <input type ="search" id="search10"> <input type ="submit" id="submit10">
            </td>
            `;
            let search10 = document.getElementById("search10");
            let submit10 = document.getElementById("submit10");
            let id = 10;
            submit10.addEventListener("click", () => {
                helperFunction(data, search10, id);
            })
        }
    });
}



async function getDataFromFetch() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    printData(data)

}

getDataFromFetch()

