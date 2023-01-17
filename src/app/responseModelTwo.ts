export class CreditReportTwo {
    ServiceActivatorId!: string
    StatusCode!: number
    Payload!: Payload
  }
  
  export class Payload {
    responseDateTime!: string
    clientReferenceId!: string
    creditRepositoriesIncluded!: string[]
    creditVendor!: CreditVendor
    parties!: Party[]
    documents!: Document[]
    transactionStatus!: TransactionStatus
  }
  
  export class CreditVendor {
    name!: string
    address!: Address
  }
  
  export class Address {
    city!: string
    stateCode!: string
    postalCode!: string
  }
  
  export class Party {
    partyType!: string
    firstName!: string
    lastName!: string
    birthDate!: string
    socialSecurityIdentifier!: string
    addresses!: Address2[]
    role!: Role
    aliases!: Alias[]
    employers!: Employer[]
  }
  
  export class Address2 {
    addressType!: string
    firstLine!: string
    city!: string
    stateCode!: string
    postalCode!: string
  }
  
  export class Role {
    borrowerResponseInformation!: BorrowerResponseInformation
    documentIdentifiers!: string[]
    roleType!: string
    classificationType!: string
    roleIdentifier!: string
  }
  
  export class BorrowerResponseInformation {
    creditFiles: CreditFile[] = []
    addressDiscrepancyIndicator: boolean = false
    fraudIdentityScanAlerts: FraudIdentityScanAlert[] = []
    ofacAlerts: OfacAlert[] = []
    militaryLendingAct!: MilitaryLendingAct
    inquiries: Inquiry[] = []
    trades: Trade[] = []
    creditScores: CreditScore[] = []
  }
  
  export class CreditFile {
    dataSource!: string
    hit!: Hit
    fileSinceDate!: string
    lastActivityDate!: string
  }
  
  export class Hit {
    code!: string
    description!: string
  }
  
  export class FraudIdentityScanAlert {
    code!: string
    description!: string
  }
  
  export class OfacAlert {
    dataSource!: string
    alert!: Alert
  }
  
  export class Alert {
    code!: string
    description!: string
  }
  
  export class MilitaryLendingAct {
    resultStatus!: string
    coveredBorrowerIndicator!: boolean
    disclaimerStatement!: string
    referralContactNumber!: string
  }
  
  export class Inquiry {
    dataSource!: string
    inquiryDate!: string
    inquiryType!: string
    customerName!: string
    customerId!: string
    industry!: Industry
  }
  
  export class Industry {
    code!: string
  }
  
  export class Trade {
    dataSource!: string
    accountDesignator!: AccountDesignator
    customerName!: string
    customerId!: string
    accountId!: string
    portfolioType!: PortfolioType
    openedDate!: string
    reportedDate!: string
    lastActivityDate!: string
    highBalanceAmount!: number
    unpaidBalanceAmount!: number
    scheduledPaymentAmount?: number
    rateStatus!: RateStatus
    pastDueAmount?: number
    narratives?: Narra[]
    "30DaysLate"?: number
    "60DaysLate"?: number
    "90DaysLate"?: number
    automatedUpdateIndicator?: string
    monthsReviewed?: string
  }
  
  export class AccountDesignator {
    code!: string
    description!: string
  }
  
  export class PortfolioType {
    code!: string
    description!: string
  }
  
  export class RateStatus {
    code!: string
    description!: string
  }
  
  export class Narra {
    code!: string
    description!: string
  }
  
  export class CreditScore {
    dataSource!: string
    scoreModel!: ScoreModel
    scoreValue!: number
    riskBasedPricingPercentage!: number
    riskBasedPricingLow!: number
    riskBasedPricingHigh!: number
    factors!: Factor[]
  }
  
  export class ScoreModel {
    code!: string
    description!: string
  }
  
  export class Factor {
    code!: string
    description!: string
  }
  
  export class Alias {
    firstName!: string
    lastName!: string
  }
  
  export class Employer {
    employmentType!: string
    fullName!: string
  }
  
  export class Document {
    documentType!: string
    documentIdentifier!: string
    embeddedContent!: string
  }
  
  export class TransactionStatus {
    vendorCode!: string
  }
  