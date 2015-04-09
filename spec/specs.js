describe("wordCount", function() {
    it("returns an array of the input word for one unique input", function(){
        expect(wordCount("hello")).to.eql(["hello"]);
    });
    it("returns an array of the input words for two unique words", function() {
        expect(wordCount("hello there")).to.eql(["hello", "there"]);
    });
    it("returns an array of the unique words in a list of words with one duplicate word", function() {
        expect(wordCount("funky funky fresh")).to.eql(["funky", "fresh"]);
    });
});
