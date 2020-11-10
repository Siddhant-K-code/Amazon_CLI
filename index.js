//Amazon Scraper
const amazonScraper = require('amazon-buddy');

//Console Colors
const colors = require('colors/safe');

//Console Input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Initialization Prompt (Override at Start)
//Initialization Variables
var varCountry = {
    key: 'GB',
    value: {
        name: 'United Kingdom',
        currency: 'GBP'
    }
};
var varCategory = {
    key: 'aps',
    value: {
        name: 'All Departments',
        category: 'aps'
    }
};

let countriesList = [
    'US',
    'AU',
    'BR',
    'CA',
    'CN',
    'FR',
    'DE',
    'IN',
    'IT',
    'MX',
    'NE',
    'SG',
    'ES',
    'TR',
    'AE',
    'GB',
    'JP'
];
let categoriesList = [
    'All Departments',
    'Arts & Crafts',
    'Automotive',
    'Baby',
    'Beauty & Personal Care',
    'Books',
    'Computers',
    'Digital Music',
    'Electronics',
    'Kindle Store',
    'Prime Video',
    "Women's Fashion",
    "Men's Fashion",
    "Girls' Fashion",
    "Boys' Fashion",
    'Deals',
    'Health & Household',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Luggage',
    'Movies and TV',
    'Music, CDs & Vinyl',
    'Pet Supplies',
    'Software',
    'Sports & Outdoors',
    'Tools & Home Improvement',
    'Toys & Games',
    'Video Games'
];

let categories = [{
        key: 'aps',
        value: {
            name: 'All Departments',
            category: 'aps'
        }
    },
    {
        key: 'arts-crafts-intl-ship',
        value: {
            name: 'Arts & Crafts',
            category: 'arts-crafts-intl-ship'
        }
    },
    {
        key: 'automotive-intl-ship',
        value: {
            name: 'Automotive',
            category: 'automotive-intl-ship'
        }
    },
    {
        key: 'baby-products-intl-ship',
        value: {
            name: 'Baby',
            category: 'baby-products-intl-ship'
        }
    },
    {
        key: 'beauty-intl-ship',
        value: {
            name: 'Beauty & Personal Care',
            category: 'beauty-intl-ship'
        }
    },
    {
        key: 'stripbooks-intl-ship',
        value: {
            name: 'Books',
            category: 'stripbooks-intl-ship'
        }
    },
    {
        key: 'computers-intl-ship',
        value: {
            name: 'Computers',
            category: 'computers-intl-ship'
        }
    },
    {
        key: 'digital-music',
        value: {
            name: 'Digital Music',
            category: 'digital-music'
        }
    },
    {
        key: 'electronics-intl-ship',
        value: {
            name: 'Electronics',
            category: 'electronics-intl-ship'
        }
    },
    {
        key: 'digital-text',
        value: {
            name: 'Kindle Store',
            category: 'digital-text'
        }
    },
    {
        key: 'instant-video',
        value: {
            name: 'Prime Video',
            category: 'instant-video'
        }
    },
    {
        key: 'fashion-womens-intl-ship',
        value: {
            name: "Women's Fashion",
            category: 'fashion-womens-intl-ship'
        }
    },
    {
        key: 'fashion-mens-intl-ship',
        value: {
            name: "Men's Fashion",
            category: 'fashion-mens-intl-ship'
        }
    },
    {
        key: 'fashion-girls-intl-ship',
        value: {
            name: "Girls' Fashion",
            category: 'fashion-girls-intl-ship'
        }
    },
    {
        key: 'fashion-boys-intl-ship',
        value: {
            name: "Boys' Fashion",
            category: 'fashion-boys-intl-ship'
        }
    },
    {
        key: 'deals-intl-ship',
        value: {
            name: 'Deals',
            category: 'deals-intl-ship'
        }
    },
    {
        key: 'hpc-intl-ship',
        value: {
            name: 'Health & Household',
            category: 'hpc-intl-ship'
        }
    },
    {
        key: 'kitchen-intl-ship',
        value: {
            name: 'Home & Kitchen',
            category: 'kitchen-intl-ship'
        }
    },
    {
        key: 'industrial-intl-ship',
        value: {
            name: 'Industrial & Scientific',
            category: 'industrial-intl-ship'
        }
    },
    {
        key: 'luggage-intl-ship',
        value: {
            name: 'Luggage',
            category: 'luggage-intl-ship'
        }
    },
    {
        key: 'movies-tv-intl-ship',
        value: {
            name: 'Movies & TV',
            category: 'movies-tv-intl-ship'
        }
    },
    {
        key: 'music-intl-ship',
        value: {
            name: 'Music, CDs & Vinyl',
            category: 'music-intl-ship'
        }
    },
    {
        key: 'pets-intl-ship',
        value: {
            name: 'Pet Supplies',
            category: 'pets-intl-ship'
        }
    },
    {
        key: 'software-intl-ship',
        value: {
            name: 'Software',
            category: 'software-intl-ship'
        }
    },
    {
        key: 'sporting-intl-ship',
        value: {
            name: 'Sports & Outdoors',
            category: 'sporting-intl-ship'
        }
    },
    {
        key: 'tools-intl-ship',
        value: {
            name: 'Tools & Home Improvement',
            category: 'tools-intl-ship'
        }
    },
    {
        key: 'toys-and-games-intl-ship',
        value: {
            name: 'Toys & Games',
            category: 'toys-and-games-intl-ship'
        }
    },
    {
        key: 'videogames-intl-ship',
        value: {
            name: 'Video Games',
            category: 'videogames-intl-ship'
        }
    }
];
let countries = [{
        key: 'US',
        value: {
            name: 'United States',
            currency: 'USD'
        }
    },
    {
        key: 'AU',
        value: {
            name: 'Australia',
            currency: 'AUD'
        }
    },
    {
        key: 'BR',
        value: {
            name: 'Brazil',
            currency: 'BRL'
        }
    },
    {
        key: 'CA',
        value: {
            name: 'Canada',
            currency: 'CAD'
        }
    },
    {
        key: 'CN',
        value: {
            name: 'China',
            currency: 'CNY'
        }
    },
    {
        key: 'FR',
        value: {
            name: 'France',
            currency: 'EUR'
        }
    },
    {
        key: 'DE',
        value: {
            name: 'Germany',
            currency: 'EUR'
        }
    },
    {
        key: 'IN',
        value: {
            name: 'India',
            currency: 'INR'
        }
    },
    {
        key: 'IT',
        value: {
            name: 'Italy',
            currency: 'EUR'
        }
    },
    {
        key: 'MX',
        value: {
            name: 'Mexico',
            currency: 'MXN'
        }
    },
    {
        key: 'NL',
        value: {
            name: 'Netherlands',
            currency: 'EUR'
        }
    },
    {
        key: 'SG',
        value: {
            name: 'Singapore',
            currency: 'SGD'
        }
    },
    {
        key: 'ES',
        value: {
            name: 'Spain',
            currency: 'EUR'
        }
    },
    {
        key: 'TR',
        value: {
            name: 'Turkey',
            currency: 'TRY'
        }
    },
    {
        key: 'AE',
        value: {
            name: 'United Arab Emirates',
            currency: 'AED'
        }
    },
    {
        key: 'GB',
        value: {
            name: 'United Kingdom',
            currency: 'GBP'
        }
    },
    {
        key: 'JP',
        value: {
            name: 'Japan',
            currency: 'JPY'
        }
    }
];

let initPrompt = function(override) {
    if (override == 1) {
        navigation('o1');
    } else {
        readline.question(colors.green(`What do you want to do? \n`), option => {
            navigation(option);
        });
    }
};

//Clear Console
let clear = function() {
    console.clear();
    console.log(colors.yellow.bold('Welcome to the Amazon CLI!'));
    console.log(colors.yellow('Version - BETA'));
    initPrompt(1);
};

//Quit Console
let quit = function(status) {
    console.clear();
    console.log(colors.yellow.bold("Thank's for using the Amazon CLI!"));
    process.exit(status);
};

//Options Page 1
let options1 = function() {
    console.log(colors.white.bold('Options:'));
    console.log(colors.white('o1 ~ Show options 1.'));
    console.log(colors.white('o2 ~ Show options 2.'));
    console.log(colors.white('clear ~ Clear console.'));
    console.log(colors.white('quit ~ Quit console.'));
    console.log(colors.grey.italic('Page 1/2'));
    initPrompt();
};

//Options Page 2
let options2 = function() {
    console.log(colors.white.bold('Options:'));
    console.log(colors.white('setl ~ Set country.'));
    console.log(colors.white('setc ~ Set category.'));
    console.log(colors.white('searchtotal ~ Search for total number of product'));
    console.log(colors.white('searchprice ~ Search for average price of product'));
    console.log(colors.white('searchreview ~ Search for average reviews of product'));
    console.log(colors.white('searchurl ~ Search for product url.'));
    console.log(colors.white('views ~ View your current settings.'));
    console.log(colors.white('viewl ~ View countries & key.'));
    console.log(colors.white('viewc ~ View categories.'));
    console.log(colors.grey.italic('Page 2/2'));
    initPrompt();
};

//Set Country
let countrySet = function() {
    readline.question(
        colors.yellow(`What country would you like to use Amazon in?\n`),
        country => {
            let i;
            for (i = 0; i < countries.length; i++) {
                if (!countriesList.includes(country)) {
                    console.log(colors.red('Not an available country'));
                    return initPrompt();
                } else if (country == countries[i].key) {
                    console.log(
                        colors.green('Country set to: ' + countries[i].value.name)
                    );
                    varCountry = countries[i];
                    return initPrompt();
                } else if (i == countries.length) {
                    console.log(colors.red('Error'));
                    return initPrompt();
                }
            }
        }
    );
};

//Set Category
let categorySet = function() {
    readline.question(
        colors.yellow(`What category would you like to search in?\n`),
        category => {
            let i;
            for (i = 0; i < categories.length; i++) {
                if (!categoriesList.includes(category)) {
                    console.log(colors.red('Not an available category'));
                    return initPrompt();
                } else if (category == categories[i].value.name) {
                    console.log(
                        colors.green('Search category set to: ' + categories[i].value.name)
                    );
                    varCategory = categories[i];
                    return initPrompt();
                } else if (i == categories.length) {
                    console.log(colors.red('Error'));
                    return initPrompt();
                }
            }
        }
    );
};

//View User Settings
let viewSettings = function() {
    console.log(colors.white('Current Country: ' + varCountry.value.name));
    console.log(colors.white('Current Category: ' + varCategory.value.name));
    return initPrompt();
};

//View Categories/Countries
let viewCountries = function() {
    console.log(colors.white.bold('Countries:'));
    let countryArr = [];
    for (i = 0; i < countries.length; i++) {
        countryArr.push({
            name: countries[i].value.name,
            key: countries[i].key
        });
    }
    console.log(countryArr);
    return initPrompt();
};
let viewCategories = function() {
    console.log(colors.white.bold('Categories:'));
    let categoriesArr = [];
    for (i = 0; i < categories.length; i++) {
        categoriesArr.push(categories[i].value.name);
    }
    console.log(categoriesArr);
    return initPrompt();
};

//Interface
let interface = function(input) {
    if (option == 'test') {
        readline.question(
            colors.yellow(`[TESTER] What do you want to look for?\n`),
            product => {
                test(product);
            }
        );
    } else if (option == 'searchtotal') {
        readline.question(
            colors.yellow(`What do you want to look for?\n`),
            product => {
                searchTotalProducts(product);
            }
        );
    } else if (option == 'searchprice') {
        readline.question(
            colors.yellow(`What do you want to look for?\n`),
            product => {
                searchAveragePrice(product);
            }
        );
    } else if (option == 'searchreview') {
        readline.question(
            colors.yellow(`What do you want to look for?\n`),
            product => {
                searchAverageReviews(product);
            }
        );
    } else if (option == 'searchurl') {
        readline.question(
            colors.yellow(`What do you want to look for?\n`),
            product => {
                searchProductURL(product);
            }
        );
    } else {
        console.log(colors.red('Not a choice.\n'));
        initPrompt();
    }
};

//Input Reciever/Redirector
let navigation = function(input) {
    if (typeof input == 'string') {
        option = input.toLowerCase();
    }
    if (option == 'searchtotal') {
        interface(1);
    } else if (option == 'searchprice') {
        interface(2);
    } else if (option == 'searchreview') {
        interface(3);
    } else if (option == 'searchurl') {
        interface(4);
    } else if (option == 'test') {
        interface('test');
    } else if (option == 'o1') {
        options1();
    } else if (option == 'o2') {
        options2();
    } else if (option == 'setl') {
        countrySet();
    } else if (option == 'setc') {
        categorySet();
    } else if (option == 'views') {
        viewSettings();
    } else if (option == 'viewl') {
        viewCountries();
    } else if (option == 'viewc') {
        viewCategories();
    } else if (option == 'clear') {
        clear();
    } else if (option == 'quit') {
        quit(0);
    } else {
        console.log(colors.red('Not a choice.'));
        initPrompt();
    }
};

/*
 * Scraper Functions
 */

let searchTotalProducts = async function(product) {
    try {
        let result = await amazonScraper.products({
            keyword: String(product),
            number: 1,
            country: varCountry.key
            //			category: varCategory.key
        });
        console.log(
            colors.white(
                'Total results for ' + product + ': ' + result.totalProducts + '.'
            )
        );
        let countryName = varCountry.key;
        let categoryName = varCategory.value.name;
        console.log(colors.white.italic('Country Used: ' + countryName));
        console.log(colors.white.italic('Category Used: ' + categoryName));
        initPrompt();
        return;
    } catch (err) {
        console.log(err);
        console.log('Sorry, something went wrong.');
        initPrompt();
    }
};

let searchAveragePrice = async function(product) {
    try {
        let result = await amazonScraper.products({
            keyword: String(product),
            number: 1,
            country: varCountry.key
            //			category: varCategory.key
        });
        let i;
        let total = 0;
        for (i in result.result) {
            total += result.result[i].price.current_price;
        }
        let currencySymbol = varCountry.value.currency;
        console.log(
            'Average Price of ' +
            product +
            ': ' +
            parseInt((total / result.result.length) * 100) / 100 +
            currencySymbol +
            '.'
        );
        let countryName = varCountry.key;
        let categoryName = varCategory.value.name;
        console.log(colors.white.italic('Country Used: ' + countryName));
        console.log(colors.white.italic('Category Used: ' + categoryName));
        initPrompt();
        return;
    } catch (err) {
        console.log(err);
        console.log('Sorry, something went wrong.');
        initPrompt();
    }
};

let searchAverageReviews = async function(product) {
    try {
        let result = await amazonScraper.products({
            keyword: String(product),
            number: 1,
            country: varCountry.key
            //			category: varCategory.key
        });
        let i;
        let total = 0;
        for (i in result.result) {
            total += result.result[i].reviews.rating;
        }
        console.log(
            'Average Reviews for ' +
            product +
            ': ' +
            parseInt((total / result.result.length) * 100) / 100 +
            '/5.'
        );
        let countryName = varCountry.key;
        let categoryName = varCategory.value.name;
        console.log(colors.white.italic('Country Used: ' + countryName));
        console.log(colors.white.italic('Category Used: ' + categoryName));
        initPrompt();
        return;
    } catch (err) {
        console.log(err);
        console.log('Sorry, something went wrong.');
        initPrompt();
    }
};

let searchProductURL = async function(product) {
    try {
        let result = await amazonScraper.products({
            keyword: String(product),
            number: 1,
            country: varCountry.key
            //			category: varCategory.key
        });
        let i;
        for (i = 0; i < 5; i++) {
            console.log('Link to ' + product + ': ' + result.result[i].url);
        }
        let countryName = varCountry.key;
        let categoryName = varCategory.value.name;
        console.log(colors.white.italic('Country Used: ' + countryName));
        console.log(colors.white.italic('Category Used: ' + categoryName));
        initPrompt();
        return;
    } catch (err) {
        console.log(err);
        console.log('Sorry, something went wrong.');
        initPrompt();
    }
};

// Beta Test Function
let test = async function(product) {
    try {
        let result = await amazonScraper.products({
            keyword: String(product),
            number: 1,
            country: varCountry.key,
            category: varCategory.key
        });

        console.log('Link to ' + product + ': ' + result.result[0].url + '.');

        let countryName = varCountry.key;
        let categoryName = varCategory.value.name;
        console.log(colors.white.italic('Country Used: ' + varCountry));
        console.log(colors.white.italic('Category Used: ' + categoryName));
        initPrompt();
        return;
    } catch (err) {
        console.log(err);
        console.log('Sorry, something went wrong.');
        initPrompt();
    }
};

//Start the Console
console.clear();
console.log(colors.yellow.bold('Welcome to the Amazon CLI!'));
console.log(colors.yellow('Developed By Siddhant'));
initPrompt(1); //Initialization Overridden