import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: String, args?: any): String {
    if(value == null || value.length == 0){
      return "";
    }
    let rawNumber = value.replace(" ", "").replace("-", "");
    let mobileRegexp = new RegExp("^\\d{9}$");
    if(mobileRegexp.test(rawNumber)){
      return rawNumber.slice(0, 3) + "-" 
      + rawNumber.slice(3, 6) + "-" 
      + rawNumber.slice(6, 10);
    }
    return value;
  }

}
