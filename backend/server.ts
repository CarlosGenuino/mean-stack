import express, { Request, Response } from 'express'
import { ENV } from './utils/env.ts'
const app = express()
const PORT = Number(ENV.PORT)

app.get("/health", (req: Request, res: Response) => {
    try {
        res.status(200).json({success: true, message: "server is running"})
    } catch(error){
        res.status(500).json({success: false, message: "server is not running"})
    }
});

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
})