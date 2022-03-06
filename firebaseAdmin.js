const admin = require('firebase-admin')
const serviceAccount = require('./secrets.json')


if(!admin.app.length){
    admin.initializeApp({
        credential:admin.credential.cert(serviceAccount)
    });
    
}
export const verifyIdToken = async (token) =>{
    
   
   
    try {
        return await admin.auth().verifyIdToken(token);
    } catch (err) {
        throw err;
    }
} 