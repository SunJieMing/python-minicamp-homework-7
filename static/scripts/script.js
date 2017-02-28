$(function() {
	populatePosts();
});


function populatePosts() {
	var template = $('#post-template').html();
	$.ajax({
		url: '/posts'
	}).done(function(response) {
		response.forEach(function(post) {
			var newPost = $(template).clone();
			$(newPost).find('.title').html(post[0]);
			$(newPost).find('.author').html(post[1]);
			$(newPost).find('.body').html(post[2]);
			$(newPost).find('.likes').html(post[3]);
			$(newPost).find('.hidden-id').html(post[4]);
			$(newPost).find('.like-button').on('click', incrementLike);
			$('#post-list').append(newPost);
		});
	});
}

function incrementLike() {
	var id = $(this).find('.hidden-id').html();
	$.ajax({
		url: '/like/' + id
	}).done(function(response) {
		console.log('>>>response', response);
	});
}