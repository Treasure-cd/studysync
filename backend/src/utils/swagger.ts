import { Express, Request, Response } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options: swaggerJsdoc.Options = {
    definition: {
        openApi: "3.0.0",
        info: {
            title: "FocusPair Docs",
            version: "1.0.0",
        },
    },
     apis: ["./controllers/*.ts"],
}

const specs = swaggerJsdoc(options);

export default function swaggerDocs (app: Express, port: number) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

    app.get('docs/json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', "application/json");
        res.send(specs);


    });

    console.log("Available at localhost/docs");
}