// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand
  .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .assistantInitiationActions()
  .update({initiationActions: {
       actions: [
         {
             say: {
                 speech: `Hello, I'm your virtual assistant! How can I help you?`
             }
         }
       ]
   }})
  .then(assistant_initiation_actions => console.log(assistant_initiation_actions.assistantSid))
  .done();