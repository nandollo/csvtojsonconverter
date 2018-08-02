// load required modules
const csvJson=require('csvtojson')
const path=require('path')
const fs=require('fs')

//file paths
var the_csv=path.join(__dirname, 'customer-data.csv')

//Create a function
const readFileAndConvert = () => {
    console.log('starting parse');
    var json;
    //convert to JSON
    csvJson().fromFile(the_csv)
        .on('error', (err)=>{
            //show any errors
            console.log(err)
        })
        .on('data', (data) => {
            json += data.toString('utf8')
        })
        .on('done', () => {
            //show the converted json
            console.log(json);
            fs.writeFile('customer-data.json', JSON.stringify(json), function(err) {
                console.log(err);
            })
        })
}

readFileAndConvert();