const aws = require('aws-sdk');
const dotenv = require('dotenv').config();

const {ACCESS_KEY_ID,SECRET_ACCESS_KEY} = process.env;

aws.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: "ap-south-1"
})

let uploadFile = async(file) =>{
    return new Promise( function(resolve,reject){
        let s3 = new aws.S3({apiVersion: '2006-03-01'});

        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket",
            Key: "Aditya/"+ file.originalname,
            Body: file.buffer
        }

        s3.upload(uploadParams,function(err,data){
            if(err){
                return reject({"error": err.message})
            }
            return resolve(data.Location)
        })
    })
}

module.exports.uploadFile = uploadFile