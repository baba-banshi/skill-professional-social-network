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
    
    public partial class PrivacySetting
    {
        public long SettingID { get; set; }
        public Nullable<long> EntityID { get; set; }
        public Nullable<byte> EmailAddressVisibilityLevel { get; set; }
        public Nullable<byte> MessageRestrictionLevel { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string EditedBy { get; set; }
        public Nullable<System.DateTime> EditedDate { get; set; }
        public Nullable<bool> SearchEngineVisible { get; set; }
    
        public virtual Entity Entity { get; set; }
    }
}
