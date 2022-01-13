function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

///Es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return `Say Hi to ${this.name}`
    }
}

var french = new language1('French','France')
undefined
french.greet()
'Say Hi to French'