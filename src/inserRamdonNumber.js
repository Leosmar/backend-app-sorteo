let cron = require("node-cron");
require("dotenv").config();
const { db } = require("./firebase");
const { collection, addDoc } = require("firebase/firestore");

let HOUR = process.env.HOUR;
let MINUTE = process.env.MINUTE;

const setRamdonNumber = async () => {
  try {
    let date = Date.now();
    date = date - 14400000; //substrat 4 hours from the date now
    let ramdonNumber = Math.round(Math.random() * 100);
    if(ramdonNumber === 0) ramdonNumber = 1;
    
    await addDoc(collection(db, "diary-ramdon-number"), {
      ramdonNumber,
      date,
    });
  } catch (e) {
    console.error("Error creating document: ", e);
  }
};

cron.schedule(
  `10 1 * * *`,
  () => {
    console.log("Running a job at 19h/9:00 Pm at America/Caracas timezone");
    setRamdonNumber();
  },
  {
    scheduled: true,
    //timezone: "America/New_York", //problem with schedule memory leak
  }
);

module.exports = cron;
