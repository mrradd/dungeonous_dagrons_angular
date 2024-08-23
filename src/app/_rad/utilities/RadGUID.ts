export class RadGUID {
  constructor(public guid: string) {
    this._guid = guid;
  }

  private _guid: string;

  public ToString(): string {
    return this.guid;
  }

  /**
   * Generates a pseudo random new GUID.
   * @returns A new RadGUID.
   **/
  static MakeNew(): RadGUID {
    let newGuid: string = "";
    let value: string;
    let counter: number;
    const numberOfCharactersInAGuid = 32;

    for (counter = 0; counter < numberOfCharactersInAGuid; counter++) {

      //Check for where a '-' should be added in the GUID.
      if (counter == 8 || counter == 12 || counter == 16 || counter == 20) {
        newGuid = newGuid + '-';
      }

      //Calculates the hex value and makes it upper case.
      value = Math.floor(Math.random() * 16).toString(16).toUpperCase();

      //Add to the 
      newGuid = newGuid + value;
    }

    return new RadGUID(newGuid);
  }
}