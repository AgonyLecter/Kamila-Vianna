import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {getDatabase} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js';
import {getAuth} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {getAnalytics} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js';
export const ADMIN_EMAIL='kamibossoviana@gmail.com';
export const DEFAULTS={price:100,pkg:4,days:[1,2,3,4],hours:[15,16,17]}; // hours = Brasília time
const cfg={apiKey:"AIzaSyC7qhjI3lRxqZGbvmTQscetvvhuE8T4N4I",authDomain:"wandernatureconnect.firebaseapp.com",databaseURL:"https://wandernatureconnect-default-rtdb.europe-west1.firebasedatabase.app",projectId:"wandernatureconnect",storageBucket:"wandernatureconnect.appspot.com",messagingSenderId:"1062563433646",appId:"1:1062563433646:web:a7251b914f569fc105f13f",measurementId:"G-SGF0KC717J"};
export const app=initializeApp(cfg);
export const db=getDatabase(app);
export const auth=getAuth(app);
try{getAnalytics(app)}catch(e){}
// Troque para true quando for lançar: o painel passa a exigir login da Kamila (e use database.rules.production.json)
export const REQUIRE_ADMIN_LOGIN=false;
