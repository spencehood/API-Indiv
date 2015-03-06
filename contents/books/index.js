var books = {

    searchByTitle: function(id) {

        // search books by userId (default user, 101193)
        var id = id || '101193'
               
        $.get("http://api.nytimes.com/svc/books/v3/lists", function(data) {
            
            console.log('now ' + data)
            
            if (data){
            $.get("/API-Indiv/books/list.jade", function(template) {
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

        $.get("/api-indiv/books/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        books.searchByTitle('Title Here')

    }

}