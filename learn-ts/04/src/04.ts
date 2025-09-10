// 이넘 연습문제+
// 1번
{
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }
  console.log(getDayName(7));
}

// 2번
{
  enum StatusMessage {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: StatusMessage): string {
    if (status === StatusMessage.SUCCESS) return "Success";
    if (status === StatusMessage.NOT_FOUND) return "Not Found";
    if (status === StatusMessage.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

//3번
{
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: City): string {
    if (zip === City.SEOUL) return City.SEOUL;
    if (zip === City.BUSAN) return City.BUSAN;
    if (zip === City.DAEGU) return City.DAEGU;
    return "Unknown City";
  }
}
//4
{
  enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: Role): string {
    if (role === Role.ADMIN) return "Full access";
    if (role === Role.USER) return "Limited access";
    if (role === Role.GUEST) return "Guest access";
    return "No access";
  }
}
//5
{
  enum Status {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

//6
{
  enum Order {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Order): string {
    if (status === Order.ORDER_PLACED) return "Your order has been placed.";
    if (status === Order.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Order.SHIPPED) return "Your order has been shipped.";
    if (status === Order.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

//7
{
  const enum Active {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: Active): boolean {
    if (status === Active.IS_ACTIVE) return false;
    else return true;
  }
}

//8
{
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

//9
{
  enum MealTime {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: MealTime): string {
    if (meal === MealTime.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

//10
{
  enum LoginStatus {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
//10+ as const를 사용함.
{
  const LoginStatus = {
    LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT",
  } as const;

  type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];
  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
