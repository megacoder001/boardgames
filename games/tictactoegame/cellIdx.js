export class cellDetection {
	cellDetectionFunction(clickArea) {
		clickArea.addEventListener('click', function(event) {
			var x = event.clientX;
			var y = event.clientY;
			console.log('X: ' + x + ', Y: ' + y);
			return x, y;
		})
	}
};

// everything's working, but there's one problem: AI wrote that clickArea must be "var", but it is "const" and works
