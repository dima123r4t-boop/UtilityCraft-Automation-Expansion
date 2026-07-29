export class Logger {

    static info(message){
        console.warn("[Automation] " + message);
    }

    static error(message){
        console.error("[Automation] " + message);
    }

}
