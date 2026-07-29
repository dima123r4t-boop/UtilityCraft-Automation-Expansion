export class Logger {

    static info(message){

        console.warn(`[UtilityCraft] ${message}`);

    }

    static error(message){

        console.error(`[UtilityCraft ERROR] ${message}`);

    }

    static debug(message){

        console.warn(`[UtilityCraft DEBUG] ${message}`);

    }

}
