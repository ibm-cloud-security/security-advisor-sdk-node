var sa = require("ibmcloud-security-advisor-findings");
var defaultClient = sa.ApiClient.instance;
var region = process.env.region || "us-south";
defaultClient.basePath = `https://${region}.secadvisor.cloud.ibm.com/findings`;
var api = new sa.FindingsOccurrencesApi();

let occurrences = require("./occurrences");

async function createOccurrences(accountId, authorization) {
  await Promise.all(
    occurrences.map(async o => {
      try {
        console.log("Creating occurrence with id", o.id);
        await api.createOccurrence(
          process.env.account_id,
          authorization,
          "security-advisor",
          o
        );
        console.log("Created occurrence with id", o.id);
      } catch (err) {
        console.log("Occurrence creation failed for id", o.id, err.message);
        if (err.response.status == 409) {
          try {
            console.log("Trying to update occurrence with id", o.id);
            await api.updateOccurrence(
              accountId,
              authorization,
              "security-advisor",
              o.id,
              o
            );
            console.log("Successfully updated occurrence with id", o.id);
          } catch (err) {
            console.log("Occurrence update failed for id", o.id, err.message);
          }
        }
      }
    })
  );
}
createOccurrences(process.env.account_id, process.env.authorization);
