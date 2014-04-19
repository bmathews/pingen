# Map Pin Generator

Generate map pins with font-awesome icons, text, and dynamic colors.


![image](https://cloud.githubusercontent.com/assets/848347/2747435/61840d7c-c76b-11e3-9205-f068ca2a3fb4.png)

### Install
with npm do `npm install pingen`

Uses [node-canvas](https://github.com/learnboost/node-canvas), which depends on Cairo. 

### Usage
```
var pingen = require('pingen');

// color, text, icon, twoX 
var stream = pingen("green", null, "fa-home", true);

stream = pingen("#fff", "13", null, false);
```

### Example server api
`GET localhost:3000/:size/:color/:icon/marker.png?text=string`

![image](https://cloud.githubusercontent.com/assets/848347/2747447/108d1674-c76c-11e3-86f1-e1dccb989bbc.png)

`/2x/ccc/fa-microphone/marker.png`
#

![image](https://cloud.githubusercontent.com/assets/848347/2747450/2c3d2148-c76c-11e3-89bc-6a982c2fab9a.png)

`/2x/2A94D6/fa-microphone/marker.png`
#
![image](https://cloud.githubusercontent.com/assets/848347/2747453/53bc8f06-c76c-11e3-89cb-5e0bd134bccd.png)

`/1x/green/fa-home/marker.png`
#
![image](https://cloud.githubusercontent.com/assets/848347/2747457/71594770-c76c-11e3-9380-ee293df6144b.png)

`/2x/F3AE4E/marker.png?text=5`
