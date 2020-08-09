
var util = {

    /**
     * Creates a CSV file using provided text and saves it to the user's machine.
     * @param {*} csvText 
     */
    createAndDownloadCsv(csvText) {
        let filename = 'table.csv';
        let pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csvText));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            let event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    },

    /**
     * does the best stuff with your stuff
     * @param {*} someObj some important object not to be toyed with
     */
    doCoolUtilityStuff(someObj) {
        // do stuff
        return;
    }

}