var customerName = "bob";

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = "not bob";
}
setBestCustomer(bestCustomer);

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

overwriteBestCustomer(bestCustomer);



function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "Tim";
    leastFavoriteCustomer = "David"
}

changeLeastFavoriteCustomer()