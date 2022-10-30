let cron = require("node-cron");
const { db } = require("./firebase");
const { collection, addDoc } = require("firebase/firestore");

const setRamdonNumber = async () => {
  try {
    let date = Date.now();
    data -= 21600000;
    let ramdonNumber = Math.round(Math.random() * 100);

    await addDoc(collection(db, "diary-ramdon-number"), {
      ramdonNumber,
      date,
    });
  } catch (e) {
    console.error("Error creating document: ", e);
  }
};

cron.schedule(
  "35 22 * * *",
  () => {
    console.log("Running a job at 19h/9:00 Pm at America/Caracas timezone");
    setRamdonNumber();
  },
  {
    scheduled: true,
    //timezone: "America/Caracas",
  }
);

module.exports = cron;
