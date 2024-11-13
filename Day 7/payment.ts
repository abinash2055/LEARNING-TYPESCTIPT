// function created to export data as a function methods for import and export

export function addPayments(val: number) {
  console.log(val);
}
export function getDetails() {}

// for default export methods as a class creation
export default class Payment {
  constructor(public price: number) {}
}
