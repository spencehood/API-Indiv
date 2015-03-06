var movies = {

    searchByName: function(id) {

        // search movies by userId (default user, 101193)
        var id = id || '101193'
               
        $.get("http://api.nytimes.com/svc/movies/v2/reviews", function(data) {
            
            console.log('now ' + data)
            
            if (data){
            $.get("/API-Indiv/movies/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                });
                console.log(html)
                $("#list").html(html)
                })
            }
        })
    },

  
    load: function() {

        $.get("/api-indiv/movies/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        movies.searchByName('Movie Name Here')

    }

}