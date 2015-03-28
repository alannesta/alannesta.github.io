//var firebaseRef = 'https://firepano.firebaseio.com/';
var firebaseRef = 'https://radiant-fire-6566.firebaseio.com';
var counter;


var f = new Firebase(firebaseRef);

function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = (function() {
        return function(e) {
            var filePayload = e.target.result;

            var key = 'image' + counter++;
            // Set the file payload to Firebase and register an onComplete handler to stop the spinner and show the preview
            f.child(key).set(filePayload, function() {
                console.log('upload success');
            });
        };
    })();
    reader.readAsDataURL(file);
}

function init() {
    // A hash was passed in, so let's retrieve and render it.
    document.getElementById("inputupload").addEventListener('change', handleFileSelect, false);
    var listButton = document.getElementById('list-file');

    // listButton.addEventListener('click', function(){
    f.orderByKey().limitToLast(1).once("child_added", function(snapshot) {
        console.log('child added?');
        var length = snapshot.key().length;
        counter = parseInt(snapshot.key().substring(5, length));
        console.log(counter);
    });
    // })

    f.on('child_added', function(snap) {
        console.log('after upload');
        var payload = snap.val();
        // console.log(payload);
        if (payload != null) {
            document.getElementById("pano").src = payload;
        } else {

        }
    });
}

function listFile() {

}


init();