
export class RequestModel {
    _type!: string
    vendorId!: string
    clientReferenceId!: string
    creditRepositoriesRequested!: string[]
    scoringModelCodes!: any[]
    additionalFeatureCodes!: any[]
    parties!: Party[]

    constructor(){
        this._type = 'CreditReporting.ConsumerCredit.CreateReport';
        this.vendorId = 'EquifaxConsumer';
        this.clientReferenceId = '3654';
        this.creditRepositoriesRequested = [
            "EFU"
          ];

          let partyList  = new Array<Party>();
          

          let parties = new Party();
          parties.partyType = 'Individual';
          parties.firstName = 'MICHAEL';
          parties.lastName = 'BOOTH';
          parties.middleName = 'K';
          parties.birthDate = '2000-08-01';
          parties.socialSecurityIdentifier = '666269731';

          let role = new Role();
          role.roleType = 'Borrower';
          role.classificationType = 'Primary';
          role.roleIdentifier = '3654';
          parties.role = role;

          let addressList = new Array<Address>();

          let address = new Address();
          address.addressType = 'Current';
          address.firstLine = '10629 HIGHWAY 5';
          address.city = 'GROVESPRING';
          address.stateCode = 'MO';
          address.postalCode = '656628355';
          addressList.push(address);

          parties.addresses = addressList;

          partyList.push(parties);
          this.parties = partyList;




    }

  }
  
    export class Party {
    partyType!: string
    firstName!: string
    lastName!: string
    middleName!: string
    suffixName!: string
    birthDate!: string
    homePhone!: string
    socialSecurityIdentifier!: string
    role!: Role
    addresses!: Address[]
  }
  
  export class Role {
    roleType!: string
    classificationType!: string
    roleIdentifier!: string
  }
  
  export class Address {
    addressType!: string
    firstLine!: string
    city!: string
    stateCode!: string
    postalCode!: string
  }


  