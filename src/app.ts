import  express ,{Application,Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import routes from './routes/routes'
const port = process.env.PORT || 3000;
const app:Application = express();
const prisma = new PrismaClient()
import * as dotenv from 'dotenv'
import cors from 'cors';
import multer from 'multer';

app.use(cors());

dotenv.config();

// const upload = multer({ dest: 'uploads/' });
// for parsing multipart/form-data
// app.use(upload.array()); 
app.use(express.static('public'));

app.use(express.json());


app.use("/", routes)






const PORT = 8000;
app.listen(PORT, () => {console.log("server listening on port " + PORT);
});
