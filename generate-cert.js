// generate-cert.js

const { execSync } = require("child_process");
const path = require("path");

const certCommand = `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost-key.pem -out localhost.pem -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost"`;

try {
  console.log("🔄 Generating self-signed SSL certificate...");
  execSync(certCommand, { stdio: "inherit" });
  console.log("✅ Certificate generated successfully!");
} catch (error) {
  console.error("❌ Error generating certificate:", error);
  process.exit(1);
}

const serverDir = path.join(__dirname, "hc-chat-server");
const installCommand = "npm install";

try {
  console.log(`\n🔄 Installing dependencies for hc-chat-server...`);
  // Use the `cwd` option to run the command in the specified directory
  execSync(installCommand, { cwd: serverDir, stdio: "inherit" });
  console.log("✅ Dependencies for hc-chat-server installed successfully!");
} catch (error) {
  console.error(`❌ Error installing dependencies in ${serverDir}:`, error);
  process.exit(1);
}
