export const convertSeconds = (totalseconds:any) => {    
  var hours:number = Math.floor(totalseconds / 3600);
  totalseconds -= (hours * 3600);
  var minutes:number = Math.floor(totalseconds / 60);
  totalseconds -= (minutes * 60);
  var seconds:number = totalseconds
  var dateandtime:string = hours < 10 ? "0" + hours.toString()  + ":": hours.toString() + ":";
  dateandtime += minutes < 10 ? "0" + minutes.toString() + ":" : minutes.toString() + ":";
  dateandtime += seconds < 10 ? "0" + seconds.toString() : seconds.toString();
  return dateandtime;
};