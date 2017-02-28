# Homework #7

## Instructions
---
1. Fork and clone this repo.  User the lecture video as a reference.  There is a lot of new information that was covered and it may take a while for this all to sink in.



2. Import `jQuery` into your `home.html` file. (Use a CDN for this.)  Setup `jQuery` inside of your `script.js` file.


3. Dynamically add a list of blog posts that repeat down the page.

	* Add some posts to your database.
	* Create a template using a `<script>` tag of type `text/post-template`.
	* Make an `ajax` `GET` request to retrieve the posts from your server.
	* Loop over the data using `forEach`
	* `clone` the template and then set the various fields to match the data received from the server.
	* Appened this new `<li>` to the `<ul>`.
	* First get this to work with a single value like `author`.  Then populate the rest of the data.

4. Add a like button that increments the like count in the database.  You'll need a reference to the post's `id` that you can access somewhere.  After the `ajax` `GET` request is successfully made then use `jQuery` to update the like count locally so it is in sync with the server without having to refresh.




---

### Extra Credit

1. Add a delete button to each post that removes it from the database.  Keep your site in sync with the server without having to refresh.



2. Make it so that you initially only see the blog title. (`CSS` -> visibility: hidden) Then when the user clicks on the title the rest of the blog post should appear.  You will need to use a `jQuery` event listener `$('.blog-post-header').on('click', function.....`.  You will then need to use `jQuery` to change the styles.



---
#### Congratulations on finishing Homework #7!
Apply to our full time or part time immersive program to learn cutting edge technologies that are used by top technology companies around the world.

Our part time and full time courses are 13 intense weeks of focused study on the most relevant technologies.  

Class sizes are small to ensure that each student gets individual attention from our world class instructors to help them succeed.  We also provide career support both during and after the course to help you succeed.  We are committed to your success.

For more information visit: https://www.lambdaschool.com
