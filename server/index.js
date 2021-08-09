import cors from 'cors'
import express from 'express'
import imageRoutes from './routes/images.js'

const app = express()
const PORT = process.env.PORT || 6060

app.use(cors());

app.use(express.static("public"))

app.use('/images', imageRoutes)



app.listen(PORT, () => {
    console.log(`express is running on ${PORT}
    `)
})


const arrd = [0, 3, 2, 1, 5]

const arrd2 = [0, 2, 3, 5, 3]

const validMountainArray = (arr) => {
    let a = Math.max(...arr)
    if(arr.length >= 3){
        console.log("array length is", arr.length)
        console.log("max number is", a)
        for(let i = 0; i < a; i++){
            if(arr[i]<arr[i+1]){
                for(i=a; a<arr.length; i++){
                    if(arr[i]>arr[i+1]){
                        return true
                    }
                }
            }
        }
    }
    return false
};

validMountainArray(arrd)