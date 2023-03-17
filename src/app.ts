import  express ,{Application,Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import routes from './routes/routes'
const port = process.env.PORT || 3000;
const app:Application = express();
const prisma = new PrismaClient()
import * as dotenv from 'dotenv'
import cors from 'cors';
import fileUpload from "express-fileupload";

app.use(cors());

dotenv.config();

var multer = require('multer');
var upload = multer();
// for parsing multipart/form-data
app.use(upload.array()); 
// app.use(express.static('public'));
app.use(fileUpload());

app.use(express.json());


app.use("/", routes)






const PORT = 8000;
app.listen(PORT, () => {console.log("server listening on port " + PORT);
});
