//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Wrly.Data.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ActivityAction
    {
        public long ID { get; set; }
        public long ActivityID { get; set; }
        public int Action { get; set; }
        public string IpAddress { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public long EntityID { get; set; }
    
        public virtual Entity Entity { get; set; }
        public virtual NetworkActivity NetworkActivity { get; set; }
    }
}
