const { request, response } = require('express');
const express = require('express');
const app = express();
//importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');


app.get('/',(request,response)=>{
    response.send('Hello this is a get response');
})

app.post('/',(request,response)=>{
    response.send('hello this is a post response')
}
);
app.put('/',(request,response)=>{
    response.send('this is a put response')
}
);
app.delete('/',(request,response)=>{
     response.send('hello this is a delete response')
}
);
app.get('/todos',(request,response)=>{
    response.send([{
        'title':'Plan trip to Accra',
        'description':'I will be going to Accra this weekend',
        'time':'Today',
        'isCompleted':false
    }]);
   
}
);
app.get('/users',(request,response)=>{
    response.send([{
        'username':'sammy',
        'password':'passWorD'
       
    }]);
   
}
);

app.listen(5609,()=>{
    console.log("My server is Up and running on port 3200");
    // connecting to the database
    mongoose.connect('mongodb+srv://1111:1234@cluster0.ilwmm.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log('DataBase not connected'.error.message);
    });
});
  
