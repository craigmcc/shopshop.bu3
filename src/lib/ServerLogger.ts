// @lib/ServerLogger.ts

/**
 * Configure and return a Pino logger for server generated messages.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

//const rfs = require("rotating-file-stream");

// Internal Modules ----------------------------------------------------------

import Timestamps from "@/lib/Timestamps";

// Public Objects -----------------------------------------------------------

const NODE_ENV = process.env.NODE_ENV;

const logger = require("pino")({
    base: null, // Remove "hostname", "name", and "pid"
    level: (NODE_ENV === "production") ? "info" : "debug",
    timestamp: function (): string {
        return ',"time":"' + Timestamps.iso() + '"';
    },
}, process.stdout);

export default logger;
