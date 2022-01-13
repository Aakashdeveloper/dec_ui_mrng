function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}
undefined
var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
var English = new language('English','USA')
undefined
English
language {name: 'English', country: 'USA', greet: ƒ}
English.greet()
'Say Hi to English'