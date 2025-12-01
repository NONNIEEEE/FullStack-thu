function createLogEntry(message) {
  const now = new Date();
  const timestamp = now.toLocaleTimeString('th-TH');

  const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

  const logMessage = message.toUpperCase();

  return `[${timestamp}] [${eventId}] - ${logMessage}`;
}

const log = createLogEntry("User login successful");
console.log(log);
// Output (ตัวอย่าง): [14:30:55] [A4B1C8D3] - USER LOGIN SUCCESSFUL