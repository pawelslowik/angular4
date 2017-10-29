export class SearchParameter {

    parameterHeader: string
    parameterName: string;
    parameterValue: string;

    constructor(parameterHeader: string, parameterName: string, parameterValue: string){
        this.parameterHeader = parameterHeader;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    getParameterHeader(): string {
        return this.parameterHeader;
    }

    getParameterName(): string {
        return this.parameterName;
    }

    getParameterValue(): string {
        return this.parameterValue;
    }
}