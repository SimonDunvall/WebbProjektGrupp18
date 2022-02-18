function loadFile(file) {
	var fr = new FileReader();
	var content = fr.readAsText(file);
	return content;
}