import "dotenv/config";
import {z} from "zod";

const envSchema = z.object({
    APP_NAME: z.string(),
    PORT: z.string().refine(port => parseInt(port) > 1000 && parseInt(port) < 65535, 
"Invalid port number"),
    NODE_ENV: z.enum(["development", "production", "test"]),
    MONGO_CONNECTION: z.string()
})

type Env = z.infer<typeof envSchema>

export const ENV = envSchema.parse(process.env);