# Spring 2020 Intro to Internet Programming — Assignment 3

* **Do not start this project until you have read these instructions carefully.**  
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**  

## ❖・Introduction・❖
Create a *single* web page consisting of HTML, CSS, and JavaScript that provides a user the ability to rotate the items in a table cell by clicking on it. Each cell’s state is mutually exclusive: Clicking any cell rotates any previously-clicked cell, then rotates the contents of the current cell.

A short, 11-second video of what’s required for this project is available from [http://vanegas.cs.hartford.edu/uploads/videos/mutual-exclusion-toggle.mov](http://vanegas.cs.hartford.edu/uploads/videos/mutual-exclusion-toggle.mov).

The HTML for this project is already in place. **Do not edit it**.

The `style.css` is already in the `css` folder, and `app.js` is already in the `js` folder. **Only edit these two files**.

_You may **only** work within the confines of the included scaffold._

## ❖・Rules・❖
### General
* Use lowercase, combined with kebab case, to name folders and files (`do-this` or `do-this.html`); no spaces in folder or file names (`not this`); no camel case (`notThis`); no snake case (`not_this`).
* Do not alter the scaffold of this project.
* Do not add images.

### CSS
* Ensure the table shares borders.
* Set a redish border around the table/cells.
* Place the table in the middle of the page.
* Rotations should take half a second and turn 180 degrees.
* Ensure your code fully validates against the included `.stylelintrc.json` file.

### JavaScript
* You may need to look at [compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
* Ensure your code fully validates against the included `.eslintrc.json` file.

### Git
* Do not alter or remove any of the `.gitignore` files.

### Libraries
* No CSS or JavaScript libraries may be used.

## ❖・Due・❖
Wednesday, 13 May 2020, at 9:00 AM.

## ❖・Grading・❖
| Item                                                        | Points |
| ----------------------------------------------------------- | :----: |
| *Fully-implemented JavaScript code according to directions* |  `90`  |
| *Fully-implemented CSS according to directions*             |  `10`  |

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
