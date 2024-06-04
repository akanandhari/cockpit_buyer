//import { v4 as uuidv4 } from 'uuid';
export class supplierInfo
{
    public SupplierGroupName:string='';
    public trunover:statistic[]=[];
    public performance:statistic[]=[];
    public srq:srq={};
    constructor(){}
static from(data:any)
{
    let oSupplierInfo= new supplierInfo();
    oSupplierInfo={...data};
return oSupplierInfo;
}
}
export class srq
{
public q?:number=0;
public d?:number=0;
}
export class afterSales
{
public vor?:number=0;
public bo?:number=0;
}
export class statistic
{
    public id:any="";
    public year?:number;

}
export class trunover extends statistic
{
public purchased:number=0;
}
export class performance extends statistic
{
    public impact:number =0;
    public height:number =0;
}

