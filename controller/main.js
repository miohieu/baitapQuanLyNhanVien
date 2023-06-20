//QLSV
//View
const dsnv = new EmployeesList();

function getElement(selector) {
  return document.querySelector(selector);
}

const renderEmployeeList = (list = dsnv.employeeList) => {
  let contentTable = "";
  list.map((e) => {
    contentTable += `
            <tr> 
            <td> ${e.username}</td>
            <td> ${e.fullName}</td>
            <td> ${e.email}</td>
            <td> ${e.workDay}</td>
            <td> ${e.position}</td>
            <td> ${e.totalWage()}</td>
            <td> ${e.rating()}</td>
          <td> 
            <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editTable('${
              e.username
            }')">
            Edit
            </button> 
        <button class="btn btn-danger" onclick="deleteEployees('${
          e.username
        }')">
            Delete
         </button> 

            </td>
            </tr>`;
  });
  getElement("#tableDanhSach").innerHTML = contentTable;
};
function getInfo() {
  let username = getElement("#tknv").value;
  let fullName = getElement("#name").value;
  let email = getElement("#email").value;
  let password = getElement("#password").value;
  let workDay = getElement("#datepicker").value;
  let wage = Number(getElement("#luongCB").value);
  let position = getElement("#chucvu").value;
  let workHours = Number(getElement("#gioLam").value);

  let object = new Employees(
    username,
    fullName,
    email,
    password,
    workDay,
    wage,
    position,
    workHours
  );
  return object;
}

getElement("#btnThemNV").onclick = function addEmployees() {
  let employee = getInfo();
  isValid = false;
  //Username
  isValid =
    notNullCheck(
      employee.username,
      "#tbTKNV",
      "Ten nhan vien ko duoc de trong"
    ) && checkStringLength(
      employee.username,
      "#tbTKNV",
      6,
      10,
      "Ten nhan vien phai tu 6-10 ki tu"
    );
  console.log(isValid);
  if (isValid) {
    dsnv.addEmployee(employee);
    renderEmployeeList();
    setItem();
  }
};

function deleteEployees(keyValue) {
  dsnv.deleteEmployee(keyValue);

  renderEmployeeList();
  setItem();
}

function editTable(username) {
  let index = dsnv.findEmployee(username);
  getElement("#tknv").value = dsnv.employeeList[index].username;
  getElement("#name").value = dsnv.employeeList[index].fullName;
  getElement("#email").value = dsnv.employeeList[index].email;
  getElement("#password").value = dsnv.employeeList[index].password;
  getElement("#datepicker").value = dsnv.employeeList[index].workDay;
  getElement("#luongCB").value = dsnv.employeeList[index].wage;
  getElement("#chucvu").value = dsnv.employeeList[index].position;
  getElement("#gioLam").value = dsnv.employeeList[index].workHours;
}

//update
const btnUpdate = getElement("#btnCapNhat");
btnUpdate.onclick = function updateTable() {
  let employee = getInfo();
  dsnv.updateEmployee(employee);

  renderEmployeeList();
  setItem();
};

//store data

function setItem() {
  localStorage.setItem("NHANVIEN", JSON.stringify(dsnv.employeeList));
}

(function getItem() {
  let dataEmployee = JSON.parse(localStorage.getItem("NHANVIEN"));
  //
  const array = [];
  dataEmployee.map((e) => {
    let employeeObj = new Employees(
      (username = e.username),
      (fullName = e.fullName),
      (email = e.email),
      (password = e.password),
      (workDay = e.workDay),
      (wage = e.wage),
      (position = e.position),
      (workHours = e.workHours)
    );
    array.push(employeeObj);
  }); // moi element(e) trong mang? dataEmployee se tao ra 1 object moi inheritance tu class Employees

  dsnv.employeeList = array;
  renderEmployeeList();
})();
// Mentor thong cam tuan nay em benh qua' ko hoan thanh bai voi viet Doc kip T.T
