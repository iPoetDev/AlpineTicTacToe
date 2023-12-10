
## Technologies

### HTML

#### HTML5

##### Template

- URL:
```cardlink
url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
title: "<template>: The Content Template element - HTML: HyperText Markup Language | MDN"
description: "The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript."
host: developer.mozilla.org
favicon: https://developer.mozilla.org/favicon-48x48.cbbd161b.png
image: https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png
```

- **`<template>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element
	- Is a mechanism for holding [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
	- Is a content fragment that is being stored for subsequent use in the document.
		- The parser does process the contents of the **`<template>`** element while loading the page,
		- The parser does so only to ensure that those contents are valid;
		- The element's contents are not rendered by the browser, however.
	- The [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) are supported.
	- No ShaddowDOM.
	- [`HTMLTemplateElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement) interface includes a standard [`content`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content "content") property (without an equivalent content/markup attribute).
		- Read Only
		- NO use of [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) that contains the DOM subtree represented by the template.

### CSS

#### CSS3



#### Tailwinds



### JavaScript

| Technology | Version | Site | Docs |
|:-----------|:--------|:-----|:-----|
| ECMAScript            | ECMA-262 (13th Edition) | https://ecma-international.org/ |      |
| JSDoc           | 4.0.2        | https://jsdoc.app/ |      |
| AlpineJS           | 3.1.3        |      |      |

#### Native JavaScript

##### JSDoc


#### Alpine


***
## Semantics

### Head

```html
<title>Tic Tac Toe : AlpineJS by Scott Windon </title>
<meta charset="UTF-8"> <!-- Character Encoding -->
<!-- Required Meta Tags -->
<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Responsive Design -->
<!-- Recommended Meta Tags -->
<meta name="description" content="Example AlpineJS Tic Tac Toe: Scott Windon"> <!-- SEO Meta Description -->
<meta name="keywords" content="your, tags"> <!-- SEO Keywords -->
<meta name="author" content="author name"> <!-- Author Information -->
<!-- Links to CSS -->
<link rel="stylesheet" href="src/assets/css/style.css">
```

| Tag   | Attribute     | Value(s)                                 | UseCase              | Description           |
|:----- |:------------- |:---------------------------------------- |:-------------------- |:--------------------- |
| Title |               | `Tic Tac Toe : AlpineJS by Scott Windon` |                      |                       |
| Meta  | `charset`     | `UTF-8`                                  | Character Encoding   |                       |
| Meta  | `viewport`    |                                          | Responsive Design    | Responsive Design     |
| Meta  | ---           | ---                                       | Recommended Meta Tags | Recommended Meta Tags |
| Meta  | `description` |                                          | SEO Meta Description | SEO Meta Description |
| Meta  | `keywords`    |                                          | SEO Keywords         | SEO Keywords          |
| Meta  | `author`      |                                          | Author Information   | Author Information    |
| Meta  | ---           | ---                                       |                      |                       |
| Link  | `rel`,`href`  | `stylesheet`, `src/assets/css/style.css` | Custom CSS           | Links to CSS          |
| Link  |---           | ---                                        |                      | Links to CSS          |
| Link  |               |                                          |                      | Links to CSS          |
|       |               |                                          |                      |                       |
#### Meta

- **charset**:
- **viewport**:
- **description**:
- **keywords**:
- **author**:
#### Link

- `Style.css`
	- Purpose: Local custom code for
		- Importing Fonts
		- Loading Fonts
		- Non TailwindCSS
	- **rel**:
	- **href**:
	- **Source**:
		- CSS3, inbuilt
- `AppTailwind.css`
	- Purpose
		- Locality of Behaviour
		- Inline Styling
	- **rel**:
	- **href**:
	- **Source**:
		- TailwindCSS

***
### Body

#### Semantics: Layout/Skeleton

##### Common Semantic Structure

##### Positioning

##### Component: Template Grid

-

#### Semantics: Responsiveness

##### Mobile

##### Tablet

##### Fixed

#### Accessibility

#### Presentation: Theme/Color/Dark Mode

##### Mobile

##### Tablet

##### Fixed

#### Presentation: Font/Text

***
### Scripts

| Tag    | Attributes    | Link Type          | Values                                                                                                                                                                                                                                                                 | Use           | Version | Description |
|:-------|:--------------|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:--------|:------------|
| Script | defer, script | External, CDN      | <div style="color: rgb(223, 225, 243);"><pre style="font-family:'FiraCode Nerd Font Propo',monospace;font-size:7.5pt;"><span style="color:#4898d9;font-weight:bold;font-style:italic;">https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js</span></pre></div> | AlpineJS      | v3.1.3  |             |
| Script | defer, script | Internal, Absolute | <div style="color: rgb(223, 225, 243);"><pre style="font-family:'FiraCode Nerd Font Propo',monospace;font-size:7.5pt;"><span style="color:#4898d9;font-weight:bold;font-style:italic;">src/assets/js/app.js</span></pre></div>                                         | Local, Custom | TBC     |             |
|        |               |                    |                                                                                                                                                                                                                                                                        |               |         |             |
|        |               |                    |                                                                                                                                                                                                                                                                        |               |         |             |


***
## Documentation

### App

#### File Header

```javascript
/**
* @description: App script for a Grid Game of TicTacToe, using AlpineJS for interactivity and reactivity.
* @summary: Game of TicTacToe
* @license: .
* @author: Charles J Fowler
* @file: App.js
* @copyright: Charles J Fowler 2023,
* @version: 0.0.1
* {@link https://github.com/iPoetDev/AlpineTicTacToe|GitHub:AlpineTicTacToe} | [AlpineTicTacToe]{@link [https://github.com/iPoetDev/AlpineTicTacToe}
*/
```

#### Function

-
#### Function

-
#### Function

-
