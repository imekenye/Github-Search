import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
  name: "dateConvert"
})
export class DateConvertPipe implements PipeTransform {
  transform(value: string) {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, "dd/MM/yyyy");
    return value;
  }
}
