import { createServer, Model, Response } from "miragejs";

import { contacts } from "./mockup/contact";
import { metrics } from "./mockup/metrics";
import { nationalRecords } from "./mockup/nationalRecords";
import { judicialRecords } from "./mockup/judicialRecords";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
      metric: Model,
      nationalRecord: Model,
      judicialRecord: Model,
    },

    seeds(server) {
      metrics.forEach((metric) => server.create("metric", metric));
      contacts.forEach((contact) => server.create("contact", contact));
      nationalRecords.forEach((nationalRecord) =>
        server.create("nationalRecord", nationalRecord)
      );
      judicialRecords.forEach((judicialRecord) =>
        server.create("judicialRecord", judicialRecord)
      );
    },

    routes() {
      this.namespace = "api";

      this.timing = 100;

      //retrieve a list of all current metrics
      this.get("/metrics", (schema) => {
        return schema.metrics.all();
      });

      //retrieve a list of all contacts
      this.get("/contacts", (schema) => {
        return schema.contacts.all();
      });

      this.get(
        "/registry/:nationalID",
        (schema, request) => {
          let record = schema.nationalRecords.where({
            nationalID: request.params.nationalID,
          });

          if (record.length) return record;

          return new Response(
            404,
            {},
            {
              status: 404,
              error: "This Person doesn't exist in the National Registry",
            }
          );
        },
        { timing: 1000 }
      );

      this.get(
        "/judicial/:nationalID",
        (schema, request) => {
          let record = schema.judicialRecords.where({
            nationalID: request.params.nationalID,
          });

          if (record.length) return record;

          return new Response(
            404,
            {},
            {
              status: 404,
              error: "This Person doesn't exist in the National Archives",
            }
          );
        },
        { timing: 1000 }
      );

      this.get(
        "/score/:nationalID",
        (schema, request) => {
          let score = Math.floor(Math.random() * 100) + 1;

          let judicialRecord = schema.judicialRecords.where({
            nationalID: request.params.nationalID,
          });

          let nationalRecord = schema.judicialRecords.where({
            nationalID: request.params.nationalID,
          });

          //validate that the person exist in the national registry in order to return a score
          if (judicialRecord.length && nationalRecord.length) return score;
          else return 0;
        },
        { timing: 2000 }
      );
    },
  });

  return server;
}
