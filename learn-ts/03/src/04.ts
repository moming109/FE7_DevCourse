//타입 별칭 연습문제
{
  //1번
  type Person = {
    name: string;
    age: number;
  };
  const getPersonInfo = (p1: Person): void => console.log(p1);
  const p1: Person = { name: "kim", age: 20 };
  getPersonInfo(p1);
}

{
  //code
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(host: string, port: number, ssl: boolean): Config {
    const config1: Config = {
      host: host,
      port: port,
      ssl: ssl,
    };
    return config1;
  }
  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(r: Rectangle): number {
    return r.width * r.height;
  }

  const r1: Rectangle = {
    width: 5,
    height: 10,
  };
  console.log(calculateArea(r1));
}

{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(st1: Student): number {
    const gradeSum = st1.grades.reduce((sum, grade) => sum + grade, 0);
    return gradeSum / st1.grades.length;
  }

  const st1: Student = {
    name: "minkyeong",
    age: 25,
    grades: [20, 100, 90, 50],
  };
  console.log(calculateAverageGrade(st1));
}

{
  type Response2 = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(
    status: string,
    data: string,
    message: string
  ): Response2 {
    return { status: status, data: data, message: message };
  }

  console.log(createResponse("success", "John", "fetch success"));
  // { status: 'success', data: 'John', message: 'fetch success'
}

{
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(e: Employee): string {
    return `${e.name} works as a ${e.position} with ID: ${e.id}.`;
  }

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  //code
  type Circle = {
    radius: number;
  };
  function calculateCircumference(c: Circle): number {
    return c.radius * 2 * Math.PI;
  }

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  //code
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(p: Product, discount: number): number {
    return p.price - p.price * (discount / 100);
  }

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}
{
  //code..
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function getBookSummary(b: Book): string {
    return `${b.title} by ${b.author}, published in ${b.publishedYear}.`;
  }

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
  // "river by james, published in 2020."
}

{
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(t: Transaction): boolean {
    return t.amount > 0;
  }

  console.log(
    isValidTransaction({ id: "ming", amount: 20, timestamp: "0909" })
  );
}
