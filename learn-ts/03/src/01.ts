{
  const printValue = (value: string | number) => {
    console.log(value);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

{
  const doubleOrLength = (value: string | number) => {
    if (typeof value === "string") return value.length;
    else if (typeof value === "number") return value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
  const mergeObjects = (
    person: { name: string } & { age: number },
    employee: { jobTitle: string } & { salary: number }
  ) => {
    //강사님 코드
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}
{
  const getFirstElement = (
    element: number[] | string[]
  ): number | string | undefined => {
    // const e = element[0];
    // if(typeof e === "number" || typeof e === "string") return e;
    // else return undefined;
    //강사님 코드
    return element[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  const isEqual = (value1: number | string, value2: number | string) => {
    // if(typeof value1 === typeof value2){
    //   if(value1 === value2) return true;
    //   else return false;
    // }
    // else return false;

    //타입가드 필요없다.
    return value1 === value2;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  const updateAddress = (
    person: { name: string; age: number },
    str?: string
  ): { name: string; age: number; str?: string } => {
    if (str) {
      return { ...person, str };
    }
    return person;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

{
  const maxValue = (
    value1: number | string,
    value2: number | string
  ): number | string => {
    if (typeof value1 === "string" && typeof value2 === "string") {
      return value1.length > value2.length ? value1 : value2;
    } else return value1 > value2 ? value1 : value2;
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

{
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    return value.toString();
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  const createContact = (
    person: { name: string; age: number },
    contact: { email: string }
  ) => {
    return { ...person, ...contact };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
  const getAge = (age: number | string): number => {
    if (typeof age === "string") return parseInt(age);
    return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
