<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![ProtonMail][protonmail-shield]][protonmail-url]

# Cognate

This app is hosted [here](https://cognate-lang.herokuapp.com).

A cognate is a word that is related to another word in another language. For example, the English word "circle" is cognate with the Spanish word "círculo" and the French word "cercle".

I've been obsessed with studying languages for years, and at this point, reading any Romance language seems like reading one language with only minor variations. I created this app to quickly look up cognates between English and 4 Romance languages at the same time. I also hope that those new to language learning can be inspired by exploring the similarities and differences among languages.

This app was tested Safari on mobile and Chrome on desktop. This is a mobile-first app.

There are some styling issues on mobile and currently audio is non-functional. This will be fixed soon.

## How to Use

- Login or create an account
- Search for a word in English, Spanish, French, Italian, or Portuguese, and tap it to see its cognates in the other languages
- Tap the favorites button at the bottom to save a word to your favorites list
- Tap the **Heart** button at the top right to see your saved words
-Tap the language toggle buttons to choose which languages to display
-Tap the **audio icon** to hear the word pronounced in that language (currently disabled)
-Click the **Random Word** button to see a random word from the list
-When on the **Favorites** page, the search bar searches your favorites list. Click a favorite to see its cognates.

## Built With

- [![React][react.js]][react-url]
- [![Redux][redux.js]][redux-url]
- [![Redux-Saga][redux-saga.js]][redux-saga-url]
- [![PostgreSQL][postgresql]][postgresql-url]
- [![Express][express.js]][express-url]
- [![Node][node.js]][node-url]
- [![Markdown][markdown]][markdown-url]
- [![React-Router][react-router]][react-router-url]
- [![Heroku][heroku]][heroku-url]
- [![NPM][npm]][npm-url]
- [![Forvo][forvo-shield]][forvo-url]
- [![Bit.io][bitio-shield]][bitio-url]
  A full list of dependencies can be found in `package.json`.

## Roadmap

- [ ] Add Germanic cognates and Chinese-Korean-Japanese cognates
- [ ] Make the code more DRY!
- [ ] Fix audio
- [ ] Improve accessibility by adding light mode and user-selectable tone colors

See the [Projects page](https://github.com/users/sdnii/projects/1) for a full list of planned features.

## Directory Structure:

- `src/` contains the React application
- `build/` contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App
- `ios/` contains the iOS app built with Capacitor (not currently completed)

## Contact

Carlos Kelley - [LinkedIn](https://linkedin.com/in/carloskelley) - [Protonmail](mailto:carloskelley@protonmail.com)

Project Link: [Cognate](https://github.com/sdnii/cognate)

## License

Distributed under the MIT License.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/carloskelley
[product-screenshot]: images/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux.js.org/
[postgresql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[redux-saga.js]: https://img.shields.io/badge/Redux%20saga-86D46B?style=for-the-badge&logo=redux%20saga&logoColor=999999
[redux-saga-url]: https://redux-saga.js.org/
[markdown]: https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white
[markdown-url]: https://duckduckgo.com/?q=markdown&t=brave&ia=web
[heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[heroku-url]: https://heroku.com
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com
[react-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://react-router.js.org/
[lightsail-shield]: https://img.shields.io/badge/Amazon%20Lightsail-232F3E?style=for-the-badge&logo=amazon%20lightsail&logoColor=white
[lightsail-url]: https://lightsail.aws.amazon.com/
[protonmail-shield]: https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white
[protonmail-url]: mailto:carloskelley@protonmail.com
[forvo-shield]: https://img.shields.io/badge/Forvo-FF0000?style=for-the-badge&logo=forvo&logoColor=white
[forvo-url]: https://forvo.com
[bitio-shield]: https://img.shields.io/badge/Bit.io-000000?style=for-the-badge&logo=bitdotio&logoColor=white
[bitio-url]: https://bit.io
