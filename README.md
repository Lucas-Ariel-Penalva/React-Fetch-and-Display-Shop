# Displaying information from an API using React

### All the data is fetched from [Fake Store API](https://fakestoreapi.com/).

### [You can see the result here](https://lucas-ariel-penalva.github.io/React-Fetch-and-Display-Shop/).

This is a simple example of how to use React's **useEffect hook** to fetch data from an API, and then displaying that data in the form of cards for an E-commerce.

This is an elementary task, but I still didn't have anything on my Github that uses *React* and I want to showcase my skills with very quick projects that take less than a day to build.

I'm pleased with how the cards look considering how little time was spent on them and the fact that it is original CSS. While I have much to learn, one of my strengths is that I learned how to make things look decent even when doing quick prototyping.

The CSS of the card component was written with a **mobile-first approach**, which means that first one must write how the site is going to look on the smallest viewport (mobile) and then add other conditional classes or media queries that only come in play when the view port is bigger. For these cards, I only did the **Mobile version** and the **Medium screensize version**, which is for displays of around 768px wide, similar to a *Tablet / Ipad*. You can see how the card gets slightly bigger or smaller at those breakpoints if you open the site on desktop and change the size of the window.

If I were to program these cards for larger screen sizes, I might try turning the whole card into a flex container so that the text is horizontal to the image and not below it. You could increase the size of all the elements of the card, fit more of them on screen and make better use of the extra width in that way.

### Some final details:

* #### On hover, the card's shadow increases significantly to emphasize it.
* #### The card's title uses a transform that increases its size by 5% when you hover over it.
* #### The stars are SVGs that get filled dynamically according to the rating of each product. I find that learning how to work with SVGs in this way is essential to building professional websites.
