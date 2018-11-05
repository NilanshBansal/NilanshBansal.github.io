const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "nodejs",
				weight: 12.3
			}, {
				text: "html5",
				weight: 10.5
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "c++",
				weight: 13.5
			}, {
				text: "java",
				weight: 12.3
			}, {
				text: "python",
				weight: 15
			}, {
				text: "jquery",
				weight: 12.5
			}, {
				text: "css3",
				weight: 13.5
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
	var web_button = document.getElementById("web_button");
	web_projects.style.display = "none";
	python_projects.style.display = "block";
	web_button.classList.remove("active");
}

function show_web_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");
	python_projects.style.display = "none";
	web_projects.style.display = "block";
}