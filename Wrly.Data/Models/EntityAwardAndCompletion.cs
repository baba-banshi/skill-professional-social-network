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
    
    public partial class EntityAwardAndCompletion
    {
        public EntityAwardAndCompletion()
        {
            this.AccomplishmentStates = new HashSet<AccomplishmentState>();
            this.AppreciationAndRecommendations = new HashSet<AppreciationAndRecommendation>();
            this.AwardSkills = new HashSet<AwardSkill>();
            this.EntityAwardParticipants = new HashSet<EntityAwardParticipant>();
            this.NetworkActivities = new HashSet<NetworkActivity>();
            this.Notificactions = new HashSet<Notificaction>();
        }
    
        public long AwardID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long EntityID { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime EditedOn { get; set; }
        public string EditedBy { get; set; }
        public string IpAddress { get; set; }
        public Nullable<byte> Status { get; set; }
        public Nullable<long> CareerHistoryID { get; set; }
        public Nullable<byte> Type { get; set; }
        public Nullable<int> StartFromYear { get; set; }
        public Nullable<int> StartFromMonth { get; set; }
        public Nullable<int> StartFromDay { get; set; }
        public Nullable<int> EndFromYear { get; set; }
        public Nullable<int> EndFromMonth { get; set; }
        public Nullable<int> EndFromDay { get; set; }
        public Nullable<bool> PottentialCurrent { get; set; }
        public Nullable<System.DateTime> PottentialStartDate { get; set; }
        public Nullable<System.DateTime> PottentialEndDate { get; set; }
        public string Url { get; set; }
        public string SubType { get; set; }
        public Nullable<long> ParentID { get; set; }
        public string Role { get; set; }
    
        public virtual ICollection<AccomplishmentState> AccomplishmentStates { get; set; }
        public virtual ICollection<AppreciationAndRecommendation> AppreciationAndRecommendations { get; set; }
        public virtual ICollection<AwardSkill> AwardSkills { get; set; }
        public virtual CareerHistory CareerHistory { get; set; }
        public virtual Entity Entity { get; set; }
        public virtual ICollection<EntityAwardParticipant> EntityAwardParticipants { get; set; }
        public virtual ICollection<NetworkActivity> NetworkActivities { get; set; }
        public virtual ICollection<Notificaction> Notificactions { get; set; }
    }
}
