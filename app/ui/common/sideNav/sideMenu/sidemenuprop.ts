
class propsType
{
  public icon:string='';  
  public title?:string="";
  public menu:string="";
  public width?:number=16;
  public path?:string="/my";
}

const sidemenuList:propsType[]=
[
   {icon:'square',
    menu:'My Cockpit',
    path:''
    },
    {icon:'performance',
    menu:'Performance review',
    title:'performance management',
     path:'/performance'
    },
    {icon:'meter',
    menu:'Suppliers Risk Quotation',
    title:'Suppliers',
    path:'/supplier'
    },
    {icon:'checklist',
    menu:'After Sales',
    title:'My Activities',
    width:12,
    path:'/my'
    },
    {icon:'calc',
    menu:'Pillars & Rules',
    title:'Help',
    path:'/help'
    },
    {icon:'setting',
    title:'settings',
    menu:'General settings',
    path:'/settings'
    }
];
export { sidemenuList,propsType};