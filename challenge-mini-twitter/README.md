# Mini-Twitter

In this project we are going to create a reduced version of the [twitter interface](https://twitter.com/home). 

## Difficulty

This challenge is ranked **medium to hard**.

Some elements of this challenge you will not have done before. Part of the challenge is to break down the problem and research to find the answer.

## Tested Skills

Students will learn

- How to retrieve data from an element via the DOM
- How to do simple form validation

## Prior Knowledge

Students should understand

- How to get access an element via the DOM
- How to create elements using JavaScript and add them to the DOM
- How to use event listeners

## Tasks

- [ ] Create an HTML page in `index.html` which should contain `form` with a `textarea` and submit `button`. Add a `div` underneath which will contain our tweets timeline. The HTML should import `index.js` from `src` folder.
- [ ] When the `button` is clicked, the content should be posted on the screen to look like a tweet.
- [ ] After a tweet is posted, clear the textarea.

## Stretch goals

- [ ] Add a character counter underneath the `textarea` which should update every time the content of `textarea` changes. A good way to do it is by setting a `input` event listener on the `textarea`. The `event` object passed to the event listener will have the `textarea` as the `event.target` property. We can then pull out the contents of the `textarea` by using the `event.target.value`.
- [ ] When `textarea` content goes over 280 characters, display the counter in red. When the contents go back below 280 set it back to default colour. Prevent tweets from being posted when character limit is over 280 characters.
- [ ] Add a delete icon to each tweet. On click, it should remove the corresponding tweet from the timeline.
- [ ] A Twitter handle starts with an `@` symbol and can only contain alpha-numeric characters. When posting a new tweet to the timeline, turn handles into links. for example if a tweet contains @dmitrigrabov it should be turned into `<a href="www.twitter.com/dmitrigrabov">@dmitrigrabov</a>`.
- [ ] Use CSS to make your website look professional. Remember to follow [accessbiliity guidelines](https://developer.mozilla.org/en-US/docs/Web/Accessibility).

## Setup

- Fork and clone this repo
- Commit your code after each task is complete and push
- If you are stuck for more than 20 mins ask for help
- Don't worry too much about making it look pretty, focus on getting the core functionality to work. It is easier to apply to apply visual polish at the end than at the beginning while you are still moving things around.
