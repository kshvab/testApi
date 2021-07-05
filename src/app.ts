const cp = require("child_process");
const spawn = cp.spawn;
const childProcess = require("child_process");

import AutoGitUpdate from "auto-git-update";

const config = {
    repository: "https://github.com/kshvab/testApi.git",
    tempLocation: "C:/logs",
    ignoreFiles: [],
    executeOnComplete: " D:\\BTT\\testApp\\start.bat",
    exitOnComplete: true,
};

const updater = new AutoGitUpdate(config);

updater.autoUpdate();
/*
childProcess.exec(`start start.bat`, function (err, stdout, stderr) {
    if (err) {
        console.error(err);
        return false;
    }
});
setInterval(proceEx, 5000);
function proceEx() {
    console.log("You may close this window!");

    process.exit(0);
}
*/

/*
let child;
const app = () => {
    console.log(888);
    restartApp();
};
setInterval(app, 5000);

export { app };

function restartApp() {
    console.log("[xxx] - qBitTask is started");

    //spawn("git", ["pull"]);
    let child = spawn("start", ["start.bat"]);
    child.stdout.setEncoding("utf8");
    child.stdout.on("data", function (data) {
        var str = data.toString();
        console.log(str);
    });
    //process.exit();

    // git pull
    //spawn("npm", ["install"]);
    //spawn("yarn", ["install"]).on("close", function () {
    
        if (child) {
            child.kill();
        }
        startApp();
        
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
*/
