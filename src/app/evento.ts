export class Evento {

        start: Date;
        title: string;

    setStart(d : Date) : void{
        this.start=d
    }
    setTitle(s : string) : void{
        this.title=s
    }
    getTitle() : string{
        return this.title
    }
    getStart() : Date{
        return this.start
    }

}
