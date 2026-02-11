import { execSync } from "child_process";

try {
  console.log("Regenerating yarn.lock...");
  execSync("yarn install --no-frozen-lockfile", {
    cwd: "/vercel/share/v0-project",
    stdio: "inherit",
  });
  console.log("yarn.lock has been regenerated successfully.");
} catch (error) {
  console.error("Failed to regenerate yarn.lock:", error.message);
  process.exit(1);
}
