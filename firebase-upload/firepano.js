//var firebaseRef = 'https://firepano.firebaseio.com/';
var firebaseRef = 'https://radiant-fire-6566.firebaseio.com';
var counter = 1;

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

    f.on('child_added', function(snap) {
        var payload = snap.val();
        console.log(payload);
        if (payload != null) {
            document.getElementById("pano").src = payload;
        } else {

        }
    });
}

init();