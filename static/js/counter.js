$(document).ready(function(){
    var initialValue = 0;
    var counterDuration = 2;

    getCounter(function(newValue) {
        updateCounterAnimated(initialValue, newValue, counterDuration, updateCounter);

        // register timer to keep counter up to date
        setInterval(function() {
            getCounter(updateCounter);
        }, 3500);
    });

    function getCounter(callback) {
        var counterUrl = "https://bigdatauniversity.com/web/admin/counter.json.php";
        $.get(counterUrl, function(data) {
            if (data.ok) {
                callback(data.registered_users)
            }
        });
    }

    function updateCounter(newValue) {
        $("#counter").html(newValue.toLocaleString());
    }

    function updateCounterAnimated(currentValue, newValue, duration, callback) {
        var start = null;
        var d = duration;
        var b = currentValue;
        var c = newValue - currentValue;

        function step(timestamp) {
            if (!start) { 
                start = timestamp +1;
            }

            var t = timestamp - start;
            var r = t/(d * 1000);
            var factor = Math.pow(r - 1, 5) + 1;

            var v = Math.max(Math.ceil(c * factor + b), 0); 
            callback(Math.min(v, newValue));

            if (v < newValue) {
                window.requestAnimationFrame(step);
            }
        } 

        window.requestAnimationFrame(step);
    }
});
