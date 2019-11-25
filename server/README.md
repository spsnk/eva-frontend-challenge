# Eva Frontend Challenge

Imagine it's your first day at Eva and you are fresh out of the onboarding process.
You've been assigned to the Frontend team that will support the results experience of our Eva Members.

Women book explorations through our website.
On the date of their exploration women visit the center, answer some questions about their health, and are scanned by our thermal cameras.
We recommend you watch this [video](https://youtu.be/12h-0qUdJag) for more context on the experience.

24 hours later women receive via email a risk analysis report as a result of doing an Eva exploration.

Back to work, you log into the issue tracker and find that you've already been assigned the following ticket:

```
ISSUE 01

The Product team detected Eva Members (the majority having 40+ years) find it difficult to access their reports history via their email and the Operations team found that HIPAA regulation doesn't allow to send health-related data via email.

They've requested a web application that will allow Eva Members to access their reports history in a more secure and convenient way.

REQUIREMENTS

* Login view asking and validating username and password.
* Reports view (shown after logged in) displaying a list of available reports for the logged in user (showing the most recent report at the top).
* Reports have one of two results: Asymmetric and No asymmetric. An Asymmetric result should increase awareness to the user to have follow-up Eva explorations but we must take care to not scare the user causing them to never come back.
```

## Your mission, should you choose to accept it

- Clone this repo and create a repo of your own (DO NOT FORK THIS REPO).
- Start the provided server with `yarn && yarn start`.
- Build a web app written in ReactJS with the required views and functionality.
- Your web app should use the provided `/login` endpoint to validate users.
- Your web app should be documented.
- At least one react component should be tested.
- Other than the Login view, the remaining views should not be public (Authentication).
- A given user should only be able to access their own information (test with c1@evatech.co - 123 and c2@evatech.co - 456).
- It should be easy for your teammates to understand your repo and use your code in the unfortunate case of your sudden combustion.
