// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// 1. Filter inventors born in the 1500s
export function myfilter() {
    let filteredArray = inventors.filter((obj) => {
        if (obj.year >= 1500 && obj.year < 1600) {
            return true;
        } else {
            return false;
        }
    });
    return filteredArray;
}

// 2. Create array of full names
export function map() {
    let mappedArray = inventors.map((obj) => {
        return obj.first + " " + obj.last;
    });
    return mappedArray;
}

// 3. Sort inventors oldest to youngest
export function sort() {
    let sortedArray = inventors.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
    return sortedArray;
}

// 4. Total years lived by all inventors
export function reduce() {
    let totalYears = inventors.reduce((acc, obj) => {
        return acc + (obj.passed - obj.year);
    }, 0);
    return totalYears;
}

// 5. Sort inventors by years lived
export function sortbylived() {
    let sortedArray = inventors.sort((a, b) => {
        let livedA = a.passed - a.year;
        let livedB = b.passed - b.year;

        if (livedA < livedB) {
            return 1;
        } else {
            return -1;
        }
    });
    return sortedArray;
}

// 6. Sort people alphabetically by last name
export function sortByLastName() {
    let sortedPeople = people.sort((a, b) => {
        let lastA = a.split(", ")[0];
        let lastB = b.split(", ")[0];

        if (lastA > lastB) {
            return 1;
        } else {
            return -1;
        }
    });
    return sortedPeople;
}

// 7. Count occurrences in data array
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

export function reducedSum() {
    let result = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
        return obj;
    }, {});
    return result;
}
