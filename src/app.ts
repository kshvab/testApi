const cp = require("child_process");
const spawn = cp.spawn;
let child;

const app = () => {
    console.log(888);
    restartApp();
};
setInterval(app, 5000);

export { app };

function restartApp() {
    spawn("git", ["pull"]); // git pull
    spawn("yarn", ["install"]);
    //spawn("yarn", ["install"]).on("close", function () {
    /*
        if (child) {
            child.kill();
        }
        startApp();
        */
    // });
}

function startApp() {
    child = spawn("ts-node", ["src/app.ts"]);
    child.stdout.setEncoding("utf8");
    child.stdout.on("data", function (data) {
        var str = data.toString();
        console.log(str);
    });
    child.on("close", function (code) {
        console.log("process exit code " + code);
    });
}

//startApp();
