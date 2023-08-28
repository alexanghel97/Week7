function charactherFunction() {
    let charactherCount = 4;
    let url = "https://rickandmortyapi.com/api/character"
    fetch(url, { method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(response){
        console.log(response);
    });
    for(i = 1; i<= charactherCount; i++) {
        fetch(url + '/' + i, {method:'GET'}).then(function(response){
            return response.json();
        }).then(function(response){
            console.log(response);
        });
    };
};

function locationFunction() {
    let charactherCount = 4;
    let url = "https://rickandmortyapi.com/api/location"
    fetch(url, { method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(response){
        console.log(response);
    });
    for(i = 1; i<= charactherCount; i++) {
        fetch(url + '/' + i, {method:'GET'}).then(function(response){
            return response.json();
        }).then(function(response){
            console.log(response);
        });
    };
};

function episodesFunction() {
    let charactherCount = 4;
    let url = "https://rickandmortyapi.com/api/episode"
    fetch(url, { method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(response){
        console.log(response);
    });
    for(i = 1; i<= charactherCount; i++) {
        fetch(url + '/' + i, {method:'GET'}).then(function(response){
            return response.json();
        }).then(function(response){
            console.log(response);
        });
    };
};


locationFunction();
episodesFunction();
charactherFunction();
