type LogLevel = "debug" | "info" | "warn" | "error";

const order: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

function shouldLog(current: LogLevel, min: LogLevel): boolean {
  return order[current] >= order[min];
}

export function createLogger(minLevel: LogLevel = "info") {
  const write =
    (level: LogLevel) => (message: string, meta?: Record<string, unknown>) => {
      if (!shouldLog(level, minLevel)) return;
      const payload = meta ? ` ${JSON.stringify(meta)}` : "";
      const line = `[${level.toUpperCase()}] ${message}${payload}`;
      if (level === "error") console.error(line);
      else if (level === "warn") console.warn(line);
      else console.log(line);
    };

  return {
    debug: write("debug"),
    info: write("info"),
    warn: write("warn"),
    error: write("error"),
  };
}

export type Logger = ReturnType<typeof createLogger>;
