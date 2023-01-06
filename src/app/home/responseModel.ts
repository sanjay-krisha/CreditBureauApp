export class CreditReport {
    public ServiceActivatorId!: string
    public StatusCode!: number
    public Payload!: Payload
  }
  
  export class Payload {
    public responseDateTime!: string
    public creditRepositoriesIncluded!: string[]
    public creditVendor!: CreditVendor
    public parties!: Party[]
    public documents!: Document[]
  }
  
  export class CreditVendor {
    public name!: string
  }
  
  export class Party {
    public partyType!: string
    public firstName!: string
    public lastName!: string
    public middleName!: string
    public birthDate!: string
    public socialSecurityIdentifier!: string
    public addresses!: Address[]
    public role!: Role
  }
  
  export class Address {
    public addressType!: string
    public firstLine!: string
    public city!: string
    public stateCode!: string
    public postalCode!: string
  }
  
  export class Role {
    public borrowerResponseInformation!: BorrowerResponseInformation
    public roleType!: string
    public classificationType!: string
  }
  
  export class BorrowerResponseInformation {
    public creditFiles!: CreditFile[]
    public fraudIdentityScanAlerts!: FraudIdentityScanAlert[]
    public ofacAlerts!: OfacAlert[]
  }
  
  export class CreditFile {
    public dataSource!: string
    public hit!: Hit
    public fileSinceDate!: string
  }
  
  export class Hit {
    public code!: string
  }
  
  export class FraudIdentityScanAlert {
    public code!: string
  }
  
  export class OfacAlert {
    public dataSource!: string
    public alert!: Alert
  }
  
  export class Alert {
    public code!: string
    public description!: string
  }
  
  export class Document {
    public documentType!: string
    public documentIdentifier!: string
    public embeddedContent!: string
  }
  