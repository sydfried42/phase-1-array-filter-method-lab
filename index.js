// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, searchString) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === searchString.toLowerCase()
    }); 
};

function fuzzyMatch(drivers, initials) {
    return drivers.filter(driver => {
        return driver.startsWith(initials);
    });
};

function matchName(drivers, something) {
    return drivers.filter(driver => {
        return driver.name === something
    });
};