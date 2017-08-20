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
    
    public partial class SubscriptionPlan
    {
        public SubscriptionPlan()
        {
            this.SubscriptionHistories = new HashSet<SubscriptionHistory>();
        }
    
        public long PlanID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public System.DateTime CreateDate { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime EditedDate { get; set; }
        public string EditedBy { get; set; }
        public bool Active { get; set; }
        public bool AvailableForIndividual { get; set; }
        public bool AvailableForOrganization { get; set; }
        public int MaxValidityInMonths { get; set; }
    
        public virtual ICollection<SubscriptionHistory> SubscriptionHistories { get; set; }
    }
}
