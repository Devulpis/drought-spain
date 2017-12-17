document.querySelectorAll('.vid-plus-text video').forEach(function (currentValue, index, array) {
	currentValue.addEventListener('mouseover', on_mouse_over);
	currentValue.addEventListener('mouseout', on_mouse_out);
});

function on_mouse_over(e) {  
    this.play(); 
}

function on_mouse_out(e) {
    this.pause(); 
}