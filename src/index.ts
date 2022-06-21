type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
};

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
// Use optional property access operator instead
    console.log(customer?.birthday?.getFullYear);