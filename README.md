# ReactNodeExpressFullStack

FeedbackFocus, a MERN full-stack app written with React front end, Node.js, Express, and MongoDB for back-end support, is designed to authenticate users and facilitate large-scale survey email production. Some of the features of this application include:

1.  Usere sign up with their Google sign on, which is authenticated using the passport package.
2.  User credentials are saved to a profile in MongoDb.
3.  The stripe service is used to allow users to purchase credits for survey production.
4.  At the present time, the demo allows the user to ask any question that can be answered with a yes or no response, such as "Are you satisfed with your recent purchsae?"
5.  At present, the demo version has no limit to the number of email addresses which can receive a single email.
6.  The emails are sent to recipients using the SendGrid service with their associated API.
7.  When recipients receive the email, they can click on 'yes' or 'no' to respond to the survey.
8.  Their response is recorded by SendGrid and sent back to the server in the form of a webhook.
9.  For each survey, yes and no responses are tabulated as they are received.
10. Users can review their survey response tabulations at any time.

Screenshots of this working application have been included as a folder in the root of this project.

A skeleton of this application was developed as part of completing the following course:
"Node with React: Fullstack Web Development" by Stephen Grider https://www.udemy.com/course/node-with-react-fullstack-web-development/

A demo of this application has been deployed on heroku at:
https://customer-email-response-app.herokuapp.com/
