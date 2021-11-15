function isLeapYear(year) {
    // TODO
    if( year%400==0) return true;     //كانت المشكله ب سنة ٢٠٠٠ ف خليته يشيك على ٤٠٠ بالاول وضبط
    if( year%100==0) return false;
    if( year%4==0) return true;
    return false;
  }