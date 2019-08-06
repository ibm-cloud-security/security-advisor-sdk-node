var sa = require("ibmcloud-security-advisor-findings");
var defaultClient = sa.ApiClient.instance;
var region = process.env.region || "us-south";
defaultClient.basePath = `https://${region}.secadvisor.cloud.ibm.com/findings`;
let api = new sa.FindingsNotesApi();

let notes = require("./notes");

async function createNotes(account_id, authorization) {
  await Promise.all(
    notes.map(async n => {
      try {
        console.log("Creating note with id", n.id);
        await api.createNote(account_id, authorization, "security-advisor", n);
        console.log("Created note with id", n.id);
      } catch (err) {
        console.log("Note creation failed for id", n.id, err.message);
        if (err.response.status == 409) {
          try {
            console.log("Trying to update note with id", n.id);
            await api.updateNote(
              account_id,
              authorization,
              "security-advisor",
              n.id,
              n
            );
            console.log("Successfully updated note with id", n.id);
          } catch (err) {
            console.log("Note update failed for id", n.id, err.message);
          }
        }
      }
    })
  );
}
createNotes(process.env.account_id, process.env.authorization);
