class Employees {
  constructor(
    username,
    fullName,
    email,
    password,
    workDay,
    wage,
    position,
    workHours
  ) {
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.workDay = workDay;
    this.wage = wage;
    this.position = position;
    this.workHours = workHours;
  }

  totalWage() {
    let totalWage;
    if (this.position == "Sếp") {
      totalWage = this.wage * 3;
    } else if (this.position == "Trưởng phòng") {
      totalWage = this.wage * 2;
    } else if (this.position == "Nhân viên") {
      totalWage = this.wage;
    }
    return totalWage;
  }
  rating() {
    let workHours = this.workHours;
    let rate = "";
    workHours >= 192
      ? (rate = "Xuat sac")
      : workHours >= 176
      ? (rate = "Gioi")
      : workHours >= 160
      ? (rate = "Kha")
      : (rate = "Trung Binh");

    return rate;
  }
}
