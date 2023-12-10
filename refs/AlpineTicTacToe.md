Source:
```cardlink
url: https://codepen.io/ScottWindon/pen/eYBMXQO
title: "AlpineJS Tic Tac Toe"
description: "Tic Tac Toe with alpine.js..."
host: codepen.io
image: https://shots.codepen.io/username/pen/eYBMXQO-800.jpg?version=1639723366
```

## Resources
- **TailwindCSS**:
	- <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css'>
	- https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css
-  **AlpineJS**:
	- <script src='https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.1/alpine.js'></script>
	- https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.1/alpine.js
-  **Font**:
	- **Gochi Hand**
		- https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap
## Index.html

### HTML:

```html
<div class="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
    <div class="w-96 h-96 mx-auto text-indigo-500 rounded-md flex flex-wrap relative" x-data="app()">
        <div class="flex w-full h-1/3">
            <template x-for="(item,index) in grid.slice(0,3)">
                <div class="border-b border-gray-700 w-1/3" :class="{'border-l':index>0}">
                    <button class="w-full h-full outline-none focus:outline-none text-8xl leading-none" @click.prevent="select(index)">
                        <span x-show="item!==null" x-text="item" style="display:none;" class="inline-block" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-50" x-transition:enter-end="opacity-100 transform scale-100"></span>
                    </button>
                </div>
            </template>
        </div>
        <div class="flex w-full h-1/3">
            <template x-for="(item,index) in grid.slice(3,6)">
                <div class="border-b border-gray-700 w-1/3" :class="{'border-l':index>0}">
                    <button class="w-full h-full outline-none focus:outline-none text-8xl leading-none" @click.prevent="select(index+3)">
                        <span x-show="item!==null" x-text="item" style="display:none;" class="inline-block" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-50" x-transition:enter-end="opacity-100 transform scale-100"></span>
                    </button>
                </div>
            </template>
        </div>
        <div class="flex w-full h-1/3">
            <template x-for="(item,index) in grid.slice(6,9)">
                <div class="border-gray-700 w-1/3" :class="{'border-l':index>0}">
                    <button class="w-full h-full outline-none focus:outline-none text-8xl leading-none" @click.prevent="select(index+6)">
                        <span x-show="item!==null" x-text="item" style="display:none;" class="inline-block" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-50" x-transition:enter-end="opacity-100 transform scale-100"></span>
                    </button>
                </div>
            </template>
        </div>
        <button class="absolute top-0 left-0 w-96 h-96 flex items-center justify-center outline-none focus:outline-none" style="display:none;" x-show="won||turns>=9" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-50 rotate-12" x-transition:enter-end="opacity-100 transform scale-100 rotate-0" @click.prevent="reset()">
            <span class="block transform -rotate-12 text-white text-9xl text-glow-xl" x-text="won?'Winner!':'😔'"></span>
        </button>
    </div>
</div>


<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
```

### Skeleton

```html
<div class="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
    <div class="w-96 h-96 mx-auto text-indigo-500 rounded-md flex flex-wrap relative" x-data="app()">
        <div class="flex w-full h-1/3">

        </div>
        <div class="flex w-full h-1/3">

        </div>
        <div class="flex w-full h-1/3">

        </div>

    </div>
</div>
```

- Outer Container: DIV (Page/App)
	- *Screen / Responsiveness*: `min-w-screen min-h-screen`:
	- *Background Appearance*: `bg-gray-800`
	- *Flex & Central Position*: `flex items-center justify-center`
	- *Padding*: `px-5 py-5`
- Container:
	- *Grid Height*: `w-96 h-96`
	- *Margin X*: `mx-auto `
	- *Text*: `text-indigo-500`
	- *Flex*: `flex flex-wrap`
	- *Rounded-MD*: `rounded-md`
	- *Positioning*: `relative`
- Inner Container:
	- *Flex*: `flex`
	- *Dimensions*: `w-full h-1/3`
### Template
#### Grid 0,3
```html
<template
		x-for="(item,index) in grid.slice(0,3)">
	<div class="border-b border-gray-700 w-1/3"
		:class="{'border-l':index>0}">
		<button
			class="w-full h-full outline-none focus:outline-none text-8xl leading-none"
			@click.prevent="select(index)">
			<span
				x-show="item!==null"
				x-text="item"
				style="display:none;"
				class="inline-block"
				x-transition:enter="transition ease-out duration-300"
				x-transition:enter-start="opacity-0 transform scale-50"
				x-transition:enter-end="opacity-100 transform scale-100">
			</span>
		</button>
	</div>
</template>
```

- Template runs an x-for loop, for each item, per index, in an array grid.slice from 0 to 3
	- For each loop, create a cell (div)
		- with border bottom, grey 700 at width of 1/3 of containing container
		- Border is width 1 when Index is greater than 1
	- In each loop, creates a button
		- Style: `w-full h-full outline-none focus:outline-none text-8xl leading-none`
		- @Click.prevent
			- `@` - `x-on`: Listens for browser events that are dispatched on or within an element
			- `click`: Event Listening
			- `.prevent`: When reacting to browser events: necessary to "*prevent default*" (prevent default of the browser event)
				- List to the button click but prevent
				- Executes the select function with the current index, or plus 3 or plus 6 as its argument.
				- Tops the default action of a click event (as in [event.preventDefault()])
```cardlink
url: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
title: "Event: preventDefault() method - Web APIs | MDN"
description: "The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be."
host: developer.mozilla.org
favicon: https://developer.mozilla.org/favicon-48x48.cbbd161b.png
image: https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png
```

- Template runs an x-for loop, for each item, per index, in an array grid.slice from 0 to 3
	- For in each loop, as a sub element of a button per grid cell
		- Span
			- x-show: item is not null i.e. must be full or not empty when
				- X-show an expressive way to show and hide DOM elements.
				- "default" state of an `x-show` on page load is "false",
				- Used with transitions:
					- to apply smooth transitions to the `x-show` behaviour,
			- x-text: item
			-[ x-transition](https://alpinejs.dev/directives/transition)
						- `x-tranisition:enter`: Applied during the entire entering phase.
						- `x-tranisition:enter-start`: Added before element is inserted, removed one frame after element is inserted.
							- Opacity is zero at start of transform
							- Scale from 50% at start of transform
						- `x-tranisition:enter-end`: Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.
							- Opacity is 100 at start of transform
							- Scale from 100% at start of transform
			-  **Style**: `display:none`
			-  **Class**: `inline-block`

-  **Mid DIV**:
	- x-data: app()
-  **Template**:
	- Border Bottom
	- Border Grey
	- W-1/3
	- :class ="{''}"@ :class to conditionally apply a class based on some JavaScript expression
		- :class sets the "border-l" CSS class if the index is greater than 0.
		- border-1: The key ('border-l') is the CSS class,
		- Index>0: Value (index>0) is the condition to apply this class
			-  If index is greater than 0, then the border-l class will be added to the div element
			- in addition to the fixed classes border-b border-gray-700 and w-1/3.
		- So, the div element will have the "border-l" class if the index value is greater than 0, and won't have the "border-l" class if the index value is not greater than 0.
- **Button**:
	- class: `w-full h-full outline-none focus:outline-none text-8xl leading-none`
	- @click.prevent `"select(index)"`
-  **AlpineJS**:
	- x-data="()": `app()`
	- x-for="()": `(item,index) in grid.slice(3,6)`: to create DOM elements by iterating through a list
	- x-show: `"item!==null"` show/hide dom elements using transitions
	- x-text: `"item"` text content of an element to the result of a given expression.
		- `item` is a variable name
		- Like a variable value and assigned to the span's inner html
	-
#### Grid 3,6
```html

<template
		x-for="(item,index) in grid.slice(3,6)">
	<div class="border-b border-gray-700 w-1/3"
		:class="{'border-l':index>0}">
		<button
			class="w-full h-full outline-none focus:outline-none text-8xl leading-none" @click.prevent="select(index+3)">
			<span x-show="item!==null"
				x-text="item"
				style="display:none;"
				class="inline-block"
				x-transition:enter="transition ease-out duration-300"
				x-transition:enter-start="opacity-0 transform scale-50"
				x-transition:enter-end="opacity-100 transform scale-100">
			</span>
		</button>
	</div>
</template>
```
#### Grid 6,9
```html
<template
		x-for="(item,index) in grid.slice(6,9)">
	<div class="border-gray-700 w-1/3"
		:class="{'border-l':index>0}">
		<button class="w-full h-full outline-none focus:outline-none text-8xl leading-none"
			@click.prevent="select(index+6)">
			<span x-show="item!==null"
				x-text="item"
				style="display:none;"
				class="inline-block"
				x-transition:enter="transition ease-out duration-300"
				x-transition:enter-start="opacity-0 transform scale-50"
				x-transition:enter-end="opacity-100 transform scale-100">
			</span>
		</button>
	</div>
</template>
```
### Button
```html
<button
	class="absolute top-0 left-0 w-96 h-96 flex items-center justify-center outline-none focus:outline-none"
	style="display:none;"
	x-show="won||turns>=9"
	x-transition:enter="transition ease-out duration-300"
	x-transition:enter-start="opacity-0 transform scale-50 rotate-12"
	x-transition:enter-end="opacity-100 transform scale-100 rotate-0"
	@click.prevent="reset()">
	<span
		class="block transform -rotate-12 text-white text-9xl text-glow-xl"
		x-text="won?'Winner!':'😔'"></span>
</button>
```
## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
body {
  font-family: 'Gochi Hand', cursive;
}
.text-glow-xl {
  text-shadow: 0 0 5px rgb(255 255 255 / 80%), 0 0 20px rgb(255 255 255 / 29%);
}
```
#### Font
```css
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
body {
  font-family: 'Gochi Hand', cursive;
}
```

#### Text Effect
```css
.text-glow-xl {
  text-shadow: 0 0 5px rgb(255 255 255 / 80%), 0 0 20px rgb(255 255 255 / 29%);
}
```
