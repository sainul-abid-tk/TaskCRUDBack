const JSONServer=require('json-server')
const TaskServer=JSONServer.create()
const middleware=JSONServer.defaults()
const route=JSONServer.router('db.json')

TaskServer.use(middleware)
TaskServer.use(route)
const PORT=3000 || process.env.PORT
TaskServer.get('/',(req,res)=>{
    res.send('<h1>Helooo</h1>')
})

TaskServer.listen(PORT,()=>{
    console.log("TaskServer Created successfully");
})