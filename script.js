const routeList = [], stopList = [["Line Code","Direction","Stop Code","Stop ID","Chinese Name","English Name","Sequence"],["505","1","SAS","920","三聖","Sam Shing","1.00"],["505","1","SIL","265","兆麟","Siu Lun","2.00"],["505","1","ONT","270","安定","On Ting","3.00"],["505","1","TOC","280","市中心","Town Centre","4.00"],["505","1","TML","295","屯門","Tuen Mun","5.00"],["505","1","KIO","060","建安","Kin On","6.00"],["505","1","SKS","190","山景(南)","Shan King (South)","7.00"],["505","1","SKN","180","山景(北)","Shan King (North)","8.00"],["505","1","SHP","170","石排","Shek Pai","9.00"],["505","1","SAW","160","新圍","San Wai","10.00"],["505","1","LEK","150","良景","Leung King","11.00"],["505","1","TNK","140","田景","Tin King","12.00"],["505","1","KIS","130","建生","Kin Sang","13.00"],["505","1","CHC","120","青松","Ching Chung","14.00"],["505","1","KEL","110","麒麟","Kei Lun","15.00"],["505","1","SHL","100","兆康","Siu Hong","16.00"],["505","2","SHL","100","兆康","Siu Hong","1.00"],["505","2","CHC","120","青松","Ching Chung","2.00"],["505","2","KIS","130","建生","Kin Sang","3.00"],["505","2","TNK","140","田景","Tin King","4.00"],["505","2","LEK","150","良景","Leung King","5.00"],["505","2","SAW","160","新圍","San Wai","6.00"],["505","2","SHP","170","石排","Shek Pai","7.00"],["505","2","MIK","200","鳴琴","Ming Kum","8.00"],["505","2","KIO","060","建安","Kin On","9.00"],["505","2","TML","295","屯門","Tuen Mun","10.00"],["505","2","TOC","280","市中心","Town Centre","11.00"],["505","2","ONT","270","安定","On Ting","12.00"],["505","2","SIL","265","兆麟","Siu Lun","13.00"],["505","2","SAS","920","三聖","Sam Shing","14.00"],["507","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["507","1","SHE","240","兆禧","Siu Hei","2.00"],["507","1","TSP","250","屯門泳池","Tuen Mun Swimming Pool","3.00"],["507","1","GOG","260","豐景園","Goodview Garden","4.00"],["507","1","SIL","265","兆麟","Siu Lun","5.00"],["507","1","ONT","270","安定","On Ting","6.00"],["507","1","TOC","280","市中心","Town Centre","7.00"],["507","1","TML","295","屯門","Tuen Mun","8.00"],["507","1","HOT","070","河田","Ho Tin","9.00"],["507","1","CYB","075","蔡意橋","Choy Yee Bridge","10.00"],["507","1","NGW","230","銀圍","Ngan Wai","11.00"],["507","1","THS","220","大興(南)","Tai Hing (South)","12.00"],["507","1","THN","212","大興(北)","Tai Hing (North)","13.00"],["507","1","SAW","160","新圍","San Wai","14.00"],["507","1","LEK","150","良景","Leung King","15.00"],["507","1","TNK","140","田景","Tin King","16.00"],["507","2","TNK","140","田景","Tin King","1.00"],["507","2","TNK","140","田景","Tin King","2.00"],["507","2","LEK","150","良景","Leung King","3.00"],["507","2","SAW","160","新圍","San Wai","4.00"],["507","2","THN","212","大興(北)","Tai Hing (North)","5.00"],["507","2","THS","220","大興(南)","Tai Hing (South)","6.00"],["507","2","NGW","230","銀圍","Ngan Wai","7.00"],["507","2","CYB","075","蔡意橋","Choy Yee Bridge","8.00"],["507","2","HOT","070","河田","Ho Tin","9.00"],["507","2","TML","295","屯門","Tuen Mun","10.00"],["507","2","TOC","280","市中心","Town Centre","11.00"],["507","2","ONT","270","安定","On Ting","12.00"],["507","2","SIL","265","兆麟","Siu Lun","13.00"],["507","2","GOG","260","豐景園","Goodview Garden","14.00"],["507","2","TSP","250","屯門泳池","Tuen Mun Swimming Pool","15.00"],["507","2","SHE","240","兆禧","Siu Hei","16.00"],["507","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","17.00"],["614P","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["614P","1","SHE","240","兆禧","Siu Hei","2.00"],["614P","1","TSP","250","屯門泳池","Tuen Mun Swimming Pool","3.00"],["614P","1","GOG","260","豐景園","Goodview Garden","4.00"],["614P","1","SIL","265","兆麟","Siu Lun","5.00"],["614P","1","ONT","270","安定","On Ting","6.00"],["614P","1","TOC","280","市中心","Town Centre","7.00"],["614P","1","PUT","300","杯渡","Pui To","8.00"],["614P","1","HFT","310","何福堂","Hoh Fuk Tong","9.00"],["614P","1","SAH","320","新墟","San Hui","10.00"],["614P","1","PRV","330","景峰","Prime View","11.00"],["614P","1","FUT","340","鳳地","Fung Tei","12.00"],["614P","1","SHL","100","兆康","Siu Hong","13.00"],["615P","2","SHL","100","兆康","Siu Hong","1.00"],["615P","2","KEL","110","麒麟","Kei Lun","2.00"],["615P","2","CHC","120","青松","Ching Chung","3.00"],["615P","2","KIS","130","建生","Kin Sang","4.00"],["615P","2","TNK","140","田景","Tin King","5.00"],["615P","2","LEK","150","良景","Leung King","6.00"],["615P","2","SAW","160","新圍","San Wai","7.00"],["615P","2","SHP","170","石排","Shek Pai","8.00"],["615P","2","MIK","200","鳴琴","Ming Kum","9.00"],["615P","2","TWN","050","青雲","Tsing Wun","10.00"],["615P","2","TSS","040","青山村","Tsing Shan Tsuen","11.00"],["615P","2","LUM","030","龍門","Lung Mun","12.00"],["615P","2","LRD","020","輕鐵車廠","Light Rail Depot","13.00"],["615P","2","BUT","015","蝴蝶","Butterfly","14.00"],["615P","2","MEG","010","美樂","Melody Garden","15.00"],["615P","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","16.00"],["615P","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["615P","1","MEG","010","美樂","Melody Garden","2.00"],["615P","1","BUT","015","蝴蝶","Butterfly","3.00"],["615P","1","LRD","020","輕鐵車廠","Light Rail Depot","4.00"],["615P","1","LUM","030","龍門","Lung Mun","5.00"],["615P","1","TSS","040","青山村","Tsing Shan Tsuen","6.00"],["615P","1","TWN","050","青雲","Tsing Wun","7.00"],["615P","1","MIK","200","鳴琴","Ming Kum","8.00"],["615P","1","SHP","170","石排","Shek Pai","9.00"],["615P","1","SAW","160","新圍","San Wai","10.00"],["615P","1","LEK","150","良景","Leung King","11.00"],["615P","1","TNK","140","田景","Tin King","12.00"],["615P","1","KIS","130","建生","Kin Sang","13.00"],["615P","1","CHC","120","青松","Ching Chung","14.00"],["615P","1","KEL","110","麒麟","Kei Lun","15.00"],["615P","1","SHL","100","兆康","Siu Hong","16.00"],["614P","2","SHL","100","兆康","Siu Hong","1.00"],["614P","2","FUT","340","鳳地","Fung Tei","2.00"],["614P","2","PRV","330","景峰","Prime View","3.00"],["614P","2","SAH","320","新墟","San Hui","4.00"],["614P","2","HFT","310","何福堂","Hoh Fuk Tong","5.00"],["614P","2","PUT","300","杯渡","Pui To","6.00"],["614P","2","TOC","280","市中心","Town Centre","7.00"],["614P","2","ONT","270","安定","On Ting","8.00"],["614P","2","SIL","265","兆麟","Siu Lun","9.00"],["614P","2","GOG","260","豐景園","Goodview Garden","10.00"],["614P","2","TSP","250","屯門泳池","Tuen Mun Swimming Pool","11.00"],["614P","2","SHE","240","兆禧","Siu Hei","12.00"],["614P","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","13.00"],["610","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["610","1","MEG","010","美樂","Melody Garden","2.00"],["610","1","BUT","015","蝴蝶","Butterfly","3.00"],["610","1","LRD","020","輕鐵車廠","Light Rail Depot","4.00"],["610","1","LUM","030","龍門","Lung Mun","5.00"],["610","1","TSS","040","青山村","Tsing Shan Tsuen","6.00"],["610","1","TWN","050","青雲","Tsing Wun","7.00"],["610","1","MIK","200","鳴琴","Ming Kum","8.00"],["610","1","SHP","170","石排","Shek Pai","9.00"],["610","1","THN","212","大興(北)","Tai Hing (North)","10.00"],["610","1","THS","220","大興(南)","Tai Hing (South)","11.00"],["610","1","NGW","230","銀圍","Ngan Wai","12.00"],["610","1","AFF","080","澤豐","Affluence","13.00"],["610","1","TMH","090","屯門醫院","Tuen Mun Hospital","14.00"],["610","1","SHL","100","兆康","Siu Hong","15.00"],["610","1","LTE","350","藍地","Lam Tei","16.00"],["610","1","NAW","360","泥圍","Nai Wai","17.00"],["610","1","CUT","370","鍾屋村","Chung Uk Tsuen","18.00"],["610","1","HSK","380","洪水橋","Hung Shui Kiu","19.00"],["610","1","TOF","390","塘坊村","Tong Fong Tsuen","20.00"],["610","1","PIS","400","屏山","Ping Shan","21.00"],["610","1","SPW","560","水邊圍","Shui Pin Wai","22.00"],["610","1","FNR","570","豐年路","Fung Nin Road","23.00"],["610","1","HLR","580","康樂路","Hong Lok Road","24.00"],["610","1","TTR","590","大棠路","Tai Tong Road","25.00"],["610","1","YLL","600","元朗","Yuen Long","26.00"],["610","2","YLL","600","元朗","Yuen Long","1.00"],["610","2","TTR","590","大棠路","Tai Tong Road","2.00"],["610","2","HLR","580","康樂路","Hong Lok Road","3.00"],["610","2","FNR","570","豐年路","Fung Nin Road","4.00"],["610","2","SPW","560","水邊圍","Shui Pin Wai","5.00"],["610","2","PIS","400","屏山","Ping Shan","6.00"],["610","2","TOF","390","塘坊村","Tong Fong Tsuen","7.00"],["610","2","HSK","380","洪水橋","Hung Shui Kiu","8.00"],["610","2","CUT","370","鍾屋村","Chung Uk Tsuen","9.00"],["610","2","NAW","360","泥圍","Nai Wai","10.00"],["610","2","LTE","350","藍地","Lam Tei","11.00"],["610","2","SHL","100","兆康","Siu Hong","12.00"],["610","2","TMH","090","屯門醫院","Tuen Mun Hospital","13.00"],["610","2","AFF","080","澤豐","Affluence","14.00"],["610","2","NGW","230","銀圍","Ngan Wai","15.00"],["610","2","THS","220","大興(南)","Tai Hing (South)","16.00"],["610","2","THN","212","大興(北)","Tai Hing (North)","17.00"],["610","2","SHP","170","石排","Shek Pai","18.00"],["610","2","MIK","200","鳴琴","Ming Kum","19.00"],["610","2","TWN","050","青雲","Tsing Wun","20.00"],["610","2","TSS","040","青山村","Tsing Shan Tsuen","21.00"],["610","2","LUM","030","龍門","Lung Mun","22.00"],["610","2","LRD","020","輕鐵車廠","Light Rail Depot","23.00"],["610","2","BUT","015","蝴蝶","Butterfly","24.00"],["610","2","MEG","010","美樂","Melody Garden","25.00"],["610","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","26.00"],["614","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["614","1","SHE","240","兆禧","Siu Hei","2.00"],["614","1","TSP","250","屯門泳池","Tuen Mun Swimming Pool","3.00"],["614","1","GOG","260","豐景園","Goodview Garden","4.00"],["614","1","SIL","265","兆麟","Siu Lun","5.00"],["614","1","ONT","270","安定","On Ting","6.00"],["614","1","TOC","280","市中心","Town Centre","7.00"],["614","1","PUT","300","杯渡","Pui To","8.00"],["614","1","HFT","310","何福堂","Hoh Fuk Tong","9.00"],["614","1","SAH","320","新墟","San Hui","10.00"],["614","1","PRV","330","景峰","Prime View","11.00"],["614","1","FUT","340","鳳地","Fung Tei","12.00"],["614","1","SHL","100","兆康","Siu Hong","13.00"],["614","1","LTE","350","藍地","Lam Tei","14.00"],["614","1","NAW","360","泥圍","Nai Wai","15.00"],["614","1","CUT","370","鍾屋村","Chung Uk Tsuen","16.00"],["614","1","HSK","380","洪水橋","Hung Shui Kiu","17.00"],["614","1","TOF","390","塘坊村","Tong Fong Tsuen","18.00"],["614","1","PIS","400","屏山","Ping Shan","19.00"],["614","1","SPW","560","水邊圍","Shui Pin Wai","20.00"],["614","1","FNR","570","豐年路","Fung Nin Road","21.00"],["614","1","HLR","580","康樂路","Hong Lok Road","22.00"],["614","1","TTR","590","大棠路","Tai Tong Road","23.00"],["614","1","YLL","600","元朗","Yuen Long","24.00"],["614","2","YLL","600","元朗","Yuen Long","1.00"],["614","2","TTR","590","大棠路","Tai Tong Road","2.00"],["614","2","HLR","580","康樂路","Hong Lok Road","3.00"],["614","2","FNR","570","豐年路","Fung Nin Road","4.00"],["614","2","SPW","560","水邊圍","Shui Pin Wai","5.00"],["614","2","PIS","400","屏山","Ping Shan","6.00"],["614","2","TOF","390","塘坊村","Tong Fong Tsuen","7.00"],["614","2","HSK","380","洪水橋","Hung Shui Kiu","8.00"],["614","2","CUT","370","鍾屋村","Chung Uk Tsuen","9.00"],["614","2","NAW","360","泥圍","Nai Wai","10.00"],["614","2","LTE","350","藍地","Lam Tei","11.00"],["614","2","SHL","100","兆康","Siu Hong","12.00"],["614","2","FUT","340","鳳地","Fung Tei","13.00"],["614","2","PRV","330","景峰","Prime View","14.00"],["614","2","SAH","320","新墟","San Hui","15.00"],["614","2","HFT","310","何福堂","Hoh Fuk Tong","16.00"],["614","2","PUT","300","杯渡","Pui To","17.00"],["614","2","TOC","280","市中心","Town Centre","18.00"],["614","2","ONT","270","安定","On Ting","19.00"],["614","2","SIL","265","兆麟","Siu Lun","20.00"],["614","2","GOG","260","豐景園","Goodview Garden","21.00"],["614","2","TSP","250","屯門泳池","Tuen Mun Swimming Pool","22.00"],["614","2","SHE","240","兆禧","Siu Hei","23.00"],["614","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","24.00"],["615","1","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","1.00"],["615","1","MEG","010","美樂","Melody Garden","2.00"],["615","1","BUT","015","蝴蝶","Butterfly","3.00"],["615","1","LRD","020","輕鐵車廠","Light Rail Depot","4.00"],["615","1","LUM","030","龍門","Lung Mun","5.00"],["615","1","TSS","040","青山村","Tsing Shan Tsuen","6.00"],["615","1","TWN","050","青雲","Tsing Wun","7.00"],["615","1","MIK","200","鳴琴","Ming Kum","8.00"],["615","1","SHP","170","石排","Shek Pai","9.00"],["615","1","SAW","160","新圍","San Wai","10.00"],["615","1","LEK","150","良景","Leung King","11.00"],["615","1","TNK","140","田景","Tin King","12.00"],["615","1","KIS","130","建生","Kin Sang","13.00"],["615","1","CHC","120","青松","Ching Chung","14.00"],["615","1","SHL","100","兆康","Siu Hong","15.00"],["615","1","LTE","350","藍地","Lam Tei","16.00"],["615","1","NAW","360","泥圍","Nai Wai","17.00"],["615","1","CUT","370","鍾屋村","Chung Uk Tsuen","18.00"],["615","1","HSK","380","洪水橋","Hung Shui Kiu","19.00"],["615","1","TOF","390","塘坊村","Tong Fong Tsuen","20.00"],["615","1","PIS","400","屏山","Ping Shan","21.00"],["615","1","SPW","560","水邊圍","Shui Pin Wai","22.00"],["615","1","FNR","570","豐年路","Fung Nin Road","23.00"],["615","1","HLR","580","康樂路","Hong Lok Road","24.00"],["615","1","TTR","590","大棠路","Tai Tong Road","25.00"],["615","1","YLL","600","元朗","Yuen Long","26.00"],["615","2","YLL","600","元朗","Yuen Long","1.00"],["615","2","TTR","590","大棠路","Tai Tong Road","2.00"],["615","2","HLR","580","康樂路","Hong Lok Road","3.00"],["615","2","FNR","570","豐年路","Fung Nin Road","4.00"],["615","2","SPW","560","水邊圍","Shui Pin Wai","5.00"],["615","2","PIS","400","屏山","Ping Shan","6.00"],["615","2","TOF","390","塘坊村","Tong Fong Tsuen","7.00"],["615","2","HSK","380","洪水橋","Hung Shui Kiu","8.00"],["615","2","CUT","370","鍾屋村","Chung Uk Tsuen","9.00"],["615","2","NAW","360","泥圍","Nai Wai","10.00"],["615","2","LTE","350","藍地","Lam Tei","11.00"],["615","2","SHL","100","兆康","Siu Hong","12.00"],["615","2","CHC","120","青松","Ching Chung","13.00"],["615","2","KIS","130","建生","Kin Sang","14.00"],["615","2","TNK","140","田景","Tin King","15.00"],["615","2","LEK","150","良景","Leung King","16.00"],["615","2","SAW","160","新圍","San Wai","17.00"],["615","2","SHP","170","石排","Shek Pai","18.00"],["615","2","MIK","200","鳴琴","Ming Kum","19.00"],["615","2","TWN","050","青雲","Tsing Wun","20.00"],["615","2","TSS","040","青山村","Tsing Shan Tsuen","21.00"],["615","2","LUM","030","龍門","Lung Mun","22.00"],["615","2","LRD","020","輕鐵車廠","Light Rail Depot","23.00"],["615","2","BUT","015","蝴蝶","Butterfly","24.00"],["615","2","MEG","010","美樂","Melody Garden","25.00"],["615","2","FEP","001","屯門碼頭","Tuen Mun Ferry Pier","26.00"],["705","1","TSL","430","天水圍","Tin Shui Wai","1.00"],["705","1","TIT","435","天慈","Tin Tsz","2.00"],["705","1","TWU","450","天湖","Tin Wu","3.00"],["705","1","GIN","455","銀座","Ginza","4.00"],["705","1","TWI","500","天榮","Tin Wing","5.00"],["705","2","TWI","500","天榮","Tin Wing","1.00"],["705","2","TYU","510","天悅","Tin Yuet","2.00"],["705","2","TSA","520","天秀","Tin Sau","3.00"],["705","2","WEP","530","濕地公園","Wetland Park","4.00"],["705","2","THE","540","天恒","Tin Heng","5.00"],["705","2","TYA","550","天逸","Tin Yat","6.00"],["705","2","TFU","480","天富","Tin Fu","7.00"],["705","2","CHF","468","頌富","Chung Fu","8.00"],["705","2","TSU","460","天瑞","Tin Shui","9.00"],["705","2","LOC","448","樂湖","Locwood","10.00"],["705","2","TIY","445","天耀","Tin Yiu","11.00"],["705","2","TSL","430","天水圍","Tin Shui Wai","12.00"],["706","1","TSL","430","天水圍","Tin Shui Wai","1.00"],["706","1","TIY","445","天耀","Tin Yiu","2.00"],["706","1","LOC","448","樂湖","Locwood","3.00"],["706","1","TSU","460","天瑞","Tin Shui","4.00"],["706","1","CHF","468","頌富","Chung Fu","5.00"],["706","1","TFU","480","天富","Tin Fu","6.00"],["706","1","TYA","550","天逸","Tin Yat","7.00"],["706","1","THE","540","天恒","Tin Heng","8.00"],["706","1","WEP","530","濕地公園","Wetland Park","9.00"],["706","1","TSA","520","天秀","Tin Sau","10.00"],["706","1","TYU","510","天悅","Tin Yuet","11.00"],["706","1","TWI","500","天榮","Tin Wing","12.00"],["706","2","TWI","500","天榮","Tin Wing","1.00"],["706","2","GIN","455","銀座","Ginza","2.00"],["706","2","TWU","450","天湖","Tin Wu","3.00"],["706","2","TIT","435","天慈","Tin Tsz","4.00"],["706","2","TSL","430","天水圍","Tin Shui Wai","5.00"],["751","1","YAO","275","友愛","Yau Oi","1.00"],["751","1","ONT","270","安定","On Ting","2.00"],["751","1","TOC","280","市中心","Town Centre","3.00"],["751","1","TML","295","屯門","Tuen Mun","4.00"],["751","1","HOT","070","河田","Ho Tin","5.00"],["751","1","CYB","075","蔡意橋","Choy Yee Bridge","6.00"],["751","1","AFF","080","澤豐","Affluence","7.00"],["751","1","TMH","090","屯門醫院","Tuen Mun Hospital","8.00"],["751","1","SHL","100","兆康","Siu Hong","9.00"],["751","1","LTE","350","藍地","Lam Tei","10.00"],["751","1","NAW","360","泥圍","Nai Wai","11.00"],["751","1","CUT","370","鍾屋村","Chung Uk Tsuen","12.00"],["751","1","HSK","380","洪水橋","Hung Shui Kiu","13.00"],["751","1","HMT","425","坑尾村","Hang Mei Tsuen","14.00"],["751","1","TSL","430","天水圍","Tin Shui Wai","15.00"],["751","1","TIT","435","天慈","Tin Tsz","16.00"],["751","1","TWU","450","天湖","Tin Wu","17.00"],["751","1","GIN","455","銀座","Ginza","18.00"],["751","1","TWI","500","天榮","Tin Wing","19.00"],["751","1","CHE","490","翠湖","Chestwood","20.00"],["751","1","CHF","468","頌富","Chung Fu","21.00"],["751","1","TFU","480","天富","Tin Fu","22.00"],["751","1","TYA","550","天逸","Tin Yat","23.00"],["751","1","TYA","550","天逸","Tin Yat","24.00"],["751","2","TYA","550","天逸","Tin Yat","1.00"],["751","2","TFU","480","天富","Tin Fu","2.00"],["751","2","CHF","468","頌富","Chung Fu","3.00"],["751","2","CHE","490","翠湖","Chestwood","4.00"],["751","2","TWI","500","天榮","Tin Wing","5.00"],["751","2","GIN","455","銀座","Ginza","6.00"],["751","2","TWU","450","天湖","Tin Wu","7.00"],["751","2","TIT","435","天慈","Tin Tsz","8.00"],["751","2","TSL","430","天水圍","Tin Shui Wai","9.00"],["751","2","HMT","425","坑尾村","Hang Mei Tsuen","10.00"],["751","2","HSK","380","洪水橋","Hung Shui Kiu","11.00"],["751","2","CUT","370","鍾屋村","Chung Uk Tsuen","12.00"],["751","2","NAW","360","泥圍","Nai Wai","13.00"],["751","2","LTE","350","藍地","Lam Tei","14.00"],["751","2","SHL","100","兆康","Siu Hong","15.00"],["751","2","TMH","090","屯門醫院","Tuen Mun Hospital","16.00"],["751","2","AFF","080","澤豐","Affluence","17.00"],["751","2","CYB","075","蔡意橋","Choy Yee Bridge","18.00"],["751","2","HOT","070","河田","Ho Tin","19.00"],["751","2","TML","295","屯門","Tuen Mun","20.00"],["751","2","TOC","280","市中心","Town Centre","21.00"],["751","2","YAO","275","友愛","Yau Oi","22.00"],["761P","1","TYA","550","天逸","Tin Yat","1.00"],["761P","1","TFU","480","天富","Tin Fu","2.00"],["761P","1","CHF","468","頌富","Chung Fu","3.00"],["761P","1","TSU","460","天瑞","Tin Shui","4.00"],["761P","1","LOC","448","樂湖","Locwood","5.00"],["761P","1","TIY","445","天耀","Tin Yiu","6.00"],["761P","1","HMT","425","坑尾村","Hang Mei Tsuen","7.00"],["761P","1","TOF","390","塘坊村","Tong Fong Tsuen","8.00"],["761P","1","PIS","400","屏山","Ping Shan","9.00"],["761P","1","SPW","560","水邊圍","Shui Pin Wai","10.00"],["761P","1","FNR","570","豐年路","Fung Nin Road","11.00"],["761P","1","HLR","580","康樂路","Hong Lok Road","12.00"],["761P","1","TTR","590","大棠路","Tai Tong Road","13.00"],["761P","1","YLL","600","元朗","Yuen Long","14.00"],["761P","2","YLL","600","元朗","Yuen Long","1.00"],["761P","2","TTR","590","大棠路","Tai Tong Road","2.00"],["761P","2","HLR","580","康樂路","Hong Lok Road","3.00"],["761P","2","FNR","570","豐年路","Fung Nin Road","4.00"],["761P","2","SPW","560","水邊圍","Shui Pin Wai","5.00"],["761P","2","PIS","400","屏山","Ping Shan","6.00"],["761P","2","TOF","390","塘坊村","Tong Fong Tsuen","7.00"],["761P","2","HMT","425","坑尾村","Hang Mei Tsuen","8.00"],["761P","2","TIY","445","天耀","Tin Yiu","9.00"],["761P","2","LOC","448","樂湖","Locwood","10.00"],["761P","2","TSU","460","天瑞","Tin Shui","11.00"],["761P","2","CHF","468","頌富","Chung Fu","12.00"],["761P","2","TFU","480","天富","Tin Fu","13.00"],["761P","2","TYA","550","天逸","Tin Yat","14.00"],["761P","2","TYA","550","天逸","Tin Yat","15.00"],[""]];;
let currentRoute, currentDirection, startIndex = 1, endIndex = 1, x = "<tr><td style='width:14%;'><strong>路線</strong></td><td style='width:86%;'><strong>方向</strong></td></tr>";
const appScriptUrl = "https://script.google.com/macros/s/AKfycbyerovyJhwPACBq_7Ri0tEei25wm8BhCJ7l-UTkdyGHjWu4n8ZrzaqzLhH5e6M6nNPh0A/exec";

for (let i = 1; i < stopList.length; i++){
	if ((stopList[i][0] != currentRoute || stopList[i][1] != currentDirection) && i != 1){
		endIndex = i - 1;
		routeList.push({route: stopList[endIndex][0], orig_tc: stopList[startIndex][4], dest_tc: stopList[endIndex][4], dir: stopList[endIndex][1]});
		startIndex = i;
	}
	currentRoute = stopList[i][0], currentDirection = stopList[i][1];
}

routeList.sort(function(a, b) {
	var routeA = String(a["route"]);
	var routeB = String(b["route"]);

	var numA = parseInt(routeA, 10);
	var numB = parseInt(routeB, 10);
	var alphaA = routeA.replace(numA, "");
	var alphaB = routeB.replace(numB, "");

	if (numA < numB) {
		return -1;
	} else if (numA > numB) {
		return 1;
	}

	if (alphaA < alphaB) {
		return -1;
	} else if (alphaA > alphaB) {
		return 1;
	}

	return 0;
});

for (let i = 0; i < routeList.length; i++){
	x = x + "<tr><td>" + routeList[i]["route"] + "</td><td>";
	x = x + "<button class='btnOrigin' onclick=\"routeStop('" + routeList[i]["route"] + "', '" + routeList[i]["dir"] + "', '" + routeList[i]["dest_tc"] + "')\"><p style='font-size: 75%;margin: 0px 0px'>" + routeList[i]["orig_tc"] + "</p><p style='margin: 0px 0px'><span style='font-size: 75%'>往</span> " + routeList[i]["dest_tc"] + "</p></button></td></tr>";
}

document.getElementById("routeTable").innerHTML = x;
document.getElementById("routeList").style.display = "block";
document.getElementById("waiting").style.display = "none";

markdown("LRT-onload", "", "", "");


function hptoHome(){
	document.getElementById("routeSearch").style.display = "block";
	document.getElementById("stationList").style.display = "none";
	document.getElementById("stationTable").innerHTML = "<tbody><tr><td></td><td><strong>輕鐵站</strong></td></tr></tbody>";
	document.getElementById("etaList").style.display = "none";
	document.getElementById("routeNumber").innerHTML = "";
	document.getElementById("stopName").innerHTML = "";
	searchRoute();
	document.getElementById("routeList").style.display = "block";
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// find all stops of a route given the route and direction
function routeStop(route, direction, destination){
	document.getElementById("routeList").style.display = "none";
	document.getElementById("routeSearch").style.display = "none";
	document.getElementById("routeSearch").value = "";
	document.getElementById("loading").style.display = "block";
	
	let start, j = 0, x = "<tr><td><strong></strong></td><td><strong>輕鐵站</strong></td></tr>";
	const tbody = document.querySelector("#stationTable tbody");

	for (let i = 1; i < stopList.length; i++){
		if (stopList[i][0] == route && stopList[i][1] == direction){
			start = true, j++;

			let tr = document.createElement("tr");
			let number = document.createElement("td");
			let stopName = document.createElement("td");
			let button = document.createElement("button");
			let eta = document.createElement("div");
			let num = j-1;
			
			number.textContent = j;
			button.className = "btnEta";
			button.style = "text-align: left";
			button.onclick = function (){routeStopEta(stopList[i][3], route, direction, stopList[i][4], destination, num)};
			button.textContent = stopList[i][4];
			eta.id = (num).toString();
			eta.style = "white-space: pre-wrap";


			// x = x + "<tr><td>" + j + "</td><td><button class='btnEta' style='text-align: left' onclick=\"routeStopEta('" + stopList[i][3] + "', '" + route + "', '" + direction + "', '" + stopList[i][4] + "', '" +  destination + "')\">" + stopList[i][4] + "</button></td></tr>";
			stopName.append(button);
			stopName.append(eta);
			tr.append(number);
			tr.append(stopName);
			tbody.append(tr);
		}
	}
	
	// document.getElementById("stationTable").innerHTML = x;
	document.getElementById("stationList").style.display = "block";
	document.getElementById("loading").style.display = "none";
	document.getElementById("routeNumber").innerHTML = "路線： " + route;
}

//figure out the eta given a stop-id and a route
function routeStopEta (stopId, route, direction, stopName, destination, sequence){
	document.getElementById("routeList").style.display = "none";
	// document.getElementById("loading").style.display = "block";
	// document.getElementById("stationList").style.display = "none";
	let remark, count = 0, departureList, div = document.getElementById(sequence);
	const eta = [];
	
	for (let i = 0; i < stopList.length; i++){
		if (stopList[i][0] == route && stopList[i][1] == direction){
			count++
		}
	}

	for (let i = 0; i < count; i++){
		let div = document.getElementById(i);	
		div.innerHTML = "";
	}
	
	markdown("LRT-Info", route, stopId, direction);
	
	if (route == "705" || route == "706"){
		destination = "天水圍循環綫";
	}
	
	const url = "https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=" + stopId;
	const xhttpr = new XMLHttpRequest();
	
	xhttpr.open("GET", url, true);
	
	// let x = "<tr><td><strong></strong></td><td><strong>目的地</strong></td><td><strong>到站時間</strong></td></tr>";

	xhttpr.send();

	xhttpr.onload = ()=> {
		if (xhttpr.status == 200){
			const response = JSON.parse(xhttpr.response);
			const responseList = response["platform_list"];
			
			let sequence = 0;
			for (let i = 0; i < responseList.length; i++){
				departureList = responseList[i]["route_list"];
				for (let j = 0; j < departureList.length; j++){
					if (departureList[j]["route_no"] == route && departureList[j]["dest_ch"] == destination){
						// etaTime = ;
						remark = "單卡";
						if (departureList[j]["train_length"] == 2){
							remark = "拖卡";
						}
						sequence++;
						eta.push({dest: destination, time: departureList[j]["time_ch"], remark: remark, plat: responseList[i]["platform_id"]})
						// x = x + "<tr><td>" + sequence + "</td><td>" + destination + "</td><td>" + etaTime + remark + "</td></tr>";
					}
				}
			}
			
			// document.getElementById("etaTable").innerHTML = x;
			// document.getElementById("etaList").style.display = "block";
			// document.getElementById("backRoute").style.display = "flex";
			document.getElementById("allEta").onclick = function () {allEta(responseList)};
			// document.getElementById("loading").style.display = "none";
			// document.getElementById("stopName").innerHTML = "輕鐵站： " + stopName;
			// document.getElementById("stopName").style.display = "block";

			outputEta(eta, div);
		}
    }
}

function outputEta(eta, div){
	// eta.sort(function (a, b) {
	// 	return a.time.localeCompare(b.time);
	// });

	for (let i = 0; i < eta.length; i++){
		// let etaStamp = new Date(eta[i].time);
		// let currentTime = new Date()
		// etaStamp = (etaStamp.getTime() - currentTime.getTime()) / 60000;
		// etaStamp = Math.ceil(etaStamp);
		// if (etaStamp <= 0){
		// 	etaStamp = 1;
		// }
		if (eta[i].remark == null){
			eta[i].remark = "";
		}
		
		let row = document.createElement("span");
		row.style = "font-size: 80%"
		// let time = etaStamp.toString() + "分鐘";
		row.textContent = eta[i].time + " " + eta[i].dest + " " + eta[i].remark + " " + eta[i].plat + "號月台";
		
		row.appendChild(document.createElement("br"));
		div.appendChild(row);
	}
	if (eta.length == 0){
		div.innerHTML = "<span>未有班次資料</span>";
	}
}

function searchRoute(){
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("routeSearch");
	filter = input.value.toUpperCase();
	table = document.getElementById("routeTable");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) == 0) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
}

function allEta(responseList){
	document.getElementById("stationList").style.display = "none";
	document.getElementById("backRoute").style.display = "none";
	document.getElementById("routeList").style.display = "none";
	document.getElementById("routeNumber").style.display = "none";
	document.getElementById("loading").style.display = "block";
	document.getElementById("etaList").style.display = "none";
	let dir, oppositeDirection, etaTime, platformNumber, remark, departureList, sequence = 0;
	let x = "<tr><td><strong>路線</strong></td><td><strong>目的地</strong></td><td><strong>到站時間</strong></td></tr>";
	
	for (let i = 0; i < responseList.length; i++){
		departureList = responseList[i]["route_list"];
		platformNumber = responseList[i]["platform_id"] + " 號月台";
		x = x + "<tr style='background-color: #003300'><td colspan='3'><strong>" + platformNumber + "</strong></td></tr>";
		for (let j = 0; j < departureList.length; j++){
			etaTime = departureList[j]["time_ch"];
			remark = "<p style='font-size: 75%;color: lightcyan;margin: 0px 0px'>單卡</p>";
			if (departureList[j]["train_length"] == 2){
				remark = "<p style='font-size: 75%;color: lightcyan;margin: 0px 0px'>拖卡</p>";
			}
			sequence++;
			x = x + "<tr><td>" + departureList[j]["route_no"] + "</td><td>" + departureList[j]["dest_ch"] + "</td><td>" + etaTime + remark + "</td></tr>";
		}
		sequence = 0;
	}
	if (x == "<tr><td><strong></strong></td><td><strong>目的地</strong></td><td><strong>到站時間</strong></td></tr>"){
		x = "<tr><td><strong>未來60分鐘沒有由此站開出的班次</strong></td><tr>";
	}
	document.getElementById("etaTable").innerHTML = x;
	document.getElementById("etaList").style.display = "block";
	document.getElementById("loading").style.display = "none";
}

function backToStopList(){
	document.getElementById("stationList").style.display = "block";
	document.getElementById("etaList").style.display = "none";
	document.getElementById("stopName").style.display = "none";
	document.getElementById("backRoute").style.display = "none";
}

async function markdown(description, latitude, longitude, accuracy){
	const xhttpr = new XMLHttpRequest(), agent = window.navigator.userAgent, platform = window.navigator.platform, ipAddress = await getIp(), userUrl = window.location.href;
	const orientation = window.screen.orientation.type, logical = window.screen.width + " x " + window.screen.height, pxRatio = window.devicePixelRatio;
	const actual = window.screen.width * window.devicePixelRatio + " x " + window.screen.height * window.devicePixelRatio;
	const info = "User Agent: " + agent + " Platform: " + platform + " IP Address: " + ipAddress + " Reference URL: " + userUrl + " Screen Orientation: " + orientation + " Logical resolution: " + logical + " Actual resolution: " + actual + " Pixel Ratio: " + pxRatio;
	const url = appScriptUrl + "?q=markdown&des=" + description + "&lat=" + latitude + "&lng=" + longitude + "&acc=" + accuracy + "&info=" + info;
	xhttpr.open("GET", url, true);
	xhttpr.send();
}

function getIp() {
	return new Promise (async (resolve) => {
		const response = await fetch("https://api.ipify.org?format=json");
		const ip = await response.json();
		resolve(ip["ip"]);
	});
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}