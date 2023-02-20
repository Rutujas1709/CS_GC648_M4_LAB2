/*eslint-env browser*/

//Employee Array
let EmployeesArray = [[1256891, "Rutuja S", 0000, "rs@gmail.com", "CEO"],
    [770912814, "Mugdha J", 0101, "mj@gmail.com", "Data Analyst"],
    [968912124, "Payal K", 2101, "pk@vectagmail.com", "Developer"],
    [858744234, "Karisma K ", 2356, "kk@gmail.com", "Manager"],
    [992261766, " Shruti R", 1205, "sr@vgmail.com", "Senior Developer"]]

//Storing Data
if (localStorage.getItem('employees') !== null) {
    EmployeesArray = JSON.parse(localStorage.getItem('employees'))
}

let addform       = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')
Gridbuilding()

// Adding Data
addform.addEventListener('submit', (e) => {
    e.preventDefault();
    let empID       = parseInt(document.getElementById('id').value)
    let empName     = document.getElementById('name').value
    let empExt      = parseInt(document.getElementById('extension').value)
    let empEmail    = document.getElementById('email').value
    let empDept     = document.getElementById('department').value
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    EmployeesArray.push(arrNewEmployee)
    Gridbuilding()
    addform.reset()
    addform.id.focus()
})

//Removing Data
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Please confirm that you want to delete this employee from the system?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            EmployeesArray.splice(rowIndex - 1, 1)
            Gridbuilding()
        }
    }
})

// Building the Grid

function Gridbuilding() {
    empTable.lastElementChild.remove()
    let tbody = document.createElement('tbody')
    for (let employee of EmployeesArray) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `}
empTable.appendChild(tbody);
empCount.value = `(${EmployeesArray.length})`

//Storing Data
    
localStorage.setItem('employees', JSON.stringify(EmployeesArray))
}
