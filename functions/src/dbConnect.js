import { initializeApp,cert,getApps } from "firebase-admin";
import { getFirestore} from "firebase-admin"
import secrets from '../secrets.js'

export default function dbConnect() {
    if(!getApps.length){
        initializeApp({credential:cert(secrets)
        })
    }
    return getFirestore()
}