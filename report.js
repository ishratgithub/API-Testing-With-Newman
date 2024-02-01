const newman = require('newman');

 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/32576823-da8d22b2-d2b5-472d-a2f4-083c4e45fbf8?access_key=PMAT-01HNK0RQER84AS47B4JSFK6NAW`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/DMoney-API-Collection-report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});