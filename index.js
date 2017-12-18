$(document).ready(function () {
    const now = new Date();
    $('#now').text(
        now.getFullYear() + '-' + now.getMonth()+ '-' + now.getDate() + ' '  +
        now.getHours() + ':' + now.getMinutes() + ':' +now.getSeconds() 
    );


    $('#info-form').on('submit', e => {
        e.preventDefault();
        
        var result = $('#info-form').serializeArray().reduce(function(obj, item) {
            if (item.name === 'ability') {
                obj[item.name] = obj[item.name] || [];
                obj[item.name].push(item.value);
                return obj;
            }
            obj[item.name] = item.value;
            return obj;
        }, {});

        // send request
        // todo
    })

})