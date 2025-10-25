import express from 'express';
import dotenv from 'dotenv';    
import authRoutes from './routes/auth.route.js';
import connectDB from '../backend/db/connecToMongoDB.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000; 


app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => { 
    res.send('Hello World!'); 
});


app.listen(PORT, () => {
    
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
    
});