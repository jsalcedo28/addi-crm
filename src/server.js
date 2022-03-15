import { createServer, Model } from "miragejs";

import { contacts } from "./mockup/contact";
import { metrics } from "./mockup/metrics";
import { nationalRegistry } from "./mockup/nationalRegistry";
import { judicialRecords } from "./mockup/judicialRecords";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
      metric: Model,
      nationalRegistry: Model,
      judicialRecord: Model,
    },

    seeds(server) {
      metrics.forEach((metric) => server.create("metric", metric));
      contacts.forEach((contact) => server.create("contact", contact));
      nationalRegistry.forEach((nationalRegistry) =>
        server.create("nationalRegistry", nationalRegistry)
      );
      judicialRecords.forEach((judicialRecord) =>
        server.create("judicialRecord", judicialRecord)
      );
    },

    routes() {
      this.namespace = "api";

      this.get("/metrics", (schema) => {
        return schema.metrics.all();
      });

      this.get("/contacts", (schema) => {
        return schema.contacts.all();
      });
    },
  });

  return server;
}
