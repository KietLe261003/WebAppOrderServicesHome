import chalk from "chalk";

class OutputType {
    static INFOMATION = "Info";
    static SUCCESS = "Success";
    static ERROR = "Error";
    static WARNING = "Warning";
}

function print(message, outputType) {
    if(outputType==OutputType.SUCCESS)
    {
        console.log(chalk.green(message));
    }
    if(outputType==OutputType.INFOMATION)
    {
        console.log(chalk.white(message));
    }
    if(outputType==OutputType.ERROR)
    {
        console.log(chalk.red(message));
    }
    if(outputType==OutputType.WARNING)
    {
        console.log(chalk.yellow(message));
    }
    
}

export {
    print,
    OutputType
}