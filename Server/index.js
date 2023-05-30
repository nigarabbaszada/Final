const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const  dotenv=require('dotenv')
const mongoose=require('mongoose')

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const newSecuritys=new mongoose.model(
    'securitys',
    new mongoose.Schema({
        name:String,
        title:String,
        price:Number,
        imgURL:String
    })
)


//CRUD
//SECURITYS

app.get('/securitys', async(req,res)=>{
    const securitys= await newSecuritys.find()
    res.status(200).send(securitys)
})



//BY ID
app.get('/api/securitys/:id', async(req,res)=>{
    const id=req.params.id
    const security= await newSecuritys.findById(id)
    res.status(200).send(security)
})

//DELETE

app.delete('/api/securitys/:id', (req,res)=>{
    const id=req.params.id
    const securityDeleted= newSecuritys.findByIdAndDeleted(id).then(()=>{
        res.status(200).send(`${securityDeleted.name} deleted succesfully`)
    })
})

//POST 

app.post('/api/securitys', async(req,res)=>{
    const newModel= newSecuritys({
        name:req.body.name,
        title:req.body.title,
        price:req.body.price,
        imgURL:req.body.imgURL

    })
    await newModel.save()
    res.status(200).send(`${newModel.name} posted succesfully`)
})


const DB_KEY=process.env.DB_KEY
const DB_PASSWORD=process.env.DB_PASSWORD

mongoose.connect(DB_KEY.replace('<password>',DB_PASSWORD)).then(()=>{
    console.log('MONGO DB CONNECTED')
})


const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`running port ${PORT}`)
})

