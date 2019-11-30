const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "nodejs",
				weight: 15
			}, {
				text: "html5",
				weight: 15
			}, {
				text: "css3",
				weight: 15
			}, {
				text: "javascript",
				weight: 15.5
			}, {
				text: "c++",
				weight: 15.5
			},{
				text: "python",
				weight: 16
			},{
				text: "django",
				weight: 18
			},{
				text: "angular",
				weight: 15.5
			},{
				text: "mongodb",
				weight: 14.5
			},{
				text: "postgres",
				weight: 15.5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "am also a Machine Learning enthusiast.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

function show_python_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");

	var web_buttons = document.getElementsByClassName("web_button");
	var python_buttons = document.getElementsByClassName("python_button");

	web_projects.style.display = "none";
	python_projects.style.display = "block";

	Array.prototype.forEach.call(web_buttons,function(btn){
		btn.classList.remove("active");
	});

	Array.prototype.forEach.call(python_buttons,function(btn){
		btn.classList.add("active");
	});
}

function show_web_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");
	python_projects.style.display = "none";
	web_projects.style.display = "block";

	var web_buttons = document.getElementsByClassName("web_button");
	var python_buttons = document.getElementsByClassName("python_button");

	Array.prototype.forEach.call(web_buttons,function(btn){
		btn.classList.add("active");
	});

	Array.prototype.forEach.call(python_buttons,function(btn){
		btn.classList.remove("active");
	});
}