function wordCount(input) {
    var words = input.split(" ");
    debugger;
    var checked = Object.create(null);
    words.forEach(function(word) {
        if (checked.hasOwnProperty(word)) {
            checked.word = 1;
        }
    });

    return checked;
};
